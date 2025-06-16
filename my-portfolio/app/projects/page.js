function Projects() {
  const projects = [
  {
    title: "Byway",
    description: "A simple web layout project built using HTML and CSS, focusing on responsive design and styling.",
    technologies: ["HTML", "CSS"]
  
  },
  {
    title: "ShopCo",
    description: "An e-commerce frontend project developed using plain JavaScript, HTML, and CSS. Focused on UI layout and interactive elements.",
    technologies: ["JavaScript", "HTML", "CSS"]
    
  },
  {
    title: "Euphoria (Frontend)",
    description: "A React-based e-commerce website developed during my learning phase. It includes product listings, cart functionality, and user interface elements.",
    technologies: ["React", "JavaScript", "CSS", "HTML"]
    
  },
  {
    title: "Euphoria (Full Stack)",
    description: "A full-stack e-commerce web application built using Django. Features include product categories, user authentication, cart management, and admin controls.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"]
  }
  
  
  ];

  return (
    <div className=" min-h-screen py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
           
             
              <div key={index} className="p-6 bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[45%] lg:w-[22%]">
                <h3 className="text-xl font-semibold text-gray-500 mb-2">{project.title}</h3>
                <p className=" text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </div>
  )
} 
export default Projects;