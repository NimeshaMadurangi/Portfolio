import React from "react"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"

interface ProjectProps {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  image: string
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tech,
  github,
  demo,
  image,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {description}
        </p>

        {tech && tech.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-md text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {(github || demo) && (
          <div className="flex gap-4 mt-auto">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
              >
                <GithubIcon size={18} />
                <span>View on GitHub</span>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
              >
                <ExternalLinkIcon size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Performance Monitoring Web & Desktop App",
      description:
        "Comprehensive system for tracking employee productivity, time management, payroll, and leave approvals.",
      tech: ["React JS", "Redux", "SCSS"],
      github: "#",
      image: "/perf.jpg",
    },
    {
      title: "E-Commerce Product Dashboard",
      description:
        "Full CRUD inventory management with search, filter, undo delete, and localStorage persistence.",
      tech: ["React", "Vite", "Tailwind"],
      github: "https://github.com/NimeshaMadurangi/E-Commerce_Dashboard.git",
      demo: "https://drive.google.com/file/d/1HWK2QA_EdtIJOnbSL9VbZPkRl85Zhveg/view?usp=sharing",
      image: "/ecom.jpg",
    },
    {
      title: "TomatoGuard – Smart Agriculture App",
      description:
        "AI-powered IoT app for tomato cultivation with disease detection, pest control, and fertilizer automation.",
      tech: ["React Native", "IoT", "Python", "CNN", "LSTM"],
      demo: "https://tomato-guard.netlify.app/",
      image: "/tomato.png",
    },
    {
      title: "V-Clean – Smart Garbage Collection",
      description:
        "IoT-enabled mobile app for waste management using ultrasonic & odor sensors with route optimization.",
      tech: ["Java", "Spring Boot", "React Native", "MySQL", "IoT"],
      github:
        "https://github.com/NimeshaMadurangi/V-Clean---Mobile-Application.git",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "DLB Newspaper Report Automation",
      description:
        "Automated newspaper advertisement generator for lottery results with visualization features.",
      tech: ["PHP", "Laravel", "React JS", "SQL"],
      github: "https://github.com/NimeshaMadurangi/report-generation.git",
      image: "/dlb.jpg",
    },
    {
      title: "Fitness Social Media Platform",
      description:
        "Community platform for sharing workouts & meal plans with like/comment features (Spring Boot API).",
      tech: ["Java", "Spring Boot", "React JS", "MySQL"],
      github: "https://github.com/NimeshaMadurangi/PAF-Assignment.git",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of academic and personal projects highlighting my
            expertise in full-stack development, IoT, and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/NimeshaMadurangi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <GithubIcon size={20} />
            <span>View More Projects on GitHub</span>
            <ExternalLinkIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
