import nodemailer from 'nodemailer'
import type { Lead } from './leads.js'

/** Inbox that receives form submissions. */
const contactInbox = process.env.CONTACT_INBOX || 'inquiry@kingfishertec.com'
/** Public brand address shown on the site / Reply-To fallback. */
const publicEmail = process.env.PUBLIC_CONTACT_EMAIL || 'inquiry@kingfishertec.com'
const siteOrigin = process.env.CLIENT_ORIGIN || process.env.SITE_ORIGIN || 'http://localhost:5173'

function smtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
}

function formatLeadBody(lead: Lead) {
  return [
    'New Kingfisher demo / contact request',
    '',
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company}`,
    `Role: ${lead.role || '—'}`,
    `Modes: ${lead.modes.length ? lead.modes.join(', ') : '—'}`,
    `Note: ${lead.note || '—'}`,
    '',
    `Lead ID: ${lead.id}`,
    `Submitted: ${lead.createdAt}`,
    `Site contact: ${publicEmail}`,
  ].join('\n')
}

async function sendViaSmtp(lead: Lead) {
  const port = Number(process.env.SMTP_PORT || 587)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Kingfisher Site" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: contactInbox,
    replyTo: lead.email || publicEmail,
    subject: `Kingfisher inquiry — ${lead.company}`,
    text: formatLeadBody(lead),
    html: `<pre style="font:14px/1.5 system-ui,sans-serif;white-space:pre-wrap">${formatLeadBody(lead)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')}</pre>`,
  })
}

async function sendViaFormSubmit(lead: Lead) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contactInbox)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: siteOrigin,
      Referer: `${siteOrigin.replace(/\/$/, '')}/`,
    },
    body: JSON.stringify({
      _subject: `Kingfisher inquiry — ${lead.company}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: lead.email,
      name: lead.name,
      email: lead.email,
      company: lead.company,
      role: lead.role || '',
      modes: lead.modes.join(', '),
      note: lead.note || '',
      leadId: lead.id,
      submittedAt: lead.createdAt,
      publicContact: publicEmail,
    }),
  })

  const text = await response.text()
  let payload: { success?: string | boolean; message?: string } = {}
  try {
    payload = JSON.parse(text) as typeof payload
  } catch {
    /* non-JSON */
  }

  const okFlag = payload.success === true || payload.success === 'true'
  if (!response.ok || !okFlag) {
    throw new Error(payload.message || text.slice(0, 240) || `FormSubmit failed (${response.status})`)
  }
}

async function sendViaResend(lead: Lead) {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set')

  const from = process.env.RESEND_FROM || 'Kingfisher Site <onboarding@resend.dev>'
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [contactInbox],
      reply_to: lead.email || publicEmail,
      subject: `Kingfisher inquiry — ${lead.company}`,
      text: formatLeadBody(lead),
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Resend failed (${response.status}): ${text.slice(0, 240)}`)
  }
}

export async function notifyLead(lead: Lead) {
  if (smtpConfigured()) {
    await sendViaSmtp(lead)
    return { channel: 'smtp' as const, to: contactInbox }
  }

  if (process.env.RESEND_API_KEY) {
    await sendViaResend(lead)
    return { channel: 'resend' as const, to: contactInbox }
  }

  // Activated FormSubmit — delivers straight to CONTACT_INBOX
  await sendViaFormSubmit(lead)
  return { channel: 'formsubmit' as const, to: contactInbox }
}

export function getMailTargets() {
  return {
    contactInbox,
    publicEmail,
    smtpConfigured: smtpConfigured(),
    resendConfigured: Boolean(process.env.RESEND_API_KEY),
    siteOrigin,
  }
}
