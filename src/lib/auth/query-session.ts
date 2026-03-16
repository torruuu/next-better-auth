import { authClient } from '@/lib/auth/auth-client'
import { QueryClient } from '@tanstack/react-query'

export async function querySession() {
  const queryClient = new QueryClient()

  const query = await queryClient.ensureQueryData({
    queryKey: ['auth-session'],
    queryFn: async () => await authClient.getSession(),
  })

  const session = query.data

  return { session, ...query, queryClient }
}
