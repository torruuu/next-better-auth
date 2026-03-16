import { UserData } from '@/components/home/user-data'
import { querySession } from '@/lib/auth/query-session'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { redirect } from 'next/navigation'

export default async function Home() {
  const { session, queryClient } = await querySession()
  if (!session) return redirect('/login')

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex items-center justify-center">
        <UserData />
      </div>
    </HydrationBoundary>
  )
}
