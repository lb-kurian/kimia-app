'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.slice(1))
    const accessToken = hashParams.get('access_token')
    if (accessToken) {
      supabase.auth.setSession({ access_token: accessToken, refresh_token: '' })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setError(null)
    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) throw error
      setMessage('Password has been successfully reset. Redirecting to sign in page...')
      setTimeout(() => router.push('/auth/signin'), 3000)
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - 40% */}
      <div className="w-2/5 bg-primary flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Set New Password</h1>
      </div>
      {/* Right side - 60% */}
      <div className="w-3/5 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
          {message && <p className="text-green-500 text-center mb-4">{message}</p>}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block mb-1 text-gray-700">New Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded bg-gray-50 text-black"
                required
              />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-200">
              Set New Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

