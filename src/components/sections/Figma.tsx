import { ExternalLinkIcon } from "lucide-react"

interface ProjectProps {
  title: string
  description: string
  figma: string
  image: string
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  figma,
  image,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl flex flex-col">
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>

      {/* Project Details */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {description}
        </p>

        {/* Figma Link */}
        <div className="mt-auto">
          <a
            href={figma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
          >
            <ExternalLinkIcon size={18} />
            <span>View on Figma</span>
          </a>
        </div>
      </div>
    </div>
  )
}

const Figma: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "TRV Mobile App UI/UX",
      description:
        "A modern and responsive mobile application design for dark/light themes.",
      figma:
        "https://www.figma.com/design/E0IRpdNViCzMK8YJUvXDmQ/TRV-App?node-id=0-1&t=hbhJWxYorawNf45I-1",
      image: "/trv.png",
    },
  ]

  return (
    <section
      id="figma-projects"
      className="py-20 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Figma Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my UI/UX design projects created in Figma.
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Figma
