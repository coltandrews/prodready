import { Link } from 'react-router-dom'

interface CTAProps {
  primary?: boolean
  href?: string
  children: React.ReactNode
  onClick?: () => void
}

const CTA = ({ primary = true, href, children, onClick }: CTAProps) => {
  const baseClasses = "inline-block px-6 py-3 text-sm font-medium rounded-md transition-colors"
  const primaryClasses = "bg-gray-900 text-white hover:bg-gray-800"
  const secondaryClasses = "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50"

  if (href) {
    return (
      <Link
        to={href}
        className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {children}
    </button>
  )
}

export default CTA

