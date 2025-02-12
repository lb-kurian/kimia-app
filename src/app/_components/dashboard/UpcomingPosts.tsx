"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

interface Post {
  id: string
  platform: string
  date: string
  time: string
  title: string
  type: string
}

const upcomingPosts: Post[] = [
  {
    id: "1",
    platform: "facebook",
    date: "16.09.2024",
    time: "09:00",
    title: "Boost your energy with bio Coffee.",
    type: "Product II Info",
  },
  {
    id: "2",
    platform: "facebook",
    date: "16.09.2024",
    time: "09:00",
    title: "Boost your energy with bio Coffee.",
    type: "Product II Info",
  },
]

export function UpcomingPosts() {
  return (
    <div className="rounded-lg border border-[#e8e8e8] p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-[#313d4f]">Upcoming Posts</h2>
          <span className="rounded-full bg-[#4880ff] px-2 py-0.5 text-sm text-white">{upcomingPosts.length}</span>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-[#e8e8e8] px-3 py-1.5 text-sm">
          Weekly
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-4">
        {upcomingPosts.map((post) => (
          <div key={post.id} className="flex items-center justify-between rounded-lg border border-[#e8e8e8] p-4">
            <div className="flex items-center gap-4">
              <Image src={`/${post.platform}-icon.png`} alt={post.platform} width={24} height={24} />
              <div>
                <div className="text-sm text-[#979797]">
                  {post.date} {post.time}
                </div>
                <div className="font-medium text-[#313d4f]">{post.title}</div>
              </div>
            </div>
            <span className="rounded-full bg-[#ebf7ff] px-3 py-1 text-sm text-[#4880ff]">{post.type}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

