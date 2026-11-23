export type DemoRequest = {
  email: string
  company: string
  name: string
  role?: string
  modes: string[]
  note?: string
}

export type DemoResponse = {
  id: string
  mailed?: boolean
  channel?: string
  to?: string
  activationRequired?: boolean
  warning?: string
}

export async function submitDemoRequest(body: DemoRequest): Promise<DemoResponse> {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    throw new Error('Demo request failed')
  }
  const data = (await response.json()) as DemoResponse
  if (data.mailed === false) {
    throw new Error(
      data.warning ||
        'Your request was saved, but email delivery is not active yet. Check the test inbox for an activation email.',
    )
  }
  return data
}
