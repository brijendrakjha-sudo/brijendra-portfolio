function Projects() {
  const projects = [
    {
      title: "Emotion Detector",
      description:
        "A machine learning project that detects emotions using facial expressions.",
      technologies: "Python • TensorFlow • Keras"
    },

    {
      title: "Restaurant Ordering System",
      description:
        "A desktop restaurant ordering application with a graphical user interface.",
      technologies: "Java • Swing"
    },

    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built using React.",
      technologies: "React • JavaScript • CSS"
    }
  ];

  return (
    <section className="section projects-section" id="projects">

      <p className="section-title">MY WORK</p>

      <h2>Featured Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.technologies}</span>

            <button className="project-btn">
              View Project →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;