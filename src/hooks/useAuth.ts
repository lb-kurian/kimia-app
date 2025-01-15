import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { User, Session } from '@supabase/supabase-js'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) throw error
        setSession(session)
        setUser(session?.user ?? null)
      } catch (error) {
        console.error('Error checking session:', error)
        setError('Failed to retrieve session. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    checkSession()

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const signUp = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) throw error
      return { success: true, message: 'Sign-up successful. Please check your email for verification.' }
    } catch (error) {
      console.error('Sign-up error:', error)
      return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred during sign-up.' }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      return { success: true, session: data.session }
    } catch (error) {
      console.error('Sign-in error:', error)
      return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred during sign-in.' }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push('/')
    } catch (error) {
      console.error('Sign-out error:', error)
      setError('Failed to sign out. Please try again.')
    }
  }

  const forgotPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })
      if (error) throw error
      return { success: true, message: 'Password reset instructions have been sent to your email.' }
    } catch (error) {
      console.error('Forgot password error:', error)
      return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.' }
    }
  }

  return {
    user,
    session,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    forgotPassword,
  }
}

