import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";

function Home() {
  const roles = [
    "Software Developer",
    "DSA Enthusiast",
    "Web Developer",
    "Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);


  return (
    <section className="hero" id="home">

      {/* ================= LEFT ================= */}

      <div className="hero-content">

        <div className="availability">
          <span></span>
          Open to learning & opportunities
        </div>

        <p className="hero-intro">
          HELLO, I'M
        </p>

        <h1>
          Brijendra
          <span>Jha.</span>
        </h1>

        <h2>
          <span className="hero-static">
            I'm a{" "}
          </span>

          <span className="typing">
            {displayText}
            <span className="typing-cursor">|</span>
          </span>
        </h2>

        <p className="hero-description">
          I build practical digital experiences, solve programming
          problems and continuously explore technologies that can
          turn ideas into real-world solutions.
        </p>


        {/* BUTTONS */}

        <div className="hero-buttons">

          <a
            href="#projects"
            className="hero-btn primary"
          >
            View My Work
            <span>→</span>
          </a>

          <a
            href="/resume.pdf"
            className="hero-btn secondary"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
            <span>↓</span>
          </a>

        </div>


        {/* SOCIAL LINKS */}

        <div className="hero-socials">

          <span>Find me on</span>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:yourmail@gmail.com">
            Email
          </a>

        </div>


        {/* MINI STATS */}

        <div className="hero-stats">

          <div className="hero-stat">
            <strong>DSA</strong>
            <span>Problem Solving</span>
          </div>

          <div className="hero-stat">
            <strong>React</strong>
            <span>Web Development</span>
          </div>

          <div className="hero-stat">
            <strong>C++</strong>
            <span>Programming</span>
          </div>

        </div>

      </div>


      {/* ================= RIGHT ================= */}

      <div className="hero-visual">

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        {/* Floating labels */}

        <div className="floating-tech tech-one">
          &lt;/&gt; React
        </div>

        <div className="floating-tech tech-two">
          C++ • DSA
        </div>

        <div className="floating-tech tech-three">
          JavaScript
        </div>


        {/* Profile */}

        <div className="profile-wrapper">

          <div className="profile-glow"></div>

          <div className="profile-ring">

            <img
              src={profile}
              alt="Brijendra Jha"
              className="profile-image"
            />

          </div>

        </div>


        <div className="profile-label">
          <span>●</span>
          B.Tech IT Student
        </div>

      </div>

    </section>
  );
}

export default Home;