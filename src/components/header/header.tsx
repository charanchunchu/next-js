"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(pathname === "/")

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
      handleScroll() // Ensure transparency is set immediately on page load
    } else {
      setIsTransparent(false)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return (
    <header className={`top-0 left-0 right-0 z-50 ${isTransparent ? "absolute bg-transparent" : "sticky bg-white shadow-md"}`}>
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
          UDAYA INFRASTRUCTURES
        </Link>

        <button
          className={`md:hidden text-gray-700 focus:outline-none z-20 ${isMenuOpen ? 'fixed top-6 right-6' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`fixed inset-0 bg-white ${isMenuOpen ? 'bg-opacity-100' : 'bg-opacity-0'} flex flex-col items-center justify-center gap-6 text-xl transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:flex-row md:gap-8 md:text-base md:translate-x-0 md:bg-transparent`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`px-4 py-2 rounded transition-colors ${
                  pathname === item.path
                    ? "bg-gray-500 text-white border border-gradient-to-r from-orange-600 via-orange-500 to-pink-600 boder-1pxsolid-orange rounded"
                    : isTransparent
                    ? "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-600 hover:via-orange-500 hover:to-pink-600"
                    : "text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-600 hover:via-orange-500 hover:to-pink-600"
                }`}
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
