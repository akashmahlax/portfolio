import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiCode, HiDesktopComputer, HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython, FaGit, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb,  SiGraphql } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { BiGitBranch } from 'react-icons/bi';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="space-y-4 mb-8">
                <h2 className="text-blue-500 text-xl font-semibold">Welcome to my portfolio</h2>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Transforming Ideas Into
                  <span className="block text-transparent pb-3 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Digital Reality
                  </span>
                </h1>
                <p className="text-gray-300 text-lg max-w-2xl">
                  Full-stack developer specializing in building exceptional digital experiences.
                  Bringing innovative ideas to life with clean code and cutting-edge technology.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link 
                  href="https://instagram.com/akashmahlax" 
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
                >
                  Let's Work Together
                </Link>
                <Link 
                  href="/projects" 
                  className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition"
                >
                  View Portfolio
                </Link>
              </div>

              <div className="flex gap-6 justify-center lg:justify-start">
                {[
                  { icon: FaGithub, link: "https://github.com/akashmahlax" },
                  { icon: FaLinkedin, link: "https://linkedin.com/in/akashmahlax" },
                  { icon: FaTwitter, link: "https://twitter.com/akashmahlax" },
                  { icon: FaInstagram, link: "https://instagram.com/akashmahlax" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-7xl mx-4 transition"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative w-72 h-72 lg:w-[500px] lg:h-[500px]">
                <Image
                  src="/IMG_2239.JPG"
                  alt="Developer Portrait"
                  fill
                  className="rounded-full  object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What I Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to delivering high-quality solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: HiSparkles,
                title: "Discovery",
                description: "Understanding your needs and project requirements"
              },
              {
                icon: HiDesktopComputer,
                title: "Design",
                description: "Creating intuitive and beautiful interfaces"
              },
              {
                icon: HiCode,
                title: "Development",
                description: "Building with clean, efficient code"
              },
              {
                icon: HiLightningBolt,
                title: "Deployment",
                description: "Launching and maintaining your solution"
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm
                              hover:from-blue-500/20 hover:to-purple-500/20 transition group">
                  <div className="absolute -top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <process.icon className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-500/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Skills Section */}
       <div className="mt-16 mx-10  text-white gap-6">
            <h2 className="text-2xl justify-self-center font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Frontend */}
              <div className="bg-gradient-to-tl from-gray-700 to bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Frontend</h3>
                <ul className="text-green-600">
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <FaReact className="text-xl" /> React.js
                  </li>
                  <li className="font-mono font-extrabold text-2xl bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <SiNextdotjs className="text-xl" /> Next.js
                  </li>
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 font-bold font-mono flex items-center gap-2">
                    <SiTypescript className="text-xl" /> TypeScript
                  </li>
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <SiTailwindcss className="text-xl" /> Tailwind CSS
                  </li>
                </ul>
              </div>
              {/* Backend */}
              <div className="bg-gradient-to-tl from-slate-700 to bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Backend</h3>
                <ul className="text-blue-400">
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <FaNodeJs className="text-xl" /> Node.js
                  </li>
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <FaPython className="text-xl" /> Python
                  </li>
                  <li className="font-mono font-extrabold text-2xl bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <SiExpress className="text-xl" /> Express.js
                  </li>
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <SiMongodb className="text-xl" /> MongoDB
                  </li>
                </ul>
              </div>
              {/* Tools */}
              <div className="bg-gradient-to-tl from-slate-700 to bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Tools</h3>
                <ul className="text-indigo-500">
                  <li className="font-mono font-extrabold bg-gray-700 px-3 py-1 rounded-full m-2 text-xl flex items-center gap-2">
                    <FaGit className="text-xl" /> Git
                  </li>
                  <li className="font-serif font-bold bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                     vscode
                  </li>
                  <li className="font-mono font-extrabold text-xl bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                     Cursor ai
                  </li>
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <FaDocker className="text-xl" /> Docker
                  </li>
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <FaAws className="text-xl" /> AWS
                  </li>
                </ul>
              </div>
              {/* Learning */}
              <div className="bg-gradient-to-tl from-slate-700 to bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Learning</h3>
                <ul className="text-gray-400">
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <AiFillApi className="text-xl" /> REST APIs <span className="text-green-500">(Learned)</span>
                  </li>
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <SiGraphql className="text-xl" /> GraphQL
                  </li>
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <BiGitBranch className="text-xl" /> CI/CD
                  </li>
                  <li className="bg-gray-700 px-3 py-1 rounded-full m-2 flex items-center gap-2">
                    <FaGit className="text-xl" /> Agile/Scrum
                  </li>
                </ul>
              </div>
            </div>
          </div>

      {/* Testimonials Section - New */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What others say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sahil Dutt",
                role: "Developer, Wordpress",
                image: "/sahil.jpg",
                text: "bhut vadia Outstanding work END BABE Delivered the project on time and exceeded our expectations."
              },
              {
                name: "Harnoor Singh",
                role: "Java, Developer",
                image: "/manna.jpg",
                text: "sirra att A true professional who understands both design and functionality."
              },
              {
                name: "AMAR",
                role: "BUGGU, MY LOVE",
                image: "/me.jpg",
                text: "mera putt Excellent communication and problem-solving skills. mai eno highly recommended krdi a!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section - New */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            <Link 
              href="/blog"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              View All Posts →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Web Development Trends",
                date: "Oct 15, 2024",
                image: "/trends.png",
                excerpt: "Exploring the latest trends in web development and what's coming next."
              },
              {
                title: "Optimizing React Applications",
                date: "Dec 10, 2024",
                image: "/react.png",
                excerpt: "Best practices for building fast and efficient React applications."
              },
              {
                title: "The Future of Web Design",
                date: "Nov 5, 2024",
                image: "/future.png",
                excerpt: "Predictions and insights about the future of web design."
              }
            ].map((post, index) => (
              <Link 
                href={`/blog/${index}`} 
                key={index}
                className="group"
              >
                <div className="rounded-xl overflow-hidden bg-gray-800/30 hover:bg-gray-700/30 transition">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover  opacity-40 group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-blue-400 text-sm mb-2">{post.date}</p>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Have a project in mind? Let's discuss how we can bring your vision to life.
              I'm always excited to take on new challenges and create exceptional digital experiences.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 
                         text-white font-semibold hover:opacity-90 transition"
            >
              Get in Touch
            </Link>
          </div>

          <footer>
            <h1 className='text-center mt-10 text-white'> Made with ❤️ by Akash Mahla</h1>
            <p className='text-center text-white'> &copy; {new Date().getFullYear()} Akash. All rights reserved.</p>
         
          </footer>
        </div>
      </section>
    </main>
  );
}