import { randomUUID } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { z } from 'zod'

const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data')
const dataFile = path.join(dataDir, 'leads.json')

export const leadInputSchema = z.object({
  email: z.string().trim().email().max(200),
  company: z.string().trim().min(1).max(200),
  name: z.string().trim().min(1).max(200),
  role: z.string().trim().max(200).optional().default(''),
  modes: z.array(z.string().trim().min(1).max(40)).max(12).default([]),
  note: z.string().trim().max(2000).optional().default(''),
})

export type LeadInput = z.infer<typeof leadInputSchema>

export type Lead = LeadInput & {
  id: string
  createdAt: string
}

async function readLeads(): Promise<Lead[]> {
  try {
    const raw = await readFile(dataFile, 'utf8')
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as Lead[]) : []
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return []
    throw error
  }
}

export async function saveLead(input: LeadInput): Promise<Lead> {
  const lead: Lead = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  }
  const leads = await readLeads()
  leads.push(lead)
  await mkdir(dataDir, { recursive: true })
  await writeFile(dataFile, JSON.stringify(leads, null, 2))
  return lead
}
