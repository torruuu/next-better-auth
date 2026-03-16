import { NextRequest, NextResponse } from 'next/server'
import { querySession } from './lib/auth/query-session'

const publicRoutes = ['/login']

export async function proxy(request: NextRequest) {
  const { session } = await querySession()

  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname)

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (session && isPublicRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!session && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
}
