function Skills() {
  const skills = [
    "C",
    "C++",
    "Java",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "SQL",
    "DSA"
  ];

  return (
    <section className="section skills-section" id="skills">

      <p className="section-title">MY SKILLS</p>

      <h2>Technologies I Work With</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;