import Section from '../components/Section'
import CTA from '../components/CTA'

const ServicesPage = () => {
  return (
    <>
      {/* Header */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            We help with building, deploying, or maintaining applications. 
            Whether you need help at one stage or across the entire journey, we're here to help.
          </p>
        </div>
      </Section>

      {/* Service Cards */}
      <Section className="bg-gray-50">
        <div className="space-y-12">
          {/* Product Engineering */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Build</h2>
            <p className="text-lg text-gray-600 mb-6">
              We build production-ready applications with modern tools. Full-stack development, 
              proper architecture, and code that's ready to ship.
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Full-stack development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Application architecture and data modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Feature development and user workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Testing and code quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Documentation and maintainable code</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Infrastructure & Deployment */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Deploy</h2>
            <p className="text-lg text-gray-600 mb-6">
              We set up cloud infrastructure and deployment pipelines. Your application runs reliably 
              in production from day one.
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Cloud infrastructure setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>CI/CD pipelines and automated deployments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Database and hosting setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Security and reliability configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Production deployment and launch</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Maintenance */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintain</h2>
            <p className="text-lg text-gray-600 mb-6">
              We keep your application running smoothly. Ongoing operations, updates, and support 
              so you can focus on building your product.
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>System monitoring and uptime management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Deployment and update management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Performance monitoring and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Issue resolution and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-semibold mr-3">•</span>
                  <span>Infrastructure scaling as you grow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you need help building, deploying, or maintaining, let's discuss how we can help.
          </p>
          <CTA href="/contact">Start a Conversation</CTA>
        </div>
      </Section>
    </>
  )
}

export default ServicesPage

