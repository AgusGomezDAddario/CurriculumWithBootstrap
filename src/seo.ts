import type { Locale, ProfileContent } from './types'

const baseUrl = 'https://curriculum-with-bootstrap.vercel.app'

function setMeta(selector: string, attribute: string, value: string) {
  const element = document.querySelector<HTMLMetaElement>(selector)
  element?.setAttribute(attribute, value)
}

export function updateSeo(locale: Locale, profile: ProfileContent) {
  const url = locale === 'es' ? `${baseUrl}/` : `${baseUrl}/en/`

  document.documentElement.lang = locale
  document.title = profile.meta.title
  setMeta('meta[name="description"]', 'content', profile.meta.description)
  setMeta('meta[property="og:locale"]', 'content', profile.meta.locale)
  setMeta('meta[property="og:title"]', 'content', profile.meta.title)
  setMeta('meta[property="og:description"]', 'content', profile.meta.description)
  setMeta('meta[property="og:url"]', 'content', url)

  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', url)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: "Agustín Gomez D'Addario",
    url,
    image: `${baseUrl}/images/agustin-portrait.webp`,
    jobTitle:
      locale === 'es'
        ? 'Analista Funcional Técnico y Citizen Developer'
        : 'Business Systems Analyst and Citizen Developer',
    homeLocation: {
      '@type': 'Place',
      name: 'La Plata, Buenos Aires, Argentina',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad Tecnológica Nacional',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Optaris',
    },
    sameAs: [
      'https://www.linkedin.com/in/agustingomezdaddario/',
      'https://github.com/AgusGomezDAddario',
    ],
  }

  let script = document.querySelector<HTMLScriptElement>('#person-schema')
  if (!script) {
    script = document.createElement('script')
    script.id = 'person-schema'
    script.type = 'application/ld+json'
    document.head.append(script)
  }
  script.textContent = JSON.stringify(schema)
}
