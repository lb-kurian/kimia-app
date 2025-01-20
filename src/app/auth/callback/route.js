import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({
      cookies: () => cookies(), // Access cookies from Next.js headers
    })

    try {
      // Exchange the code for a session
      await supabase.auth.exchangeCodeForSession(code)
    } catch (error) {
      console.error('Error during session exchange:', error)
      return NextResponse.json(
        { error: 'Failed to exchange code for session' },
        { status: 500 }
      )
    }
  }

  // Redirect after successful login
  return NextResponse.redirect(requestUrl.origin + '/onboarding')
}
