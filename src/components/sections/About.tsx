import React from "react"
import { UserIcon } from "lucide-react"
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                <img
                  src="../public/nimesha.jpg"
                  alt="Nimesha Madurangi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full text-white shadow-lg">
                <UserIcon size={28} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mb-6"></div>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm a final-year Information Technology undergraduate at the Sri
              Lanka Institute of Information Technology (SLIIT), expecting to
              graduate next month. With one year of hands-on industry
              experience, I've worked as a Trainee Frontend Engineer and an
              Intern Software Engineer, focusing primarily on frontend
              development using React.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm passionate about building clean, efficient, and user-friendly
              software solutions. My journey has equipped me with practical
              skills in both frontend and backend development, as well as
              exposure to DevOps tools and modern software engineering
              practices.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I’m a quick learner who thrives in collaborative environments and
              enjoys solving real-world problems with innovative thinking and
              technical precision. I'm always eager to explore new technologies
              and improve my craft to deliver impactful results.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span>React</span>
              </div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>UI/UX Design</span>
              </div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Solve Problems</span>
              </div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span>Learn Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
