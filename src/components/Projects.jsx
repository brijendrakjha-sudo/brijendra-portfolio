
const projects = [
  {
    title: "Emotion Detector",
    description:
      "A real-time facial emotion recognition system using computer vision and a trained deep learning model.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras"],
    github: "https://github.com/brijendrakjha-sudo/emotion-detector",
    demo: "",
    category: "Machine Learning",
  },
  {
    title: "Restaurant Ordering System",
    description:
      "A desktop application for restaurant ordering with a graphical user interface built using Java Swing.",
    technologies: ["Java", "Swing", "OOP"],
    github: "",
    demo: "",
    category: "Desktop Application",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my technical skills, projects, and journey as an IT student and developer.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    github: "https://github.com/brijendrakjha-sudo/brijendra-portfolio",
    demo: "https://brijendra-portfolio.vercel.app",
    category: "Web Development",
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <p className="section-title">MY WORK</p>
      <h2>Featured Projects</h2>

      <p className="projects-intro">
        A selection of projects I've built while exploring software
        development, machine learning, and practical problem-solving.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.title}</h3>
            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-actions">
              {project.github && (
                <a
                  className="project-btn"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              )}

              {project.demo && (
                <a
                  className="project-btn project-btn-secondary"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  Live Demo <span aria-hidden="true">↗</span>
                </a>
              )}

              {!project.github && !project.demo && (
                <span className="project-coming-soon">
                  Repository link coming soon
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
