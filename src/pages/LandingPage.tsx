import Section from '../components/Section'
import CTA from '../components/CTA'

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            From idea to production-ready software.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            We help founders and small teams build, deploy, and maintain applications. 
            Whether you need help at any stage or the full journey, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href="/contact">Talk to an Engineer</CTA>
            <CTA href="/services" primary={false}>View Services</CTA>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help with building, deploying, or maintaining applications. Whether you need help 
            at one stage or across the entire product journey, we're your partner.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Build</h3>
            <p className="text-gray-600">
              Full-stack development with modern tools. We build production-ready software, 
              not prototypes. Proper architecture from day one.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Deploy</h3>
            <p className="text-gray-600">
              Cloud infrastructure and deployment pipelines. We set up production infrastructure, 
              configure CI/CD, and handle the technical details so you can focus on your product.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Maintain</h3>
            <p className="text-gray-600">
              Ongoing operations and support. We monitor your systems, handle deployments, 
              and keep everything running smoothly as you grow.
            </p>
          </div>
        </div>
      </Section>

      {/* Who It's For */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who It's For</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Founders with Ideas</h3>
            <p className="text-gray-600">
              You have an idea but need help building, deploying, or maintaining it. 
              We can help at any stage or handle the full journey.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Early-Stage Startups</h3>
            <p className="text-gray-600">
              You need help building, deploying, or maintaining your product. We can assist 
              at any stage without requiring a full team.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Small Teams</h3>
            <p className="text-gray-600">
              Your team needs help building, deploying, or maintaining systems. 
              We can assist at any stage while you focus on product.
            </p>
          </div>
        </div>
      </Section>

      {/* Why ProdReady */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why ProdReady</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-gray-900 font-semibold mr-3">•</span>
              <span className="text-gray-700">
                We help at any stage: building, deploying, or maintaining. Full journey or specific needs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 font-semibold mr-3">•</span>
              <span className="text-gray-700">
                Production-ready from day one — real software that ships and runs reliably
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 font-semibold mr-3">•</span>
              <span className="text-gray-700">
                We work directly with founders and small teams, not through layers of project management
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 font-semibold mr-3">•</span>
              <span className="text-gray-700">
                We make technical decisions that work now and scale later
              </span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help at any stage: building, deploying, or maintaining. 
            One partner for whatever you need.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Build</h3>
            <p className="text-gray-600">
              We build your application with modern tools and proper architecture. 
              Production-ready code from the start.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Deploy</h3>
            <p className="text-gray-600">
              We set up cloud infrastructure, configure deployments, and get your application 
              running in production.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintain</h3>
            <p className="text-gray-600">
              We keep your systems running, handle updates, and monitor everything 
              so you can focus on your product.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

export default LandingPage

