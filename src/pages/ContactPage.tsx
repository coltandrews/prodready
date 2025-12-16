import Section from '../components/Section'

const ContactPage = () => {
  return (
    <>
      {/* Header */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Talk to an Engineer</h1>
          <p className="text-xl text-gray-600">
            Whether you need help building, deploying, or maintaining, let's discuss how we can help.
          </p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start a Conversation</h2>
            <p className="text-gray-600">
              Tell us about your project and we'll get back to you.
            </p>
          </div>
          <form 
            className="bg-white p-8 rounded-lg shadow-sm"
            onSubmit={(e) => {
              e.preventDefault()
              // Placeholder - no backend implementation
              alert('Thank you for your message. We will get back to you soon.')
            }}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </Section>
    </>
  )
}

export default ContactPage

