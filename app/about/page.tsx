'use client';
import { HiCode, HiDesktopComputer, HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython, FaGit, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb,  SiGraphql } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { BiGitBranch } from 'react-icons/bi';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-6 py-20">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-xl text-gray-300 mb-6">
                Hi, I'm Akash. A passionate Full Stack Web Developer based in India. 
                I specialize in building exceptional websites, applications, and everything in between.
              </p>
              <p className="text-gray-400 mb-6">
                With 5 years of experience in web development, I enjoy tackling complex problems 
                and turning ideas into reality through elegant interfaces. I'm always eager to learn 
                new technologies and improve my skills.
              </p>
            </div>
            <div className="md:col-span-1">
              <img 
                src="/manna.jpg" 
                alt="Profile" 
                className="rounded-lg shadow-xl   w-full h-52 object-cover "
              />
            </div>




            <div className="mt-16 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
            <div className="flex gap-6 mb-8">
              <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a> <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a> <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a> <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
            </div>













            
              
            {/* Download CV Button */}
            <a 
              href="/path-to-your-cv.pdf" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
              download
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>

        

           {/* Skills Section */}
       <div className="mt-16  text-white gap-6">
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

          {/* Experience Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Senior Web Developer</h3>
                    <p className="text-blue-400">Freelancing</p>
                  </div>
                  <span className="text-gray-400">2025 - Present</span>
                </div>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>Led development of multiple full-stack web applications</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Implemented CI/CD pipelines and improved deployment processes</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Web Developer</h3>
                    <p className="text-blue-400">Sukh Chandigarh</p>
                  </div>
                  <span className="text-gray-400">2018 - 2023</span>
                </div>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>Developed responsive web applications using React and Node.js</li>
                  <li>Collaborated with design team to implement UI/UX improvements</li>
                  <li>Optimized application performance and reduced load times</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Featured Projects Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold mb-2">Ecommerce Web With Next.js </h3>
                <p className="text-gray-400 mb-4">Ecommerce Website with Next.js and Tailwind CSS AND I HAVE MADE THIS PROJECT WITH THE HELP OF AI and i have also integrated gpay</p>
                <h1>clone this and run it on your local machine with command npm run dev</h1>
                <div className="flex gap-4">
                  <a href="https://github.com/akashmahlax/ecom-with-gpay" className="text-blue-400 hover:text-blue-300">View Live</a>
                  <a href="https://github.com/akashmahlax/ecom-with-gpay" className="text-blue-400 hover:text-blue-300">GitHub</a>
                </div>
              </div>
              {/* Add more project cards as needed */}
            </div>
          </div>
         

          {/* Education Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-blue-400">Baring Union College Batala</p>
                </div>
                <span className="text-gray-400">2018 - 2021</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Master of Science in Information Technology</h3>
                  <p className="text-blue-400">Sikh National College Qadian</p>
                </div>
                <span className="text-gray-400">2021 - 2023</span>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-blue-400">akashdalla406@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-gray-400">Qadian, Punjab, India</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Availability</h3>
                    <p className="text-gray-400">Open to opportunities</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Instagram</h3>
                    <p className="text-gray-400">akashmahlax</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="mt-16 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Akash. All rights reserved.</p>
          </footer>
         
        </div>
      </div>
    </div>
  );
}