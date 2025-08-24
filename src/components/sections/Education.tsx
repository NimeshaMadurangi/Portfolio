import React from "react"
import { GraduationCapIcon, AwardIcon } from "lucide-react"
const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCapIcon size={24} />
                  <h3 className="text-xl font-bold">Degree</h3>
                </div>
                <p className="text-lg font-medium">
                  BSc (Hons) in Information Technology
                  <br />
                  Specialization in Information Technology
                </p>
                <p className="mt-2 text-purple-100">2021 JUNE - 2025 JUNE</p>
                {/* <div className="flex items-center gap-3 mt-8 mb-4">
                  <AwardIcon size={24} />
                  <h3 className="text-xl font-bold">GPA</h3>
                </div>
                <p className="text-3xl font-bold">2.52/4.0</p>
                <p className="mt-2 text-purple-100">Expected</p> */}
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Earned a comprehensive degree in Information Technology with a
                  strong foundation in software engineering, database
                  management, web development, and other core IT disciplines.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Key Coursework:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Software Engineering
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Database Systems
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Web Application Development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Mobile Application Development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Cloud Computing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Artificial Intelligence
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h4 className="font-bold mb-2">Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></span>
                      <span>
                        Dean's List for Academic Excellence (2022-2023)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></span>
                      <span>
                        Best Group Project Award - Software Engineering Module
                      </span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Education
