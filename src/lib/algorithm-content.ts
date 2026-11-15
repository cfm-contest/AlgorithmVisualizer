
import type { Locale } from '@i18n/translations'
import { translations } from '@i18n/translations'

type AlgorithmDescriptions = Partial<Record<Locale, string>> & {
  en: string
}

type DescriptionModule = {
  default: AlgorithmDescriptions
}

const descriptionModules =
  import.meta.glob<DescriptionModule>(
    '../content/algorithms/*.ts'
  )

export async function loadAlgorithmDescriptions(
  algorithmId: string,
): Promise<AlgorithmDescriptions> {
  const load =
    descriptionModules[
      `../content/algorithms/${algorithmId}.ts`
    ]

  if (!load) {
    throw new Error(
      `Unknown algorithm description: ${algorithmId}`
    )
  }

  const module = await load()

  if (!module.default?.en) {
    throw new Error(
      `English description missing: ${algorithmId}`
    )
  }

  return module.default
}

export async function loadAlgorithmDescription(
  locale: Locale,
  algorithmId: string,
): Promise<string> {
  const descriptions =
    await loadAlgorithmDescriptions(algorithmId)

  return (
    descriptions[locale] ||
    descriptions.en ||
    ''
  )
}

export function getAlgorithmMetaTitle(
  locale: Locale,
  fallbackName: string,
  description: string,
): string {
  const safeDescription = description || ''

  const firstLine =
    safeDescription.split('\n')[0]?.trim() || ''

  const name = firstLine || fallbackName

  const conciseName = name.split(' (')[0].trim()

  const suffix: Record<Locale, string> = {
    en: ' — Algorithm Visualizer',
    ru: ' — Визуализатор алгоритмов',
    uz: ' — Algoritmlar vizualizatori',
  }

  const title = `${conciseName}${suffix[locale]}`

  return title.length <= 60
    ? title
    : `${conciseName.slice(0, 40)}${suffix[locale]}`
}

export function getAlgorithmMetaDescription(
  locale: Locale,
  description: string,
): string {
  if (!description) {
    return translations[locale].siteDescription
  }

  const paragraphs = description.split('\n\n')

  const content =
    paragraphs.length > 1
      ? paragraphs[1]
      : paragraphs[0]

  const cleaned = content
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const suffix: Record<Locale, string> = {
    en: ' Free interactive step-by-step visualization.',
    ru: ' Интерактивная пошаговая визуализация.',
    uz: ' Bosqichma-bosqich interaktiv vizualizatsiya.',
  }

  const withSuffix =
    cleaned.length + suffix[locale].length <= 160
      ? `${cleaned.replace(/\.$/, '')}.${suffix[locale]}`
      : cleaned

  if (withSuffix.length <= 160) {
    return withSuffix
  }

  const truncated = cleaned.slice(0, 157)
  const lastSpace = truncated.lastIndexOf(' ')

  return `${
    truncated.slice(
      0,
      lastSpace > 120 ? lastSpace : 157
    )
  }...`
}
