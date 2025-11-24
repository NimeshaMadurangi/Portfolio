import React from "react"
import { ArrowDownIcon } from "lucide-react"

const Home: React.FC = () => {
  const techs = [
    "PHP",
    "Laravel",
    "Java",
    "Spring Boot",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "CSS",
    "Tailwind",
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background lights */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5 dark:from-purple-900/20 dark:to-blue-900/10"></div>

      {/* Floating Glow Blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* MAIN TITLE 3D FLOAT */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white animate-heroFloat [transform-style:preserve-3d]">
          Hello, I'm Nimesha Madurangi 👋
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 animate-subFloat">
          Software Engineer
        </p>

        {/* TECH STACK 3D FLOAT ANIMATION */}
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                         text-purple-700 dark:text-purple-300 text-sm font-medium shadow 
                         animate-techFloat [transform-style:preserve-3d]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="/Nimesha-Madurangi.pdf"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium 
                       hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg 
                       hover:shadow-purple-500/25 flex items-center gap-2"
            download
          >
            Download CV
            <ArrowDownIcon size={18} />
          </a>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium 
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
          className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          aria-label="Scroll down"
        >
          <ArrowDownIcon size={24} />
        </button>
      </div>
    </section>
  )
}

export default Home
