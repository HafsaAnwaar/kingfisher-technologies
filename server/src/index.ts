import cors from 'cors'
import express from 'express'
import { leadInputSchema, saveLead } from './leads.js'

const app = express()
const port = Number(process.env.PORT) || 4000
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173'

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
  res.json({ ok: true })
})

app.post('/api/leads', async (req, res) => {
  const parsed = leadInputSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid demo request' })
    return
  }

  const lead = await saveLead(parsed.data)
  res.status(201).json({ id: lead.id })
})

app.listen(port, () => {
  console.log(`Kingfisher API listening on http://localhost:${port}`)
})
