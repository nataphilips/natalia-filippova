const Contact = () => (
  <section className="section contact" id="contact">
    <div className="container">
      <div className="contact__inner">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact</h2>
        <p className="contact__text">
          I'm currently open to new opportunities. Whether you have a question or
          just want to say hi, feel free to reach out!
        </p>
        <div className="contact__links">
          <a href="mailto:fnd.natalia@gmail.com" className="contact-link">
            <span>✉️</span>
            <span>fnd.natalia@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/natalia-filippova-08048110b/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
