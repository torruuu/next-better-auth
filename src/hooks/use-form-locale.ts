import { useLocale } from 'next-intl'
import { useEffect } from 'react'
import type { FieldValues, Path, UseFormReturn } from 'react-hook-form'

export function useFormLocale<T extends FieldValues>(form: UseFormReturn<T>) {
  const locale = useLocale()

  useEffect(() => {
    const fieldsWithErrors = Object.keys(form.formState.errors) as Path<T>[]
    if (fieldsWithErrors.length > 0) {
      form.trigger(fieldsWithErrors)
    }
  }, [locale, form])
}
