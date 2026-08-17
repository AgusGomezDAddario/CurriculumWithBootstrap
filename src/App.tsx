import { useEffect, useMemo, useState } from 'react'
import { content, sharedLinks } from './content'
import { updateSeo } from './seo'
import type { Locale } from './types'

const cvPaths: Record<Locale, string> = {
  es: '/cv/agustin-gomez-daddario-cv-es.pdf',
  en: '/cv/agustin-gomez-daddario-cv-en.pdf',
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'es'
  if (window.location.pathname.startsWith('/en')) return 'en'
  if (window.location.pathname === '/') return 'es'
  return window.localStorage.getItem('portfolio-locale') === 'en' ? 'en' : 'es'
}

function ArrowIcon({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      {external ? (
        <path d="M7 17 17 7M8 7h9v9" />
      ) : (
        <path d="M5 12h14m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function SectionHeading({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}

export function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const profile = useMemo(() => content[locale], [locale])

  useEffect(() => {
    updateSeo(locale, profile)
    window.localStorage.setItem('portfolio-locale', locale)

    const desiredPath = locale === 'es' ? '/' : '/en/'
    if (window.location.pathname !== desiredPath) {
      window.history.replaceState({}, '', `${desiredPath}${window.location.hash}`)
    }
  }, [locale, profile])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [locale])

  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return
    const readingLine = (document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 76) + 48
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'))
    const hashSection = window.location.hash
      ? document.getElementById(window.location.hash.slice(1))
      : null
    const hashRect = hashSection?.getBoundingClientRect()
    const visibleHashSection =
      hashSection && hashRect && hashRect.bottom > readingLine && hashRect.top < window.innerHeight
        ? hashSection
        : null
    const visualSection = document
      .elementFromPoint?.(window.innerWidth / 2, Math.min(window.innerHeight / 2, readingLine + 240))
      ?.closest<HTMLElement>('main > section[id]')
    const activeSection =
      visibleHashSection ??
      visualSection ??
      sections.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= readingLine && rect.bottom > readingLine
      }) ?? sections.find((section) => section.getBoundingClientRect().top >= readingLine)

    const position = {
      sectionId: activeSection?.id ?? null,
      offset: activeSection ? window.scrollY - activeSection.offsetTop : 0,
      absolute: window.scrollY,
    }
    setLocale(nextLocale)

    window.setTimeout(() => {
      const section = position.sectionId ? document.getElementById(position.sectionId) : null
      if (section) {
        const path = window.location.pathname
        window.history.replaceState({}, '', path)
        window.location.hash = section.id
      } else {
        window.scrollTo(0, position.absolute)
      }
    }, 80)
  }

  return (
    <>
      <a className="skip-link" href="#contenido">
        {profile.skipLink}
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label={locale === 'es' ? 'Navegación principal' : 'Main navigation'}>
          <a className="brand" href="#inicio" aria-label="Agustín Gomez D'Addario">
            <span className="brand-mark">AG</span>
            <span className="brand-name">Gomez D'Addario</span>
          </a>

          <div className="nav-links">
            {profile.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <div className="language-switch" aria-label={locale === 'es' ? 'Seleccionar idioma' : 'Choose language'}>
              <button
                className={locale === 'es' ? 'active' : ''}
                type="button"
                lang="es"
                aria-pressed={locale === 'es'}
                aria-label={profile.labels.switchToSpanish}
                onClick={() => changeLocale('es')}
              >
                ES
              </button>
              <span aria-hidden="true">/</span>
              <button
                className={locale === 'en' ? 'active' : ''}
                type="button"
                lang="en"
                aria-pressed={locale === 'en'}
                aria-label={profile.labels.switchToEnglish}
                onClick={() => changeLocale('en')}
              >
                EN
              </button>
            </div>
            <a className="nav-cv" href={cvPaths[locale]} download>
              {profile.navCta}
            </a>
          </div>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid page-shell">
            <div className="hero-copy reveal is-visible">
              <div className="availability">
                <span aria-hidden="true" />
                {profile.availability}
              </div>
              <p className="eyebrow">{profile.hero.eyebrow}</p>
              <h1 id="hero-title">{profile.hero.title}</h1>
              <p className="hero-lead">{profile.hero.lead}</p>
              <p className="hero-location">{profile.hero.location}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#casos">
                  {profile.hero.primaryCta}
                  <ArrowIcon />
                </a>
                <a className="text-link" href="#experiencia">
                  {profile.hero.secondaryCta}
                </a>
              </div>
            </div>

            <figure className="portrait reveal is-visible">
              <div className="portrait-frame">
                <picture>
                  <source srcSet="/images/agustin-portrait.avif" type="image/avif" />
                  <img
                    src="/images/agustin-portrait.webp"
                    alt={profile.hero.photoAlt}
                    width="800"
                    height="1000"
                    fetchPriority="high"
                  />
                </picture>
                <span className="portrait-grid" aria-hidden="true" />
              </div>
              <figcaption>
                <span>Agustín Gomez D'Addario</span>
                <span>{profile.hero.photoNote}</span>
              </figcaption>
            </figure>
          </div>

          <div className="proof-grid page-shell" aria-label={locale === 'es' ? 'Resultados destacados' : 'Selected outcomes'}>
            {profile.proofs.map((proof) => (
              <article className="proof-card reveal" key={proof.label}>
                <strong>{proof.value}</strong>
                <div>
                  <h2>{proof.label}</h2>
                  <p>{proof.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-space" id="perfil" aria-labelledby="about-title">
          <div className="about-grid page-shell">
            <div className="about-heading reveal">
              <p className="eyebrow">{profile.about.eyebrow}</p>
              <h2 id="about-title">{profile.about.title}</h2>
            </div>
            <div className="about-copy reveal">
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote>{profile.about.statement}</blockquote>
            </div>
          </div>
        </section>

        <section className="cases section-space" id="casos" aria-labelledby="cases-title">
          <div className="page-shell">
            <SectionHeading
              id="cases-title"
              eyebrow={profile.cases.eyebrow}
              title={profile.cases.title}
              intro={profile.cases.intro}
            />

            <div className="case-list">
              {profile.cases.items.map((item) => (
                <article className={`case-card case-card-${item.index} reveal`} key={item.index}>
                  <div className="case-cover" aria-hidden="true">
                    {item.index === '03' ? (
                      <img src="/images/memorium-cover.webp" alt="" width="1200" height="675" loading="lazy" />
                    ) : (
                      <div className="abstract-ui">
                        <span />
                        <span />
                        <span />
                      </div>
                    )}
                    <span className="case-number">{item.index}</span>
                  </div>
                  <div className="case-content">
                    <p className="case-category">{item.category}</p>
                    <h3>{item.title}</h3>
                    <p className="case-summary">{item.summary}</p>
                    <ul className="tag-list" aria-label="Technologies">
                      {item.stack.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <details>
                      <summary>{profile.cases.expandLabel}</summary>
                      <div className="case-details">
                        <div>
                          <h4>{profile.cases.challengeLabel}</h4>
                          <p>{item.challenge}</p>
                        </div>
                        <div>
                          <h4>{profile.cases.contributionLabel}</h4>
                          <p>{item.contribution}</p>
                        </div>
                        <div>
                          <h4>{profile.cases.resultLabel}</h4>
                          <p>{item.result}</p>
                        </div>
                      </div>
                    </details>
                    {item.link && (
                      <a className="case-link" href={item.link.href} target="_blank" rel="noreferrer">
                        {item.link.label}
                        <ArrowIcon external />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section-space" id="experiencia" aria-labelledby="experience-title">
          <div className="page-shell">
            <SectionHeading
              id="experience-title"
              eyebrow={profile.experience.eyebrow}
              title={profile.experience.title}
              intro={profile.experience.intro}
            />

            <div className="timeline">
              {profile.experience.items.map((item, index) => (
                <article className="timeline-item reveal" key={`${item.company}-${item.role}`}>
                  <div className="timeline-meta">
                    <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
                    <p>{item.period}</p>
                  </div>
                  <div className="timeline-role">
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                    <span>{item.location}</span>
                  </div>
                  <div className="timeline-detail">
                    <p>{item.summary}</p>
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <ul className="tag-list" aria-label="Skills">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="capabilities section-space" id="capacidades" aria-labelledby="capabilities-title">
          <div className="page-shell">
            <SectionHeading
              id="capabilities-title"
              eyebrow={profile.capabilities.eyebrow}
              title={profile.capabilities.title}
              intro={profile.capabilities.intro}
            />
            <div className="capability-grid">
              {profile.capabilities.groups.map((group) => (
                <article className="capability-card reveal" key={group.number}>
                  <span>{group.number}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="supporting-skills reveal">
              <p>{profile.capabilities.supportingLabel}</p>
              <ul>
                {profile.capabilities.supporting.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="credentials section-space" id="formacion" aria-labelledby="credentials-title">
          <div className="page-shell">
            <SectionHeading
              id="credentials-title"
              eyebrow={profile.credentials.eyebrow}
              title={profile.credentials.title}
            />
            <div className="credentials-grid">
              <div className="education-list">
                {profile.credentials.items.map((item) => (
                  <article className="credential-card reveal" key={item.title}>
                    <p>{item.period}</p>
                    <div>
                      <h3>{item.title}</h3>
                      <strong>{item.institution}</strong>
                      <span>{item.description}</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="publication-list reveal">
                <h3>{profile.credentials.publicationsTitle}</h3>
                {profile.credentials.publications.map((publication) => (
                  <a key={publication.title} href={publication.href} target="_blank" rel="noreferrer">
                    <span>{publication.type}</span>
                    <strong>{publication.title}</strong>
                    <p>{publication.description}</p>
                    <ArrowIcon external />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-space" id="contacto" aria-labelledby="contact-title">
          <div className="contact-panel page-shell reveal">
            <div>
              <p className="eyebrow">{profile.contact.eyebrow}</p>
              <h2 id="contact-title">{profile.contact.title}</h2>
              <p>{profile.contact.text}</p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={sharedLinks.email}>
                {profile.contact.emailLabel}
                <ArrowIcon />
              </a>
              <a className="button button-outline" href={sharedLinks.linkedin} target="_blank" rel="noreferrer">
                {profile.contact.linkedInLabel}
                <ArrowIcon external />
              </a>
              <p>{profile.contact.responseNote}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell">
          <div>
            <strong>Agustín Gomez D'Addario</strong>
            <p>{profile.footer.note}</p>
          </div>
          <div className="footer-links">
            <a href={sharedLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={sharedLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#inicio">{profile.footer.backToTop} ↑</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}
