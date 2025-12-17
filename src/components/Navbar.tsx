import PRLongLogo from '../assets/PR_long_logo.png'
import PRShortLogo from '../assets/PR_short_logo.png'

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[52px] md:min-h-[60px] py-2">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            {/* Long logo for desktop */}
            <img 
              src={PRLongLogo} 
              alt="ProdReady" 
              className="hidden md:block h-12 md:h-[60px] lg:h-[66px] w-auto object-contain"
            />
            {/* Short logo for mobile */}
            <img 
              src={PRShortLogo} 
              alt="ProdReady" 
              className="md:hidden h-[42px] w-auto object-contain"
            />
          </button>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollTo('services')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="md:hidden px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <button
              onClick={() => scrollTo('services')}
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 w-full text-left"
            >
              Work
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
