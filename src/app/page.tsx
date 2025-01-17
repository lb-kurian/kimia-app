'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'forgot'>('signin')
  const [showAuth, setShowAuth] = useState(false)
  const router = useRouter()
  const { signIn, signUp, forgotPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      if (authMode === 'signin') {
        const { error, session } = await signIn(email, password)
        if (error) throw error
        if (session) {
          router.push('/dashboard')
        } else {
          throw new Error('No session returned after sign in')
        }
      } else if (authMode === 'signup') {
        const { error } = await signUp(email, password)
        if (error) throw error
        setAuthMode('signin')
        setError('Account created. Please sign in.')
      } else if (authMode === 'forgot') {
        const { error } = await forgotPassword(email)
        if (error) throw error
        setError('If an account exists, a password reset email has been sent.')
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unexpected error occurred')
      }
    }
  }

  if (!showAuth) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900"> KIMIA </h1>
            <button 
              onClick={() => setShowAuth(true)}
              className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-200"
            >
              Get Started
            </button>
          </div>
        </header>

        <div className="flex-grow">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <section className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionize Your Social Media Presence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                KIMIA  is your all-in-one solution for creating, scheduling, and managing 
                AI-powered social media content across all platforms. Elevate your brand's online 
                presence and save time with our cutting-edge technology.
              </p>
            </section>

            <section className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">AI-Powered Content Creation</h3>
                <p className="text-gray-600">Generate unique, brand-specific content using advanced AI algorithms tailored to your audience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Multi-Platform Posting</h3>
                <p className="text-gray-600">Seamlessly post your content across all major social media platforms from a single dashboard.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
                <p className="text-gray-600">Optimize your posting times with our AI-driven scheduling system for maximum engagement.</p>
              </div>
            </section>

            <div className="text-center">
              <button 
                onClick={() => setShowAuth(true)}
                className="bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary-dark transition duration-200"
              >
                Boost Your Brand Now
              </button>
            </div>
          </main>
        </div>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 KIMIA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left column - Authentication */}
      <div className="md:w-2/5 bg-white p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {authMode === 'signin' ? 'Sign In' : authMode === 'signup' ? 'Sign Up' : 'Forgot Password'}
          </h1>
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
            {authMode !== 'forgot' && (
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
            )}
            <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-200">
              {authMode === 'signin' ? 'Sign In' : authMode === 'signup' ? 'Sign Up' : 'Reset Password'}
            </button>
          </form>
          <div className="mt-6 text-center space-y-4">
            {authMode !== 'signin' && (
              <button onClick={() => setAuthMode('signin')} className="text-primary hover:underline">
                Already have an account? Sign In
              </button>
            )}
            {authMode !== 'signup' && (
              <button onClick={() => setAuthMode('signup')} className="text-primary hover:underline block">
                Don't have an account? Sign Up
              </button>
            )}
            {authMode !== 'forgot' && (
              <button onClick={() => setAuthMode('forgot')} className="text-primary hover:underline block">
                Forgot Password?
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right column - Application description */}
      <div className="md:w-3/5 bg-gray-800 text-white p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4">KIMIA</h2>
          <p className="mb-6">
            Welcome to KIMIA, the ultimate solution for creating and managing 
            AI-powered social media content. Our platform offers a seamless experience 
            with cutting-edge features designed to elevate your brand's online presence 
            and save you valuable time and resources.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>AI-driven content creation tailored to your brand</li>
            <li>Multi-platform posting and management</li>
            <li>Smart scheduling for optimal engagement</li>
            <li>Performance analytics and insights</li>
            <li>Brand consistency across all platforms</li>
          </ul>
          <p>
            Join thousands of businesses already transforming their social media strategy. 
            Sign up now to start your journey towards unparalleled online growth and engagement!
          </p>
        </div>
      </div>
    </div>
  )
}

