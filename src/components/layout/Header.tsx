import React, { useEffect, useState } from "react"
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react"
interface HeaderProps {
  darkMode: boolean
  toggleTheme: () => void
}
const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
      setMobileMenuOpen(false)
    }
  }
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? "bg-gray-900/90 backdrop-blur-sm shadow-lg shadow-purple-500/10"
            : "bg-white/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Nimesha
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-purple-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("technologies")}
            className="hover:text-purple-500 transition-colors"
          >
            Technologies
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-purple-500 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="hover:text-purple-500 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-purple-500 transition-colors"
          >
            Contact
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </nav>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? "bg-gray-900" : "bg-white"
          } py-4 px-4 shadow-lg`}
        >
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollTo("about")}
              className="py-2 hover:text-purple-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("technologies")}
              className="py-2 hover:text-purple-500 transition-colors"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="py-2 hover:text-purple-500 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="py-2 hover:text-purple-500 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="py-2 hover:text-purple-500 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
export default Header
