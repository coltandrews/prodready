import { useState } from 'react'
import Section from '../components/Section'
import apservaLogo from '../assets/apserva_logo.png'
import foodLoopLogo from '../assets/foodloop_logo.png'

const HomePage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    setFormMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setFormStatus('success')
      setFormMessage('Thank you for your message. We will get back to you soon.')
      e.currentTarget.reset()
    } catch (error) {
      setFormStatus('error')
      setFormMessage('Something went wrong. Please try again or email us directly.')
      console.error('Form submission error:', error)
    }
  }

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
            Get Started
          </button>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help at any stage: building, deploying, or maintaining. 
            Full journey or specific needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-3">Build</div>
            <p className="text-gray-600 mb-6">
              Full-stack development with modern tools. Production-ready software, 
              not prototypes. Proper architecture from day one.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Full-stack development</li>
              <li>• Architecture and data modeling</li>
              <li>• Testing and code quality</li>
              <li>• Documentation</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-3">Deploy</div>
            <p className="text-gray-600 mb-6">
              Cloud infrastructure and deployment pipelines. Production-ready 
              infrastructure from day one.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Cloud infrastructure setup</li>
              <li>• CI/CD pipelines</li>
              <li>• Database and hosting</li>
              <li>• Security configuration</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-3">Maintain</div>
            <p className="text-gray-600 mb-6">
              Ongoing operations and support. We monitor systems, handle deployments, 
              and keep everything running smoothly.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• System monitoring</li>
              <li>• Deployment management</li>
              <li>• Performance optimization</li>
              <li>• Issue resolution</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" className="bg-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Examples of how we've helped founders and small teams at different stages.
          </p>
        </div>
        
        <div className="space-y-24 max-w-6xl mx-auto">
          {/* Apserva */}
          <div className="relative">
            <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
              <div className="md:col-span-4 mb-8 md:mb-0 md:sticky md:top-24">
                <img 
                  src={apservaLogo} 
                  alt="Apserva logo"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
              <div className="md:col-span-8 space-y-8">
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Problem</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Software teams needed to understand real user behavior in legacy applications 
                    to guide modernization decisions, but lacked visibility into how their systems 
                    were actually being used.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Solution</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We architected and built a SaaS analytics platform from the ground up. 
                    The platform includes analytics pipelines, a scalable multi-tenant architecture, 
                    and is deployed for rapid iteration.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Outcome</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The platform helps software teams make data-driven decisions about product 
                    modernization. The architecture supports both early pilots and scales for 
                    long-term growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Food Loop */}
          <div className="relative">
            <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
              <div className="md:col-span-4 mb-8 md:mb-0 md:sticky md:top-24">
                <img 
                  src={foodLoopLogo} 
                  alt="Food Loop logo"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
              <div className="md:col-span-8 space-y-8">
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Problem</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A startup was running on shared hosting that couldn't scale and lacked reliability. 
                    They needed to migrate to cloud infrastructure but didn't have the expertise to 
                    lead the transition.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Solution</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We led a complete cloud migration from shared hosting to AWS. We designed and 
                    implemented secure cloud architecture, worked directly with founders, and led 
                    an engineering team through the transition.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Outcome</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The migration significantly improved scalability and reliability. The application 
                    now runs on secure, scalable cloud infrastructure that can grow with the business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why ProdReady</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-lg font-semibold text-gray-900 mb-2">Any Stage</div>
              <p className="text-gray-600 text-sm">
                We help at any stage: building, deploying, or maintaining. 
                Full journey or specific needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-lg font-semibold text-gray-900 mb-2">Production-Ready</div>
              <p className="text-gray-600 text-sm">
                Real software that ships and runs reliably. Production-ready from day one.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-lg font-semibold text-gray-900 mb-2">Direct Partnership</div>
              <p className="text-gray-600 text-sm">
                We work directly with founders and small teams, not through layers 
                of project management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-lg font-semibold text-gray-900 mb-2">Built to Scale</div>
              <p className="text-gray-600 text-sm">
                Technical decisions that work now and scale later. 
                Architecture that grows with you.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Started</h2>
            <p className="text-lg text-gray-600">
              Tell us about your project and we'll get back to you.
            </p>
          </div>
          <form 
            className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-200"
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              {formMessage && (
                <div className={`p-4 rounded-md ${
                  formStatus === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {formMessage}
                </div>
              )}
              <div>
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full px-6 py-3 bg-gray-900 text-white text-base font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Section>
    </>
  )
}

export default HomePage

