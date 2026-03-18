import { useTranslations } from 'next-intl'

export function useApiMsg() {
  const t = useTranslations('Api')

  const getTranslatedError = (code: string | undefined): string => {
    if (!code) return t('error.internal_server_error')

    const key = `error.${code.toLowerCase()}` as Parameters<typeof t>[0]
    if (t.has(key)) return t(key)

    return t('error.internal_server_error')
  }

  return { getTranslatedError }
}
