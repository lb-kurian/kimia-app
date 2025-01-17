'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter()
  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    try {
      await signUp(email, password);
      setMessage('A confirmation link has been sent to your registered email.');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - 40% */}
      <div className="w-2/5 bg-primary flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Join KIMIA</h1>
      </div>
      {/* Right side - 60% */}
      <div className="w-3/5 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          {message && <p className="text-green-500 text-center mb-4">{message}</p>}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded bg-gray-50 text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-gray-700">Password</label>
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
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/auth/signin" className="text-primary hover:underline">
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

