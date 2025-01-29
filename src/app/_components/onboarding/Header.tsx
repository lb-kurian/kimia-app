// import React from 'react'

// const Header: React.FC = () => (
//   <div className="text-4xl text-blue-950">
//     <span className="tracking-normal text-blue-950">K M</span>IA
//   </div>
// )

// export default Header
"use client"
import type React from "react"
import Image from "next/image"
import { useLanguage } from "../../../contexts/LanguageContext"
import { headerText } from "../../../locales/onboarding/headerText"

const Header: React.FC = () => {
  const { language } = useLanguage()

  return (
    <div className="flex items-center gap-4">
      <Image src="/images/logo.svg" alt="KIMIA Logo" width={40} height={40} />
      <h1 className="text-2xl font-bold">{headerText[language]}</h1>
    </div>
  )
}

export default Header


