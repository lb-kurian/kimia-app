'use client'

import { useAuth } from '@/hooks/useAuth'

export function Header() {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">My App</h1>
        <div>
          <span className="mr-4">{user?.email}</span>
          <button
            onClick={handleSignOut}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  )
}

