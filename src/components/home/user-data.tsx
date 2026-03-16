'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { authClient } from '@/lib/auth/auth-client'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function UserDataContent() {
  const t = useTranslations()
  const { session } = useSession()
  const router = useRouter()

  const handleSignOut = async () => {
    await authClient.signOut()
    router.refresh()
  }

  if (!session) return null

  return (
    <div>
      <span>{t('Home.welcome', { name: session.user.name })}</span>
      <Button variant="outline" onClick={handleSignOut}>
        {t('Common.action.sign_out')}
      </Button>
    </div>
  )
}

export function UserData() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setIsVisible(!isVisible)}>Ver / ocultar datos</Button>
      {isVisible && <UserDataContent />}
    </>
  )
}
