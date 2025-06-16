function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              Hi, I'm <span className="text-blue-600">Sreya</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl">
              A passionate developer creating amazing web experiences
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

     
      <section className="py-16">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">My Skills</h2>
          <div className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-8">
          <div className="bg-white p-5 rounded-lg shadow-md text-center w-full sm:w-[45%] md:w-[22%]">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-sm sm:text-base text-gray-600">HTML, CSS, JavaScript</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md text-center w-full sm:w-[45%] md:w-[22%]">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-sm sm:text-base text-gray-600">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md text-center w-full sm:w-[45%] md:w-[22%]">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Backend</h3>
              <p className="text-sm sm:text-base text-gray-600">Python, Django</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md text-center w-full sm:w-[45%] md:w-[22%]">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Database</h3>
              <p className="text-sm sm:text-base text-gray-600">PostgreSQL, SQLite</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;