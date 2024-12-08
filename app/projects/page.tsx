'use client';
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "https://via.placeholder.com/600x400",
    liveLink: "https://your-ecommerce.com",
    githubLink: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    image: "https://via.placeholder.com/600x400",
    liveLink: "https://your-taskapp.com",
    githubLink: "https://github.com/yourusername/taskapp"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with data visualization.",
    tech: ["React", "D3.js", "Express", "PostgreSQL"],
    image: "https://via.placeholder.com/600x400",
    liveLink: "https://your-dashboard.com",
    githubLink: "https://github.com/yourusername/dashboard"
  },
  {
    title: "Weather Application",
    description: "Real-time weather forecasting app with location-based services.",
    tech: ["React Native", "Weather API", "Node.js"],
    image: "https://via.placeholder.com/600x400",
    liveLink: "https://your-weather.com",
    githubLink: "https://github.com/yourusername/weather"
  },
  {
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support and SEO optimization.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    image: "https://via.placeholder.com/600x400",
    liveLink: "https://your-blog.com",
    githubLink: "https://github.com/yourusername/blog"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://via.placeholder.com/600x400",
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-400 mb-12">
            Here are some of my recent projects. Each one represents different challenges and learning experiences.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 h-20">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}