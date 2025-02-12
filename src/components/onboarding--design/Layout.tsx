import type React from "react"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

interface LayoutProps {
  children: React.ReactNode
  currentSection: string
  onNavigate: (section: string) => void
}

export function Layout({ children, currentSection, onNavigate }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar currentSection={currentSection} onNavigate={onNavigate} />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <div className="w-full">{children}</div>
        </div>
      </main>
    </div>
  )
}

