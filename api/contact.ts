import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: Request) {
  // Handle CORS if needed
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers,
    })
  }

  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers,
      })
    }

    // Send email to your address
    const { data, error } = await resend.emails.send({
      from: 'ProdReady Contact <onboarding@resend.dev>', // Update this with your verified domain
      to: process.env.CONTACT_EMAIL || 'your-email@example.com', // Your email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers,
      })
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers,
    })
  }
}

