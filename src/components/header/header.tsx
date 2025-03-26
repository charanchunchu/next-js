"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/udayabout" },
  { name: "Services", path: "/udayservices" },
  { name: "Contact", path: "/udaycontact" },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(pathname === "/")
  const [isScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("banner")
      if (banner) {
        const bannerHeight = banner.offsetHeight
        setIsTransparent(window.scrollY < bannerHeight)
      }
    }

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll)
      handleScroll()
    } else {
      setIsTransparent(false)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Function to check if a link is active
  const isActive = (path: string) => {
    return pathname === path || 
           (path !== "/" && pathname.startsWith(path))
  }

  return (
    <header className={`top-0 left-0 right-0 z-50 ${isTransparent ? "absolute bg-transparent" : "sticky bg-white shadow-md"}`}>
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 p-2">
          <div className="flex flex-col leading-tight">
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
              UDAYA
            </span>
            <span className="text-2.5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
              INFRASTRUCTURE
            </span>
          </div>
        </Link>

        <button
          className={`md:hidden focus:outline-none z-20 ${
            isMenuOpen
              ? 'fixed top-6 right-6 text-gray-600'
              : isTransparent && !isScrolled
                ? 'text-white'
                : 'text-gray-800'
          } transition-colors duration-200`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-xl transition-all duration-300 md:static md:flex-row md:gap-8 md:text-base md:bg-transparent ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full md:opacity-100 md:translate-y-0'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`px-4 py-2 rounded transition-colors ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white"
                    : isTransparent && !isMenuOpen
                      ? "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-600 hover:via-orange-500 hover:to-pink-600"
                      : "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-600 hover:via-orange-500 hover:to-pink-600"
                } font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}