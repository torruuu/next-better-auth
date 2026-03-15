import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { authClient } from '@/lib/auth/auth-client'
import { getTranslations } from 'next-intl/server'
import { redirect } from 'next/navigation'
import { SignInForm } from './_components/sign-in-form'
import { SignUpForm } from './_components/sign-up-form'

export default async function LoginPage() {
  const { data: session } = await authClient.getSession()
  if (session) return redirect('/')

  const t = await getTranslations('Login')

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
            <SignInForm />
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
            <SignUpForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
