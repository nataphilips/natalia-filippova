const Hero = () => (
  <section className="hero section" id="home">
    <div className="container">
      <p className="hero__greeting">Hi there, I'm</p>
      <h1 className="hero__name">
        Natalia <span>Filippova</span>
      </h1>
      <p className="hero__title">
        Senior Software Engineer &nbsp;·&nbsp; Fullstack &amp; React Native Developer
      </p>
      <div className="hero__location">
        <span>📍</span>
        <span>Sunshine Coast, Queensland, Australia</span>
      </div>
      <p className="hero__bio">
        Fullstack engineer with 6+ years shipping production software in fintech and consumer apps.
        Strong frontend focus with hands-on React Native mobile development. I've built products
        from the ground up in early-stage startups and scaled features in regulated enterprise
        environments. Comfortable working with AI-assisted development tools as part of day-to-day engineering.
        Currently Senior Software Engineer at OFX.
      </p>
      <div className="hero__ctas">
        <a href="#experience" className="btn btn--primary">View Experience</a>
        <a href="#contact" className="btn btn--outline">Contact Me</a>
      </div>
    </div>
  </section>
)

export default Hero
