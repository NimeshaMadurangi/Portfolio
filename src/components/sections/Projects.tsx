import React from "react"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"
interface ProjectProps {
  title: string
  description: string
  tech: string[]
  github?: string
  image: string
}
const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tech,
  github,
  image,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
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
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
          >
            <GithubIcon size={18} />
            <span>View on GitHub</span>
          </a>
        )}
      </div>
    </div>
  )
}
const Projects: React.FC = () => {
  const projects = [
    {
      title: "V-Clean – Mobile Garbage Collection App",
      description:
        "Real-time trash can level detection system with sensor-based alerts for efficient waste management.",
      tech: ["Java", "Spring Boot", "React Native", "MySQL", "IoT", "Docker"],
      github: "#",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Social Media Platform for Fitness",
      description:
        "Social application for fitness enthusiasts to share workouts and progress, with OAuth2-based user authentication.",
      tech: ["Java", "Spring Boot", "React JS", "MySQL"],
      github: "#",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Hardware Management System",
      description:
        "Full-featured hardware inventory system with order and payment management capabilities.",
      tech: ["PHP", "Laravel", "Bootstrap", "SQL"],
      github: "#",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Draw Video Sharing System",
      description:
        "Platform for artists to share drawing videos and tutorials with the community.",
      tech: ["React JS", "Node.js", "MongoDB"],
      github: "#",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Event Management System",
      description:
        "Comprehensive system for planning, organizing, and managing various types of events.",
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      github: "#",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Report Generator for DLB",
      description:
        "Automated report generation system for Development Lotteries Board with data visualization.",
      tech: ["Java", "Spring Boot", "React JS", "Chart.js"],
      github: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my academic and personal projects showcasing my
            skills and interests in software development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              image={project.image}
            />
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
