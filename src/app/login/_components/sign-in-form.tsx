'use client'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { useApiMsg } from '@/hooks/use-api-msg'
import { useFormLocale } from '@/hooks/use-form-locale'
import { authClient } from '@/lib/auth/auth-client'
import { FormValidator } from '@/validators/form-validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export function SignInForm() {
  const t = useTranslations()
  const router = useRouter()
  const { getTranslatedError } = useApiMsg()

  const formSchema = useMemo(
    () =>
      z.object({
        email: FormValidator.email(t),
        password: FormValidator.string(t).min(8),
      }),
    [t],
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { error } = await authClient.signIn.email({ ...values })
    if (error) {
      return toast.error(getTranslatedError(error.code))
    }
    router.refresh()
  }

  useFormLocale(form)

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>{t('Form.label.email')}</FieldLabel>
                <Input
                  type="email"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>{t('Form.label.password')}</FieldLabel>
                <PasswordInput
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>
      </FieldSet>

      <Field className="mt-6">
        <Button type="submit">{t('Common.action.submit')}</Button>
      </Field>
    </form>
  )
}
