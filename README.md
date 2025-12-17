# ProdReady LLC - Landing Site

A production-ready React landing site for ProdReady LLC, a product and infrastructure consulting company.

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
prodready/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── CTA.tsx
│   ├── pages/          # Page components
│   │   ├── LandingPage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── OurWorkPage.tsx
│   ├── App.tsx         # Main app with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Features

- **Landing Page**: Hero section, What We Do, Who It's For, Why ProdReady, Process, and Contact form
- **Services Page**: Detailed service cards for Product Engineering, Infrastructure & Cloud, and Production Readiness
- **Our Work Page**: Case study layout with placeholder projects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO**: Meta tags and structured content

## Customization

### Updating Content

- **Landing Page**: Edit `src/pages/LandingPage.tsx`
- **Services**: Edit `src/pages/ServicesPage.tsx`
- **Case Studies**: Edit the `projects` array in `src/pages/OurWorkPage.tsx`
- **Company Info**: Update Footer component in `src/components/Footer.tsx`

### Styling

The project uses Tailwind CSS. Customize colors and theme in `tailwind.config.js`.

### Contact Form

The contact form uses Resend for email delivery. To set it up:

1. Create a `.env` file in the root directory (see `.env.example` for template)
2. Add your `RESEND_API_KEY` and `CONTACT_EMAIL` to the `.env` file
3. For local development, use `vercel dev` to test the API route
4. For production, add environment variables in your Vercel project settings

See `EMAIL_SETUP.md` for detailed instructions.

## License

Copyright © ProdReady LLC. All rights reserved.

