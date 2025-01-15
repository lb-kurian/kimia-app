import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // If the user is not authenticated and trying to access protected routes, redirect to signin
    if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
      const redirectUrl = new URL('/auth/signin', req.url)
      redirectUrl.searchParams.set('message', 'Please sign in to access this page.')
      return NextResponse.redirect(redirectUrl)
    }

    // If the user is authenticated and trying to access auth pages, redirect to dashboard
    if (session && req.nextUrl.pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    // In case of an error, allow the request to continue to be handled by the application
    return res
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
}

