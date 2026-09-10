import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section className="welcome" id="home">

      <div className="welcome-content">

        <p className="welcome-small">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm
          <span>Brijendra Jha</span>
        </h1>

        <h2>
          Information Technology Student & Developer
        </h2>

        <p className="welcome-text">
          I love building websites, solving programming problems,
          learning new technologies and turning ideas into real-world
          projects.
        </p>

        <div className="welcome-buttons">

          <a href="#projects" className="btn primary-btn">
            Explore My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Let's Connect
          </a>

        </div>

      </div>

      <div className="welcome-profile">

        <div className="profile-ring">

          <img
            src={profile}
            alt="Brijendra Jha"
            className="profile-image"
          />

        </div>

        <div className="profile-badge">
          <span>●</span>
          B.Tech IT Student
        </div>

      </div>

    </section>
  );
}

export default Home;