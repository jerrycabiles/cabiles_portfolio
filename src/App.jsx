
import { useState } from 'react'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Calculator App',
      description:
        'A simple calculator for performing basic mathematical operations.',
      details:
        'This calculator allows users to perform calculations using an easy-to-use interface.',
      link: 'http://calculator-dcit-27.vercel.app/',
      icon: '🧮',
    },
    {
      title: 'To-Do List App',
      description:
        'A task management application for organizing daily activities.',
      details:
        'This application helps users organize tasks and manage their daily activities.',
      link: 'https://lab2-todo-list-seven.vercel.app/',
      icon: '📝',
    },
  ]

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'MySQL',
  ]

  const navItems = [
    'Home',
    'About',
    'Projects',
    'Resume',
    'Skills',
    'Contact',
  ]

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <h1 className="text-2xl font-bold text-green-600">
            MyPortfolio
          </h1>

          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium transition hover:text-green-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HOME */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6 pt-28"
      >
        <div className="max-w-3xl text-center">
          <p className="mb-4 font-semibold text-green-600">
            WELCOME TO MY PORTFOLIO
          </p>

          <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Hi, I'm {' '}
            <span className="text-green-600">JERRY CABILES</span>
          </h2>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            I am an Information Technology student passionate about
            web development, programming, and learning new technologies.
            Welcome to my personal portfolio!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              View Projects
            </a>

            <a
              href="#resume"
              className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-600 hover:bg-green-600 hover:text-white"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-4xl font-bold">
            About Me
          </h2>

          <p className="mb-12 text-center text-gray-500">
            Get to know me and my interests.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-4 text-4xl">👨‍💻</div>

              <h3 className="mb-4 text-2xl font-bold">
                Personal Background
              </h3>

              <p className="leading-7 text-gray-600">
                I am an Information Technology student who is still
                learning about programming, web development, and computer
                technology. I enjoy learning new things and improving 
                my skills through school activities and projects. 
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-4 text-4xl">🎯</div>

              <h3 className="mb-4 text-2xl font-bold">
                My Goals
              </h3>

              <p className="leading-7 text-gray-600">
                My goal is to finish my studies, improve my programming
                skills, and become a successful IT professional in the future.
                I want to gain more knowledge and experience to build a better 
                future for myself and my family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-gray-200 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-4xl font-bold">
            My Projects
          </h2>

          <p className="mb-12 text-center text-gray-600">
            Here are some of my web development projects.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-green-100 text-7xl">
                  {project.icon}
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-gray-600">
                    {project.description}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === index ? null : index
                      )
                    }
                    className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
                  >
                    {selectedProject === index
                      ? 'Hide Details'
                      : 'View Details'}
                  </button>

                  {selectedProject === index && (
                    <div className="mt-4 rounded-lg bg-gray-100 p-4">
                      <p className="mb-4 text-sm leading-6 text-gray-700">
                        {project.details}
                      </p>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
                      >
                        Open Project ↗
                      </a>

                      <p className="mt-3 break-all text-sm">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline hover:text-green-800"
                        >
                          {project.link}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-4xl font-bold">
            My Resume
          </h2>

          <p className="mb-12 text-center text-gray-500">
            My education, experience, and qualifications.
          </p>

          <div className="grid gap-8 md:grid-cols-2">

            {/* EDUCATION */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-green-600">
                🎓 Education
              </h3>

              <div className="space-y-6 border-l-2 border-green-600 pl-5">
                <div>
                  <h4 className="font-bold">College</h4>

                  <p className="mt-1 text-gray-600">
                    Bachelor of Science in Information Technology
                  </p>

                  <p className="text-sm text-gray-500">
                    Cavite State University - Tanza Campus
                  </p>

                  <p className="text-sm text-gray-500">
                    2023 - Present
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">Senior High School</h4>

                  <p className="mt-1 text-gray-600">
                    Senior High School
                  </p>

                  <p className="text-sm text-gray-500">
                    Tanza National Trade School
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">Junior High School</h4>

                  <p className="mt-1 text-gray-600">
                    Junior High School
                  </p>

                  <p className="text-sm text-gray-500">
                    Tanza National Comprehensive High School
                  </p>
                </div>
              </div>
            </div>

            {/* EXPERIENCE AND SKILLS */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-green-600">
                💼 Experience
              </h3>

              <div className="mb-8">
                <h4 className="font-bold">Academic Projects</h4>

                <p className="mt-2 leading-7 text-gray-600">
                  Developed academic projects involving website design,
                  calculator applications, task management,
                  JavaScript, and responsive user interfaces.
                </p>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-green-600">
                🛠️ Technical Skills
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✓ HTML and CSS</li>
                <li>✓ JavaScript</li>
                <li>✓ Python</li>
                <li>✓ MySQL</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/resume.pdf"
              download="My-Resume.pdf"
              className="inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              📄 Download Resume
            </a>

            <p className="mt-3 text-sm text-gray-500">
              Place your resume PDF inside the public folder and
              name it resume.pdf.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-200 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-4xl font-bold">
            My Skills
          </h2>

          <p className="mb-10 text-center text-gray-600">
            Technologies I am learning and using.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-green-100 px-6 py-3 font-semibold text-green-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Contact Me
          </h2>

          <p className="mb-10 text-center text-gray-600">
            Feel free to send me a message.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for your message!')
              e.target.reset()
            }}
            className="space-y-5 rounded-2xl bg-white p-8 shadow-md"
          >
            <div>
              <label className="mb-2 block font-semibold">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 px-6 py-8 text-center text-white">
        <p>© 2026 My Portfolio. All Rights Reserved.</p>

        <p className="mt-2 text-sm text-gray-400">
          Built with React and Tailwind CSS.
        </p>
      </footer>

    </div>
  )
}

export default App