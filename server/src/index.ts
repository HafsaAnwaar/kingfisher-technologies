import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { leadInputSchema, saveLead } from './leads.js'
import { getMailTargets, notifyLead } from './mail.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
dotenv.config({ path: path.join(repoRoot, '.env') })
dotenv.config()

const app = express()
const port = Number(process.env.PORT) || 4000
const clientOrigin = process.env.CLIENT_ORIGIN || true
const clientDist = path.resolve(__dirname, '../../client/dist')

app.use(cors({ origin: clientOrigin }))
app.use(express.json({ limit: '32kb' }))

app.use((error: unknown, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (error instanceof SyntaxError) {
    res.status(400).json({ error: 'Invalid JSON' })
    return
  }
  next(error)
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, mail: getMailTargets() })
})

app.post('/api/leads', async (req, res) => {
  const parsed = leadInputSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid demo request' })
    return
  }

  try {
    const lead = await saveLead(parsed.data)
    try {
      const mail = await notifyLead(lead)
      res.status(201).json({ id: lead.id, mailed: true, channel: mail.channel, to: mail.to })
    } catch (mailError) {
      console.error('Lead saved but email failed:', mailError)
      const message = mailError instanceof Error ? mailError.message : 'Email delivery failed'
      res.status(201).json({
        id: lead.id,
        mailed: false,
        warning: message,
      })
    }
  } catch (error) {
    console.error('Lead save failed:', error)
    res.status(500).json({ error: 'Could not save your request' })
  }
})

if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist, { index: false, maxAge: '1h' }))
  app.get(/^\/(?!api).*/, (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'))
  })
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Kingfisher listening on http://0.0.0.0:${port}`)
  if (fs.existsSync(clientDist)) {
    console.log(`Serving client from ${clientDist}`)
  } else {
    console.warn(`Client build missing at ${clientDist} — run npm run build`)
  }
})
