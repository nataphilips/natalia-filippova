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
        I've been studying and working with JavaScript since 2018. As a fullstack engineer
        with strong frontend expertise, I specialise in building React and React Native
        applications. Currently working remotely as Senior Software Engineer at OFX.
      </p>
      <div className="hero__ctas">
        <a href="#experience" className="btn btn--primary">View Experience</a>
        <a href="#contact" className="btn btn--outline">Contact Me</a>
      </div>
    </div>
  </section>
)

export default Hero
