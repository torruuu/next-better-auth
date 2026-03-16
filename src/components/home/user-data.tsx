'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

function UserDataContent() {
  const t = useTranslations()
  const { session } = useSession()

  if (!session) return null

  return (
    <div>
      <span>{t('Home.welcome', { name: session.user.name })}</span>
      <Button variant="outline">{t('Common.action.sign_out')}</Button>
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
