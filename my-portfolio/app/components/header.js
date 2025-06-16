'use client'

import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
    <nav className="bg-white shadow-md">
          <div className="flex justify-between items-center  max-w-7xl mx-auto px-4 py-4">
            <div>
              <a href="/" className="text-lg font-semibold text-gray-400">My Portfolio</a>
            </div>

    
           <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <img src="/images/i.svg" alt="Menu" className="w-6 h-6" />
              </button>
            </div>

            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="/projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden flex flex-col space-y-2 pb-4">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="/projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          )}
        
      </nav>
    </header>
  )
}
export default Header;





