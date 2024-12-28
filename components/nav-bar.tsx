import Link from "next/link"

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold">Decaff</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 