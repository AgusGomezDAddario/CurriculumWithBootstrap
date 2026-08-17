import { describe, expect, it } from 'vitest'
import { content } from '../content'

function assertPopulated(value: unknown, path = 'content'): void {
  if (typeof value === 'string') {
    expect(value.trim(), `${path} should not be empty`).not.toBe('')
    return
  }
  if (Array.isArray(value)) {
    expect(value.length, `${path} should not be empty`).toBeGreaterThan(0)
    value.forEach((item, index) => assertPopulated(item, `${path}[${index}]`))
    return
  }
  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, child]) => assertPopulated(child, `${path}.${key}`))
  }
}

function assertParallelShape(spanish: unknown, english: unknown, path = 'content'): void {
  expect(Array.isArray(english), `${path} should use the same collection type`).toBe(Array.isArray(spanish))

  if (Array.isArray(spanish) && Array.isArray(english)) {
    expect(english.length, `${path} should have matching item counts`).toBe(spanish.length)
    spanish.forEach((item, index) => assertParallelShape(item, english[index], `${path}[${index}]`))
    return
  }

  if (spanish && english && typeof spanish === 'object' && typeof english === 'object') {
    const spanishKeys = Object.keys(spanish)
    const englishKeys = Object.keys(english)
    expect(englishKeys.sort(), `${path} should have matching keys`).toEqual(spanishKeys.sort())
    spanishKeys.forEach((key) => {
      assertParallelShape(
        (spanish as Record<string, unknown>)[key],
        (english as Record<string, unknown>)[key],
        `${path}.${key}`,
      )
    })
    return
  }

  expect(typeof english, `${path} should use the same value type`).toBe(typeof spanish)
}

describe('localized profile content', () => {
  it('keeps Spanish and English structurally aligned', () => {
    assertParallelShape(content.es, content.en)
  })

  it('does not expose empty localized copy', () => {
    assertPopulated(content.es, 'content.es')
    assertPopulated(content.en, 'content.en')
  })
})
