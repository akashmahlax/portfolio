'use client';

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
                src="/your-image.jpg" 
                alt="Profile" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Frontend */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Frontend</h3>
                <ul className="text-gray-400">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              {/* Backend */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Backend</h3>
                <ul className="text-gray-400">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              {/* Tools */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Tools</h3>
                <ul className="text-gray-400">
                  <li>Git</li>
                  <li>VS Code</li>
                  <li>Docker</li>
                  <li>AWS</li>
                </ul>
              </div>
              {/* Other */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Other</h3>
                <ul className="text-gray-400">
                  <li>REST APIs</li>
                  <li>GraphQL</li>
                  <li>CI/CD</li>
                  <li>Agile/Scrum</li>
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
                    <p className="text-blue-400">Company Name</p>
                  </div>
                  <span className="text-gray-400">2021 - Present</span>
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
                    <p className="text-blue-400">Previous Company</p>
                  </div>
                  <span className="text-gray-400">2019 - 2021</span>
                </div>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>Developed responsive web applications using React and Node.js</li>
                  <li>Collaborated with design team to implement UI/UX improvements</li>
                  <li>Optimized application performance and reduced load times</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-blue-400">University Name</p>
                </div>
                <span className="text-gray-400">2015 - 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}