import { useState } from 'react'

interface Role {
  title: string
  period: string
  type: string
  tags: string[]
}

interface ExperienceItem {
  company: string
  initials: string
  location?: string
  description?: string
  roles: Role[]
}

const experiences: ExperienceItem[] = [
  {
    company: 'OFX',
    initials: 'OFX',
    location: 'Sunshine Coast, QLD, Australia',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Jun 2024 – Present',
        type: 'Full-time · Remote',
        tags: ['React', 'TypeScript', 'AWS', 'JavaScript'],
      },
      {
        title: 'Software Developer',
        period: 'Nov 2022 – Jun 2024',
        type: 'Full-time · Hybrid',
        tags: ['React', 'TypeScript', 'OKTA', 'Chargebee', 'AWS'],
      },
    ],
  },
  {
    company: 'Picme Technology Inc',
    initials: 'PIC',
    roles: [
      {
        title: 'React Native Developer',
        period: 'Jun 2021 – Nov 2022 · 1 yr 6 mos',
        type: 'Contract',
        tags: ['React Native', 'CSS', 'AWS', 'Xcode'],
      },
    ],
  },
  {
    company: 'Fireside',
    initials: 'FS',
    description: 'Joined when the frontend had zero code and only initial designs, with basic backend infrastructure already in place. As one of two frontend engineers, built the first React Native components and delivered a working MVP within 3 months. Post-launch, continued for 6 more months as early podcasters gave feedback on the product, the team grew, and the platform scaled. Work involved complex audio streaming, real-time performance optimisation, and animation. Fireside launched with backing from notable investors including Mark Cuban.',
    roles: [
      {
        title: 'Frontend Developer',
        period: 'Aug 2020 – Apr 2021 · 9 mos',
        type: 'Contract',
        tags: ['React Native', 'Next.js', 'CSS', 'JavaScript', 'Audio Streaming'],
      },
    ],
  },
  {
    company: 'Podvine',
    initials: 'PV',
    roles: [
      {
        title: 'Junior Software Developer',
        period: 'Apr 2020 – Jul 2020 · 4 mos',
        type: 'Internship',
        tags: ['React Native'],
      },
    ],
  },
  {
    company: 'CASA ELIA',
    initials: 'CE',
    roles: [
      {
        title: 'WordPress Developer',
        period: 'Oct 2019 – Mar 2020 · 6 mos',
        type: 'Freelance',
        tags: ['WordPress', 'CSS'],
      },
    ],
  },
]

const VISIBLE_COUNT = 3

const Experience = () => {
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? experiences : experiences.slice(0, VISIBLE_COUNT)

  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">Where I've Worked</p>
        <h2 className="section-title">Experience</h2>
        <div className="experience__list">
          {visible.map((exp) => (
            <div className="exp-card" key={exp.company}>
              <div className="exp-card__header">
                <div className="exp-card__logo">{exp.initials}</div>
                <div>
                  <div className="exp-card__company">{exp.company}</div>
                  {exp.location && (
                    <div className="exp-card__location">{exp.location}</div>
                  )}
                </div>
              </div>
              {exp.description && (
                <p className="exp-card__desc">{exp.description}</p>
              )}
              <div className="exp-card__roles">
                {exp.roles.map((role) => (
                  <div className="exp-role" key={role.title}>
                    <div className="exp-role__title">{role.title}</div>
                    <div className="exp-role__period">
                      {role.type} · {role.period}
                    </div>
                    <div className="exp-role__tags">
                      {role.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <button className="show-more-btn" onClick={() => setShowAll(true)}>
            Show earlier experience ↓
          </button>
        )}
        {showAll && (
          <button className="show-more-btn" onClick={() => setShowAll(false)}>
            Show less ↑
          </button>
        )}
      </div>
    </section>
  )
}

export default Experience
