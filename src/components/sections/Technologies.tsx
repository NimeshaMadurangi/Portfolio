import React from "react"
import {
  CodeIcon,
  ServerIcon,
  BrainIcon,
  LockIcon,
  DatabaseIcon,
  GlobeIcon,
  LayoutIcon,
  GitBranchIcon,
  BoxIcon,
  CloudIcon,
  FileCodeIcon,
  FigmaIcon,
} from "lucide-react"
import { motion } from "framer-motion"

interface TechCategoryProps {
  title: string
  icon: React.ReactNode
  items: { name: string; icon: React.ReactNode }[]
  delay?: number
}

const TechCategory: React.FC<TechCategoryProps> = ({
  title,
  icon,
  items,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105"
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-800/40 transition-colors"
          >
            {item.icon}
            {item.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

const Technologies: React.FC = () => {
  const categories = [
    {
      title: "Languages",
      icon: <CodeIcon size={24} />,
      items: [
        { name: "Java", icon: <FileCodeIcon size={16} /> },
        { name: "PHP", icon: <FileCodeIcon size={16} /> },
        { name: "JavaScript", icon: <GlobeIcon size={16} /> },
        { name: "HTML", icon: <LayoutIcon size={16} /> },
        { name: "CSS3", icon: <LayoutIcon size={16} /> },
        { name: "SQL", icon: <DatabaseIcon size={16} /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <ServerIcon size={24} />,
      items: [
        { name: "Laravel", icon: <ServerIcon size={16} /> },
        { name: "React JS", icon: <LayoutIcon size={16} /> },
        { name: "React Native", icon: <LayoutIcon size={16} /> },
        { name: "Spring Boot", icon: <ServerIcon size={16} /> },
        { name: "CodeIgniter", icon: <ServerIcon size={16} /> },
        { name: "Tailwind CSS", icon: <LayoutIcon size={16} /> },
        { name: "Bootstrap 5", icon: <LayoutIcon size={16} /> },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <BoxIcon size={24} />,
      items: [
        { name: "Git", icon: <GitBranchIcon size={16} /> },
        { name: "Docker", icon: <BoxIcon size={16} /> },
        { name: "Postman", icon: <ServerIcon size={16} /> },
        { name: "PhpMyAdmin", icon: <DatabaseIcon size={16} /> },
        { name: "MariaDB", icon: <DatabaseIcon size={16} /> },
        { name: "JDBC", icon: <DatabaseIcon size={16} /> },
        { name: "Maven", icon: <ServerIcon size={16} /> },
        { name: "AWS", icon: <CloudIcon size={16} /> },
        { name: "Azure", icon: <CloudIcon size={16} /> },
        { name: "Figma", icon: <FigmaIcon size={16} /> },
      ],
    },
    {
      title: "Concepts",
      icon: <BrainIcon size={24} />,
      items: [
        { name: "REST API", icon: <GlobeIcon size={16} /> },
        { name: "MVC", icon: <LayoutIcon size={16} /> },
        { name: "OOP", icon: <BrainIcon size={16} /> },
        { name: "OAuth2", icon: <LockIcon size={16} /> },
        { name: "JWT", icon: <LockIcon size={16} /> },
        { name: "Redux", icon: <LayoutIcon size={16} /> },
      ],
    },
  ]

  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technologies & Skills
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 origin-left"
          />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit consists of modern technologies and
            methodologies that I’ve mastered through academic and hands-on
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <TechCategory
              key={index}
              title={category.title}
              icon={category.icon}
              items={category.items}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
