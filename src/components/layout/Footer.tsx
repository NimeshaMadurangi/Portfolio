import React from "react"
import { GithubIcon, LinkedinIcon, MailIcon, HeartIcon } from "lucide-react"
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
              Nimesha Madurangi
            </div>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          <div className="flex gap-4 mb-6 md:mb-0">
            <a
              href="https://github.com/NimeshaMadurangi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nimesha-madurangi-812972217/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:maduranginimesha8@gmail.com"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <MailIcon size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            <span>
              © {new Date().getFullYear()} Nimesha Madurangi. Made with
            </span>
            <HeartIcon size={16} className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
