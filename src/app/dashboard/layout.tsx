// import { Header } from './components/Header'
// import { Sidebar } from './components/Sidebar'

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header />
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   ) 
// }
'use client'
import { DashboardSidebar } from "../_components/dashboard/DashboardSidebar"
import  {DashboardHeader}  from "../_components/dashboard/DashboardHeader"

import type React from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}

