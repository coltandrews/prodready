const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">ProdReady</h3>
            <p className="text-sm text-gray-600">
              We help startups and small teams ship and stabilize production software fast—without hiring a full internal team.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('work')}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Work
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} ProdReady LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
