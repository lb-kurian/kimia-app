'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<{ type: string; message: string } | null>(null);
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
      if (error.message.includes('rate limited')) {
        setError({ type: 'rate', message: 'Too many attempts. Please try again later.' });
      } else if (error.message.includes('already registered')) {
        setError({ type: 'exists', message: 'This email is already registered.' });
      } else {
        setError({ type: 'unknown', message: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error.message}</p>}
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
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
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
  )
}

