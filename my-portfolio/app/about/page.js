function About() {
  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Who I Am</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6">
                I am a passionate developer with a strong interest in building functional and visually appealing web applications. I love learning new technologies and solving complex problems.

                </p>
            </div>

            <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">My Journey</h2>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                    <p className="text-sm sm:text-base text-gray-600">
                    I am currently a student and have successfully completed several real-world projects that have helped me develop strong practical skills in both frontend and backend development.
                    I am now eager to step into the industry, apply my knowledge, and grow as a full-stack developer.
                    <br/>
                    Despite having no prior background in computer science, I decided to pursue a career in web development through a dedicated course.
                    Starting from scratch, I gradually built solid practical skills by working on various projects. Now, I am confident in my ability to develop full-stack web applications and am excited to continue growing in the tech field.
                   </p>
 
            </div>

            <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-10">Education</h2>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                    <p className="text-sm sm:text-base text-gray-600">
                    Bachelor of Arts in History   2021-2024  Kannur University 
                   </p>
                   
            </div>
  
          </div>
        </div>
      </div>
    </div>
    </div>
   
  )
} 
export default About;