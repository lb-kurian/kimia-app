'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<{ type: string; message: string } | null>(null);
  const router = useRouter()
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const { session } = await signIn(email, password);
      if (session) {
        router.push('/dashboard');
      } else {
        setError({ type: 'auth', message: 'Authentication failed. Please try again.' });
      }
    } catch (error: any) {
      if (error.message === 'Email not confirmed') {
        setError({ type: 'email', message: 'Please confirm your email before signing in.' });
      } else if (error.message.includes('rate limited')) {
        setError({ type: 'rate', message: 'Too many attempts. Please try again later.' });
      } else {
        setError({ type: 'unknown', message: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        {error && (
          <p className={`text-center mb-4 ${error.type === 'email' ? 'text-yellow-500' : 'text-red-500'}`}>
            {error.message}
          </p>
        )}
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
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/auth/signup" className="text-primary hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

