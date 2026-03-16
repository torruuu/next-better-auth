import { authClient } from '@/lib/auth/auth-client'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useSession() {
  const query = useQuery({
    queryKey: ['auth-session'],
    queryFn: async () => await authClient.getSession(),
  })

  const session = useMemo(() => query.data?.data ?? null, [query.data])

  return { session, ...query }
}
