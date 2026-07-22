export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Sayed Abbas Raza</span> 👋
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          B.Tech Computer Science Student | Full Stack Developer | DevOps Learner
        </p>

        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>

          <p className="text-gray-300 leading-8">
            I'm passionate about building modern web applications and learning
            cloud technologies. Currently, I'm exploring DevOps tools like
            Jenkins, Docker, PM2, Nginx, and AWS EC2 while developing scalable
            full-stack applications using the MERN stack and Next.js.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 text-left">
            <div className="bg-gray-800 p-4 rounded-xl">
              <h3 className="font-semibold text-blue-400">💻 Skills</h3>
              <p className="text-gray-300 mt-2">
                C++, JavaScript, React, Next.js, Node.js, Express, MongoDB,
                Tailwind CSS
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl">
              <h3 className="font-semibold text-blue-400">☁️ Learning</h3>
              <p className="text-gray-300 mt-2">
                AWS, Docker, Jenkins, Linux, CI/CD, Nginx & Cloud Deployment
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl">
              <h3 className="font-semibold text-blue-400">🚀 Goal</h3>
              <p className="text-gray-300 mt-2">
                Become a skilled Full Stack + DevOps Engineer and build
                production-grade applications.
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl">
              <h3 className="font-semibold text-blue-400">❤️ Interests</h3>
              <p className="text-gray-300 mt-2">
                Coding, Open Source, AI Tools, Cloud Computing, and Learning New
                Technologies. now testing automated webhook integarted ci-cd
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold">
              Welcome to My Portfolio
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
