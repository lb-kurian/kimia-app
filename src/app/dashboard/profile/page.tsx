'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { getUserProfile, updateUserProfile } from '@/lib/db'

export default function Profile() {
  const { user } = useAuth()
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true)
        if (user) {
          const data = await getUserProfile(user.id)
          if (data) setName(data.name || '')
        }
      } catch (error) {
        console.error('Error loading user profile:', error)
      } finally {
        setLoading(false)
      }
    }

    if (user) loadProfile()
  }, [user])

  async function handleUpdateProfile(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return

    try {
      setLoading(true)
      await updateUserProfile(user.id, name)
      setMessage('Profile updated successfully')
    } catch (error) {
      console.error('Error updating profile:', error)
      setMessage('Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  if (!user) return <div>Please sign in</div>

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            type="text"
            value={user.email}
            disabled
            className="w-full px-3 py-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-200"
        >
          {loading ? 'Saving...' : 'Update Profile'}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-500">{message}</p>}
    </div>
  )
}
