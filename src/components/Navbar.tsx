import PRLongLogo from '../assets/PR_long_logo.png'
import PRShortLogo from '../assets/PR_short_logo.png'

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[42px] md:min-h-[48px] py-2">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            {/* Long logo for desktop */}
            <img 
              src={PRLongLogo} 
              alt="ProdReady" 
              className="hidden md:block h-[38px] md:h-[48px] lg:h-[53px] w-auto object-contain"
            />
            {/* Short logo for mobile */}
            <img 
              src={PRShortLogo} 
              alt="ProdReady" 
              className="md:hidden h-[34px] w-auto object-contain"
            />
          </button>
          
          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
