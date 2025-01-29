import type React from "react"
import Image from "next/image"
import { useLanguage } from "../../../contexts/LanguageContext"

interface NavbarProps {
  currentPageIndex: number
  pages: Array<{ id: string; title: { en: string; es: string; de: string } }>
}

const Navbar: React.FC<NavbarProps> = ({ currentPageIndex, pages }) => {
  const { language } = useLanguage()

  return (
    <div className="flex flex-wrap gap-5 mt-8 w-full text-xl font-bold tracking-normal max-w-[1194px] text-neutral-400 max-md:max-w-full">
      <div className="flex flex-auto gap-8 items-center">
        {pages.map((page, index) => (
          <div key={page.id} className="flex items-center gap-4">
            <Image
              src={`/images/onboarding/${page.id}-icon.png`}
              alt={`${page.title[language as keyof typeof page.title]} Icon`}
              width={36}
              height={36}
              className={`object-contain ${index === currentPageIndex ? "filter invert sepia-[0.4] saturate-[2] hue-rotate-[86deg] brightness-[0.93] contrast-[0.97]" : "opacity-50"}`}
            />
            <div className="self-stretch my-auto text-neutral-400 whitespace-nowrap">
              {page.title[language as keyof typeof page.title]}
            </div>
            {index < pages.length - 1 && (
              <div className="shrink-0 self-stretch my-auto h-[1px] border border-[#22c55e] border-solid w-[120px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar

