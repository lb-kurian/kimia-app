// 'use client'

// import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import { useAuth } from '@/hooks/useAuth'

// export default function Dashboard() {
//   const { user, loading } = useAuth()
//   const router = useRouter()

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/')
//     }
//   }, [user, loading, router])

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (!user) {
//     return null // This will be handled by the useEffect above
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p>Welcome, {user.email}!</p>
//       {/* Add more dashboard content here */}
//     </div>
//   )
// }

import { ConnectedAccounts } from "../_components/dashboard/ConnectedAccounts"
import { PostStatistics } from "../_components/dashboard/PostStatistics"
import { UpcomingPosts } from "../_components/dashboard/UpcomingPosts"
import { FeatureCards } from "../_components/dashboard/FeatureCards"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <ConnectedAccounts />
      <div className="grid gap-8 lg:grid-cols-2">
        <PostStatistics />
        <UpcomingPosts />
      </div>
      <FeatureCards />
    </div>
  )
}


