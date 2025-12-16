import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">ProdReady</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Services
            </Link>
            <Link
              to="/work"
              className={`text-sm font-medium transition-colors ${
                isActive('/work') 
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Our Work
            </Link>
          </div>

          <Link
            to="/contact"
            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Talk to an Engineer
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-4 py-3 space-y-2">
          <Link
            to="/"
            className={`block text-sm font-medium ${
              isActive('/') ? 'text-gray-900' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block text-sm font-medium ${
              isActive('/services') ? 'text-gray-900' : 'text-gray-600'
            }`}
          >
            Services
          </Link>
          <Link
            to="/work"
            className={`block text-sm font-medium ${
              isActive('/work') ? 'text-gray-900' : 'text-gray-600'
            }`}
          >
            Our Work
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

