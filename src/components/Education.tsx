const educationItems = [
  {
    icon: '🎓',
    school: 'Founders and Coders',
    degree: 'Specialist, Computer Software Engineering',
    detail: 'Full Stack Bootcamp – JavaScript and Node.js',
    year: '2019',
  },
  {
    icon: '🎓',
    school: 'National Research University of Electronic Technology (MIET)',
    degree: 'Specialist, Marketing / Marketing Management, General',
    detail: '',
    year: '2006 – 2011',
  },
]

const Education = () => (
  <section className="section section--alt" id="education">
    <div className="container">
      <p className="section-label">Learning</p>
      <h2 className="section-title">Education</h2>
      <div className="education__list">
        {educationItems.map((item) => (
          <div className="edu-card" key={item.school}>
            <div className="edu-card__icon">{item.icon}</div>
            <div>
              <div className="edu-card__school">{item.school}</div>
              <div className="edu-card__degree">{item.degree}</div>
              {item.detail && (
                <div className="edu-card__degree">{item.detail}</div>
              )}
              <div className="edu-card__year">{item.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Education
