'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { forgotPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setError(null)
    try {
      await forgotPassword(email)
      setMessage('Password reset instructions have been sent to your email.')
    } catch (error: any) {
      setError('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-200">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

