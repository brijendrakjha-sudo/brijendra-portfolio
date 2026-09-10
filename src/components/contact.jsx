function Contact() {
  return (
    <section className="section contact" id="contact">

      <p className="section-title">CONTACT</p>

      <h2>Let's Work Together</h2>

      <p>
        Have a project idea or want to connect?
        Feel free to reach out to me.
      </p>

      <div className="contact-container">

        <a
          href="mailto:brijendrakjha@gmail.com"
          className="contact-card"
        >
          <h3>Email</h3>
          <p>brijendrakjha@gmail.com</p>
        </a>

        <a
          href="https://github.com/brijendrakjha-sudo"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>GitHub</h3>
          <p>github.com/brijendrakjha-sudo</p>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/brijendrakjha</p>
        </a>

      </div>

    </section>
  );
}

export default Contact;