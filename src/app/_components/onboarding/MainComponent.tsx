"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Header from "./Header"
import Navbar from "./Navbar"
import BrandInfoSection from "./BrandInfoSection"
import InspirationSection from "./InspirationSection"
import BrainstormingSection from "./BrainstormingSection"
import SmartPublisherSection from "./SmartPublisherSection"
import { LanguageProvider, useLanguage } from "../../../contexts/LanguageContext"
import { buttonText } from "../../../locales/onboarding/buttonText"

const pages = [
  {
    id: "brandInfo",
    title: { en: "Brand Info", es: "Información de Marca", de: "Markeninfo" },
    component: BrandInfoSection,
    image: "/images/onboarding/brand-info-image.svg",
  },
  {
    id: "inspiration",
    title: { en: "Inspiration", es: "Inspiración", de: "Inspiration" },
    component: InspirationSection,
    image: "/images/onboarding/inspiration-image.svg",
  },
  {
    id: "brainstorming",
    title: { en: "Brainstorming", es: "Lluvia de Ideas", de: "Brainstorming" },
    component: BrainstormingSection,
    image: "/images/onboarding/brainstorming-image.svg",
  },
  {
    id: "smartPublisher",
    title: { en: "Smart Publisher", es: "Publicador Inteligente", de: "Smart Publisher" },
    component: SmartPublisherSection,
    image: "/images/onboarding/smart-publisher-image.svg",
  },
]

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as "en" | "es" | "de")}
      className="ml-4 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
    </select>
  )
}

const MainComponentContent: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1)
    }
  }

  const CurrentPageComponent = pages[currentPageIndex].component
  const baseButtonClasses = "w-[107px] py-2.5 px-4 rounded-lg border border-solid border-zinc-400"

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="px-8 pt-6">
        <div className="flex items-center justify-between">
          <Header />
          <LanguageSelector />
        </div>
        <Navbar currentPageIndex={currentPageIndex} pages={pages} />
      </div>
      <div className="flex-grow px-8 pb-8 pt-6">
        <div className="flex gap-8 h-full max-md:flex-col">
          <div className="w-[59%] max-md:w-full">
            <div className="h-[calc(100vh-244px)] overflow-y-auto pr-4">
              <CurrentPageComponent />
            </div>
          </div>
          <div className="w-[41%] max-md:w-full">
            <div className="relative h-full">
              <div className="h-[400px] relative">
                <Image
                  src={pages[currentPageIndex].image || "/placeholder.svg"}
                  alt={`${pages[currentPageIndex].title[language]} illustration`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex gap-2 justify-end absolute bottom-8 right-8">
                {currentPageIndex > 0 && (
                  <button onClick={handlePrevious} className={`${baseButtonClasses} bg-white text-neutral-500`}>
                    {buttonText[language].back}
                  </button>
                )}
                {currentPageIndex < pages.length - 1 ? (
                  <button onClick={handleNext} className={`${baseButtonClasses} bg-cyan-500 text-white`}>
                    {buttonText[language].next}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      console.log("Redirecting to dashboard...")
                      setCurrentPageIndex(0)
                    }}
                    className={`${baseButtonClasses} bg-cyan-500 text-white`}
                  >
                    {buttonText[language].finish}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MainComponent: React.FC = () => {
  return (
    <LanguageProvider>
      <MainComponentContent />
    </LanguageProvider>
  )
}

export default MainComponent

