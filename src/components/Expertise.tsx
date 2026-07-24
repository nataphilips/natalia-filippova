const expertiseItems = [
  {
    icon: '🖥️',
    title: 'Frontend & Mobile',
    desc: 'Building responsive web applications and cross-platform mobile apps using React Native and Capacitor — including bundling web codebases into full-fledged iOS and Android apps. Strong component architecture, clean UI, and a consistent focus on user experience across web and native.',
    tags: ['React', 'TypeScript', 'React Native', 'Capacitor', 'Next.js', 'styled-components', 'Xcode'],
  },
  {
    icon: '🏗️',
    title: 'Startup to Enterprise',
    desc: 'Experience across the full spectrum — greenfield builds in early-stage startups where I owned features end-to-end, and brownfield development in a regulated fintech environment with complex existing systems.',
    tags: ['Greenfield', 'Brownfield', 'Fintech', 'Agile', 'Remote'],
  },
  {
    icon: '⚙️',
    title: 'Fullstack & Cloud',
    desc: 'End-to-end development from backend APIs and cloud infrastructure to polished frontend interfaces. Comfortable across the stack with a focus on reliability and maintainability.',
    tags: ['Node.js', 'JavaScript', 'AWS', 'REST APIs'],
  },
]

const Expertise = () => (
  <section className="section section--alt" id="expertise">
    <div className="container">
      <p className="section-label">What I Do</p>
      <h2 className="section-title">Expertise</h2>
      <div className="expertise__grid">
        {expertiseItems.map((item) => (
          <div className="expertise-card" key={item.title}>
            <div className="expertise-card__icon">{item.icon}</div>
            <h3 className="expertise-card__title">{item.title}</h3>
            <p className="expertise-card__desc">{item.desc}</p>
            <div className="expertise-card__tags">
              {item.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Expertise
