import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth/auth-client'
import { getTranslations } from 'next-intl/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const { data: session } = await authClient.getSession()
  if (!session) return redirect('/login')

  const t = await getTranslations()

  return (
    <div className="flex items-center justify-center">
      <span>{t('Home.welcome', { name: session.user.name })}</span>
      <Button variant="outline">{t('Common.action.sign_out')}</Button>
    </div>
  )
}
