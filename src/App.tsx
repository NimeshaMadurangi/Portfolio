import { useState } from "react"
import Header from "./components/layout/Header"
import Home from "./components/sections/Home"
import About from "./components/sections/About"
import Technologies from "./components/sections/Technologies"
import Projects from "./components/sections/Projects"
import Experience from "./components/sections/Experience"
import Education from "./components/sections/Education"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
export function App() {
  const [darkMode, setDarkMode] = useState(true)
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div
      className={`${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="w-full">
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
