import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return (
    <div className="flex items-center justify-center">
      <span>{t('Home.welcome', { name: 'John' })}</span>
      <Button variant="outline">{t('Common.action.sign_out')}</Button>
    </div>
  )
}
