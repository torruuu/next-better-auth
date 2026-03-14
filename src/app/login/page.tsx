'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'

export default function LoginPage() {
  const t = useTranslations('Login')
  return (
    <Tabs className="my-6 w-full items-center px-4" defaultValue="signin">
      <TabsList>
        <TabsTrigger value="signin">{t('sign_in.title')}</TabsTrigger>
        <TabsTrigger value="signup">{t('sign_up.title')}</TabsTrigger>
      </TabsList>
      <TabsContent className="w-full max-w-md" value="signin">
        <Card>
          <CardHeader>
            <CardTitle>{t('sign_in.title')}</CardTitle>
            <CardDescription>{t('sign_in.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div>SignIn</div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent className="w-full max-w-md" value="signup">
        <Card>
          <CardHeader>
            <CardTitle>{t('sign_up.title')}</CardTitle>
            <CardDescription>{t('sign_up.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div>SignUp</div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
