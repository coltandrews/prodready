import { Resend } from 'resend'

export default async function handler(req: any, res: any) {
  // Handle CORS first
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Initialize Resend inside the handler to ensure env vars are available
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set in environment variables')
    return res.status(500).json({ 
      error: 'Email service not configured',
      message: 'RESEND_API_KEY environment variable is missing. Please add it in Vercel project settings.'
    })
  }
  
  const resend = new Resend(apiKey)

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Send email to all addresses
    const adminEmail = await resend.emails.send({
      from: 'ProdReady <team@prodready.co>',
      to: ['colt@prodready.co', 'coltandrews89@gmail.com', 'team@prodready.co'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email as string,
    })

    if (adminEmail.error) {
      console.error('Resend error (admin email):', adminEmail.error)
      return res.status(500).json({ error: 'Failed to send email', details: adminEmail.error })
    }

    // Send confirmation email to the submitter
    const confirmationEmail = await resend.emails.send({
      from: 'ProdReady <team@prodready.co>',
      to: email as string,
      subject: 'Thank you for reaching out to ProdReady',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you soon.</p>
        <p>In the meantime, if you have any urgent questions, feel free to reach out directly.</p>
        <p>Best regards,<br>The ProdReady Team</p>
      `,
    })

    if (confirmationEmail.error) {
      console.error('Resend error (confirmation email):', confirmationEmail.error)
      // Don't fail the request if confirmation email fails, admin email already sent
    }

    return res.status(200).json({ success: true, data: adminEmail.data })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}

