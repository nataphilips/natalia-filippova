const expertiseItems = [
  {
    icon: '🖥️',
    title: 'Frontend Development',
    desc: 'Building responsive, performant web applications with modern frameworks. Strong focus on clean UI, component architecture, and great user experience.',
    tags: ['React', 'TypeScript', 'Next.js', 'HTML5', 'CSS', 'styled-components'],
  },
  {
    icon: '⚙️',
    title: 'Fullstack Development',
    desc: 'End-to-end product development spanning backend APIs, cloud infrastructure, and polished frontend interfaces.',
    tags: ['Node.js', 'JavaScript', 'AWS', 'SQL', 'PHP'],
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    desc: 'Cross-platform iOS and Android app development using React Native, delivering native-quality experiences from a shared codebase.',
    tags: ['React Native', 'Xcode', 'iOS', 'Android'],
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
