import { useEffect } from 'react'
import Section from '../components/Section'

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

const HomePage = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // Wait for Calendly script to load, then initialize
    const initCalendly = () => {
      if (window.Calendly) {
        const widget = document.querySelector('.calendly-inline-widget')
        if (widget && !widget.hasAttribute('data-processed')) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/colt-prodready/30min',
            parentElement: widget as HTMLElement,
          })
          widget.setAttribute('data-processed', 'true')
        }
      } else {
        // Retry if Calendly not loaded yet
        setTimeout(initCalendly, 100)
      }
    }

    // Start initialization after a short delay to ensure script is loaded
    const timer = setTimeout(initCalendly, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Production-ready software.<br />Built right.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We help founders and small teams build, deploy, and maintain applications. 
            One partner for whatever you need.
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gray-900 text-white text-base font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 mb-3">MVP Builds</div>
            <p className="text-gray-600">
              Idea → live product. We build production-ready MVPs fast, not prototypes. 
              Real software that ships and runs reliably.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 mb-3">Fix Broken Production Apps</div>
            <p className="text-gray-600">
              Your app is down, slow, or unstable. We diagnose, fix, and stabilize 
              production systems quickly.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 mb-3">Ongoing Engineering Support</div>
            <p className="text-gray-600">
              Monthly engineering support for startups without a senior dev. 
              We handle production while you focus on product.
            </p>
          </div>
        </div>
      </Section>

      {/* Proof */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why ProdReady</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              We've built and maintained production systems that handle real users and real traffic. 
              Not demos or proof-of-concepts—actual software that runs in production.
            </p>
            <p>
              We respond quickly, explain what we're doing, and don't disappear after deployment. 
              If something breaks, we fix it.
            </p>
            <p>
              You get production-ready work without the overhead of hiring a full team. 
              One partner who handles the technical work so you can focus on your product.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Tell us a little about yourself and choose a time slot.
            </p>
          </div>
          
          {/* Calendly */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/colt-prodready/30min"
            style={{ minWidth: '100%', height: '700px' }}
          />
        </div>
      </Section>
    </>
  )
}

export default HomePage

