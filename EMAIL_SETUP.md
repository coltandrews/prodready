# Email Setup Instructions

This project uses Resend to send emails from the contact form. Follow these steps to set it up:

## 1. Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month free)
3. Verify your email address

## 2. Get Your API Key

1. In Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Give it a name (e.g., "ProdReady Contact Form")
4. Copy the API key (you'll only see it once!)

## 3. Set Up Your Email Address

1. In Resend dashboard, go to "Domains"
2. You can either:
   - **Option A**: Add and verify your own domain (recommended for production)
   - **Option B**: Use the default `onboarding@resend.dev` for testing (already configured)

## 4. Configure Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:

   - **Name**: `RESEND_API_KEY`
     - **Value**: Your Resend API key from step 2
     - **Environment**: Production, Preview, Development (select all)

   - **Name**: `CONTACT_EMAIL`
     - **Value**: Your email address where you want to receive contact form submissions
     - **Environment**: Production, Preview, Development (select all)

## 5. Update the API Route (Optional)

If you want to use your own domain for the "from" address:

1. Edit `api/contact.ts`
2. Change the `from` field from:
   ```typescript
   from: 'ProdReady Contact <onboarding@resend.dev>',
   ```
   to:
   ```typescript
   from: 'ProdReady Contact <contact@yourdomain.com>',
   ```
3. Make sure the domain is verified in Resend

## 6. Deploy

After setting up environment variables, redeploy your Vercel project. The contact form will now send emails!

## Testing

1. Fill out the contact form on your site
2. Check your email inbox (the address you set in `CONTACT_EMAIL`)
3. You should receive an email with the form submission

## Troubleshooting

- **Emails not sending?** Check that environment variables are set correctly in Vercel
- **Getting errors?** Check Vercel function logs in the dashboard
- **Domain issues?** Make sure your domain is verified in Resend if using a custom domain

