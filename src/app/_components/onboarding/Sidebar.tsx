import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

const menuItems = [
  {
    title: "Introduction",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="20" x="2" y="2" rx="2" />
        <path d="M9 22v-4h6v4" />
      </svg>
    ),
  },
  {
    title: "Brand Model",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    subItems: ["Knowledge Base", "Brand Information", "Brand Voice", "Target Audience"],
  },
  {
    title: "System settings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    subItems: ["Social Accounts", "Workspace"],
  },
]

interface SidebarProps {
  currentSection: string
  onNavigate: (section: string) => void
}

export function Sidebar({ currentSection, onNavigate }: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  useEffect(() => {
    if (currentSection === "Introduction") {
      setExpandedMenus([])
    } else {
      const parentMenu = menuItems.find(
        (item) => item.subItems?.includes(currentSection) || item.title === currentSection,
      )
      if (parentMenu) {
        setExpandedMenus([parentMenu.title])
        if (parentMenu.subItems && !parentMenu.subItems.includes(currentSection)) {
          onNavigate(parentMenu.subItems[0])
        }
      }
    }
  }, [currentSection, onNavigate])

  const toggleMenu = (title: string) => {
    setExpandedMenus((prev) => (prev.includes(title) ? [] : [title]))
  }

  const isActive = (title: string) => currentSection === title

  return (
    <aside className="w-64 border-r border-[#E8E8E8] p-6">
      <div className="mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMIA_Prototype-cDzHAHMcMEvVZzP91zMnyD5VKEjZpd.png"
          alt="KIMIA Logo"
          width={100}
          height={40}
          className="mb-8"
        />
        <nav className="space-y-6">
          {menuItems.map((item) => (
            <div key={item.title} className="space-y-2">
              <div
                className={`flex items-center justify-between cursor-pointer ${
                  isActive(item.title) || (item.subItems && item.subItems.includes(currentSection))
                    ? "text-[#F57618]"
                    : "text-[#313D4F]"
                }`}
                onClick={() => {
                  if (item.subItems) {
                    toggleMenu(item.title)
                    if (!expandedMenus.includes(item.title)) {
                      onNavigate(item.subItems[0])
                    }
                  } else {
                    onNavigate(item.title)
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="grid h-5 w-5 place-items-center">{item.icon}</div>
                  {item.title}
                </div>
                {item.subItems && (
                  <div className="text-[#979797]">
                    {expandedMenus.includes(item.title) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </div>
                )}
              </div>
              {item.subItems && expandedMenus.includes(item.title) && (
                <div className="pl-7 space-y-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem}
                      href="#"
                      className={`block ${isActive(subItem) ? "text-[#F57618]" : "text-[#313D4F]"}`}
                      onClick={(e) => {
                        e.preventDefault()
                        onNavigate(subItem)
                      }}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

