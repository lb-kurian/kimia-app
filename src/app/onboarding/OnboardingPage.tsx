"use client"

import { useState, useCallback } from "react"
import { Layout } from "../../components/onboarding/Layout"
import { Introduction } from "../../components/onboarding/Introduction"
import { Tabs } from "../../components/onboarding/Tabs"
import { BrandInformation } from "../../components/onboarding/brand-information/BrandInformation"
import { BrandVoice } from "../../components/onboarding/brand-voice/BrandVoice"
import { TargetAudience } from "../../components/onboarding/target-audience/TargetAudience"
import { SystemSettings } from "../../components/onboarding/system-settings/SystemSettings"
import { Workspace } from "../../components/onboarding/system-settings/Workspace"
import { PageHeader } from "../../components/onboarding/common/PageHeader"
import { SuccessScreen } from "../../components/onboarding/SuccessScreen"

const sectionOrder = [
  "Introduction",
  "Knowledge Base",
  "Brand Information",
  "Brand Voice",
  "Target Audience",
  "Social Accounts",
  "Workspace",
] as const

const sectionTabs = {
  "Knowledge Base": ["Documents", "Landing Pages", "Social Media Pages"],
  "Brand Information": ["Brand Overview", "Visual Design"],
  "Target Audience": ["Demographic", "Psycographic", "Behavioral", "Segments"],
} as const

type Section = (typeof sectionOrder)[number]
type TabSection = keyof typeof sectionTabs
type TabState = {
  [K in TabSection]: (typeof sectionTabs)[K][number]
}

export default function OnboardingPage() {
  const [currentSection, setCurrentSection] = useState<Section>("Introduction")
  const [currentTabs, setCurrentTabs] = useState<TabState>({
    "Knowledge Base": "Documents",
    "Brand Information": "Brand Overview",
    "Target Audience": "Demographic",
  })
  const [onboardingComplete, setOnboardingComplete] = useState(false)

  const handleNext = useCallback(() => {
    if (currentSection === "Introduction") {
      setCurrentSection(sectionOrder[1])
      return
    }

    const currentSectionIndex = sectionOrder.indexOf(currentSection)
    const currentSectionTabs = sectionTabs[currentSection as TabSection]

    if (currentSectionTabs) {
      const currentTabIndex = currentSectionTabs.indexOf(currentTabs[currentSection as TabSection])
      if (currentTabIndex < currentSectionTabs.length - 1) {
        setCurrentTabs((prev) => ({
          ...prev,
          [currentSection]: currentSectionTabs[currentTabIndex + 1],
        }))
        return
      }
    }

    if (currentSectionIndex < sectionOrder.length - 1) {
      setCurrentSection(sectionOrder[currentSectionIndex + 1])
    }
  }, [currentSection, currentTabs])

  const handleBack = useCallback(() => {
    const currentSectionIndex = sectionOrder.indexOf(currentSection)
    const currentSectionTabs = sectionTabs[currentSection as TabSection]

    if (currentSectionTabs) {
      const currentTabIndex = currentSectionTabs.indexOf(currentTabs[currentSection as TabSection])
      if (currentTabIndex > 0) {
        setCurrentTabs((prev) => ({
          ...prev,
          [currentSection]: currentSectionTabs[currentTabIndex - 1],
        }))
        return
      }
    }

    if (currentSectionIndex > 0) {
      const previousSection = sectionOrder[currentSectionIndex - 1]
      setCurrentSection(previousSection)
      if (sectionTabs[previousSection as TabSection]) {
        const prevSectionTabs = sectionTabs[previousSection as TabSection]
        setCurrentTabs((prev) => ({
          ...prev,
          [previousSection]: prevSectionTabs[prevSectionTabs.length - 1],
        }))
      }
    }
  }, [currentSection, currentTabs])

  const handleSkip = useCallback(() => {
    const currentSectionIndex = sectionOrder.indexOf(currentSection)
    if (currentSectionIndex < sectionOrder.length - 1) {
      setCurrentSection(sectionOrder[currentSectionIndex + 1])
    }
  }, [currentSection])

  const handleTabChange = useCallback((section: TabSection, tab: string) => {
    setCurrentTabs((prev) => ({
      ...prev,
      [section]: tab,
    }))
  }, [])

  const handleFinishOnboarding = useCallback(() => {
    setOnboardingComplete(true)
  }, [])

  const handleRedirectToDashboard = useCallback(() => {
    window.location.href = "/dashboard"
  }, [])

  const renderContent = () => {
    switch (currentSection) {
      case "Introduction":
        return <Introduction onNext={handleNext} />
      case "Knowledge Base":
        return (
          <>
            <PageHeader title="Brand Model" subtitle="Knowledge Base" />
            <div className="px-6 pb-6">
              <Tabs
                tabs={sectionTabs["Knowledge Base"]}
                activeTab={currentTabs["Knowledge Base"]}
                onNext={handleNext}
                onBack={handleBack}
                onSkip={handleSkip}
                onTabChange={(tab) => handleTabChange("Knowledge Base", tab)}
              />
            </div>
          </>
        )
      case "Brand Information":
        return (
          <>
            <PageHeader title="Brand Model" subtitle="Brand Information" />
            <div className="px-6 pb-6">
              <BrandInformation
                tabs={sectionTabs["Brand Information"]}
                activeTab={currentTabs["Brand Information"]}
                onNext={handleNext}
                onBack={handleBack}
                onSkip={handleSkip}
                onTabChange={(tab) => handleTabChange("Brand Information", tab)}
              />
            </div>
          </>
        )
      case "Brand Voice":
        return (
          <>
            <PageHeader title="Brand Model" subtitle="Brand Voice" />
            <div className="px-6 pb-6">
              <BrandVoice onNext={handleNext} onBack={handleBack} onSkip={handleSkip} />
            </div>
          </>
        )
      case "Target Audience":
        return (
          <>
            <PageHeader title="Brand Model" subtitle="Target Audience" />
            <div className="px-6 pb-6">
              <TargetAudience
                tabs={sectionTabs["Target Audience"]}
                activeTab={currentTabs["Target Audience"]}
                onNext={handleNext}
                onBack={handleBack}
                onSkip={handleSkip}
                onTabChange={(tab) => handleTabChange("Target Audience", tab)}
              />
            </div>
          </>
        )
      case "Social Accounts":
        return <SystemSettings onNext={handleNext} onBack={handleBack} onSkip={handleSkip} />
      case "Workspace":
        return <Workspace onFinish={handleFinishOnboarding} onBack={handleBack} />
      default:
        return null
    }
  }

  if (onboardingComplete) {
    return <SuccessScreen onComplete={handleRedirectToDashboard} />
  }

  return (
    <Layout currentSection={currentSection} onNavigate={setCurrentSection}>
      <div className="w-full">{renderContent()}</div>
    </Layout>
  )
}

