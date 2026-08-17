import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from '../App'

describe('bilingual portfolio', () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.history.replaceState({}, '', '/')
    document.documentElement.lang = 'es'
    vi.mocked(window.scrollTo).mockClear()
  })

  it('switches languages instantly and updates the public URL', async () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Conecto negocio, procesos y tecnología.')

    fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('I connect business, processes and technology.')
    expect(window.location.pathname).toBe('/en/')
    expect(window.localStorage.getItem('portfolio-locale')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
    await waitFor(() => expect(window.scrollTo).toHaveBeenCalled())

    await waitFor(() => {
      expect(document.title).toContain('Business Systems Analyst')
    })
  })

  it('gives the explicit locale URL priority over a stored preference', () => {
    window.localStorage.setItem('portfolio-locale', 'en')
    window.history.replaceState({}, '', '/')

    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Conecto negocio, procesos y tecnología.')
    expect(window.location.pathname).toBe('/')
  })

  it('keeps stable section anchors in both languages', () => {
    const { container } = render(<App />)
    const anchors = ['inicio', 'perfil', 'casos', 'experiencia', 'capacidades', 'contacto']

    anchors.forEach((id) => {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }))
    anchors.forEach((id) => {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument()
    })
  })

  it('offers the CV matching the active language', () => {
    render(<App />)

    expect(screen.getAllByRole('link', { name: 'Descargar CV' })[0]).toHaveAttribute(
      'href',
      '/cv/agustin-gomez-daddario-cv-es.pdf',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }))
    expect(screen.getAllByRole('link', { name: 'Download résumé' })[0]).toHaveAttribute(
      'href',
      '/cv/agustin-gomez-daddario-cv-en.pdf',
    )
  })
})
