import React from 'react'
import Image from 'next/image'

interface NavbarProps {
  currentPageIndex: number
  pages: Array<{ id: string; title: string }>
}

const Navbar: React.FC<NavbarProps> = ({ currentPageIndex, pages }) => (
  <div className="flex flex-wrap gap-5 mt-8 w-full text-xl font-bold tracking-normal max-w-[1194px] text-neutral-400 max-md:max-w-full">
    <div className="flex flex-auto gap-8 items-center">
      {pages.map((page, index) => (
        <div key={page.id} className="flex items-center gap-4">
          <Image
            src={`/images/onboarding/${page.id}-icon.png`}
            alt={`${page.title} Icon`}
            width={36}
            height={36}
            className={`object-contain ${index === currentPageIndex ? 'brightness-0 filter sepia-[100%] saturate-[2000%] hue-rotate-[80deg]' : ''}`}
          />
          <div className="self-stretch my-auto text-neutral-400 whitespace-nowrap">
            {page.title}
          </div>
          {index < pages.length - 1 && (
            <div className="shrink-0 self-stretch my-auto h-[1px] border border-[#22c55e] border-solid w-[120px]" />
          )}
        </div>
      ))}
    </div>
  </div>
)

export default Navbar

