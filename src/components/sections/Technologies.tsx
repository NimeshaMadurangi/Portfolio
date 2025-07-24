import React from 'react';
import { CodeIcon, ServerIcon, BrainIcon } from 'lucide-react';
interface TechCategoryProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
}
const TechCategory: React.FC<TechCategoryProps> = ({
  title,
  icon,
  items
}) => {
  return <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
            {item}
          </span>)}
      </div>
    </div>;
};
const Technologies: React.FC = () => {
  const categories = [{
    title: 'Languages',
    icon: <CodeIcon size={24} />,
    items: ['Java', 'PHP', 'JavaScript', 'HTML', 'CSS', 'SQL']
  }, {
    title: 'Frameworks & Libraries',
    icon: <ServerIcon size={24} />,
    items: ['Laravel', 'React JS', 'React Native', 'Spring Boot', 'CodeIgniter', 'Tailwind CSS', 'Bootstrap 5']
  }, {
    title: 'Tools & Platforms',
    icon: <div size={24} />,
    items: ['Git', 'Docker', 'Postman', 'PhpMyAdmin', 'MariaDB', 'JDBC', 'Maven', 'AWS', 'Azure', 'Figma']
  }, {
    title: 'Concepts',
    icon: <BrainIcon size={24} />,
    items: ['REST API', 'MVC', 'OOP', 'OAuth2']
  }];
  return <section id="technologies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technologies & Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit consists of modern technologies and
            methodologies that I've mastered through academic and hands-on
            experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => <TechCategory key={index} title={category.title} icon={category.icon} items={category.items} />)}
        </div>
      </div>
    </section>;
};
export default Technologies;