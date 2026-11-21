export type DemoRequest = {
  email: string
  company: string
  name: string
  role?: string
  modes: string[]
  note?: string
}

export async function submitDemoRequest(body: DemoRequest) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    throw new Error('Demo request failed')
  }
  return (await response.json()) as { id: string }
}
