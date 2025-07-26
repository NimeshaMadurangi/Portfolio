import React from "react"
import { BriefcaseIcon, CalendarIcon } from "lucide-react"
interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string[]
  techStack: string
}
const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  techStack,
}) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-300 dark:bg-purple-700"></div>
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-5 h-5 -ml-2.5 rounded-full border-4 border-purple-500 bg-white dark:bg-gray-900"></div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-wrap items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon size={16} className="mr-1" />
            {period}
          </div>
        </div>
        <div className="text-purple-600 dark:text-purple-400 font-medium mb-4">
          {company}
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <br />
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Tech Stack:</span> {techStack}
        </div>
      </div>
    </div>
  )
}
const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Trainee Software Engineer",
      company: "Phenom Corporation PVT LTD",
      period: "Feb 2025 - Present",
      description: [
        "Developed a cross-platform Performance Monitoring Web and Desktop Application at Phenom Corporation to track employee productivity, manage user roles, and automate payroll based on real-time work data. Key features include role-based access, work and break time tracking, performance dashboards, leave management, and dynamic salary calculation. Built using React.js, Redux, and SCSS.",
      ],
      techStack: "PHP, Laravel, Codeigniter, html, css, PhpMyadmin, MariaDB",
    },
    {
      title: "Intern Developer",
      company: "Development Lotteries Board",
      period: "Aug 2024 - Feb 2025",
      description: [
        "Developed a dynamic report generation module with integrated data visualization to automate and streamline the preparation of daily newspaper advertisements. The system reduced manual effort, minimized errors, and improved publishing efficiency and consistency.",
        "Designed and developed the frontend for a Daily Draw video sharing system facilitating secure and efficient media exchange between Sri Lanka Rupavahini Corporation (SLRC) and the Development Lotteries Board (DLB), improving content delivery speed and user accessibility.",
        "Built a full-featured Event Management System that automated task assignments for photographers and videographers, centralized media management, and enabled direct social media sharing, leading to a 50% decrease in manual effort and significantly faster event content publishing.",
      ],
      techStack: "PHP, Laravel, Codeigniter, html, css, PhpMyadmin, MariaDB",
    },
  ]
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in the software development industry, where I've applied
            my skills to real-world challenges.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
              <BriefcaseIcon size={24} />
            </div>
            <h3 className="text-2xl font-bold">Work History</h3>
          </div>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                techStack={exp.techStack}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
