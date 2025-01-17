'use client';
import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import BrandInfoSection from './BrandInfoSection'
import InspirationSection from './InspirationSection'
import BrainstormingSection from './BrainstormingSection'
import SmartPublisherSection from './SmartPublisherSection'

const pages = [
  { id: 'brandInfo', title: 'Brand Info', component: BrandInfoSection, image: '/images/onboarding/brand-info-image.svg' },
  { id: 'inspiration', title: 'Inspiration', component: InspirationSection, image: '/images/onboarding/inspiration-image.svg' },
  { id: 'brainstorming', title: 'Brainstorming', component: BrainstormingSection, image: '/images/onboarding/brainstorming-image.svg' },
  { id: 'smartPublisher', title: 'Smart Publisher', component: SmartPublisherSection, image: '/images/onboarding/smart-publisher-image.svg' },
]

const MyComponent: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)

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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="px-8 pt-6">
        <Header />
        <Navbar currentPageIndex={currentPageIndex} pages={pages} />
      </div>
      <div className="flex-grow px-10 pb-10 pt-6"> {/* Update 1: Added pt-6 */}
        <div className="flex gap-8 h-full max-md:flex-col">
          <div className="w-[59%] max-md:w-full">
            <div className="h-[calc(100vh-180px)] overflow-y-auto pr-4"> {/* Update 2: Changed height calculation */}
              <CurrentPageComponent />
            </div>
          </div>
          <div className="w-[41%] max-md:w-full">
            <div className="relative h-full">
              <div className="h-[400px]">
                <img
                  src={pages[currentPageIndex].image || "/placeholder.svg"}
                  alt={`${pages[currentPageIndex].title} illustration`}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex gap-2 justify-end absolute bottom-8 right-8">
                {currentPageIndex > 0 && (
                  <button
                    onClick={handlePrevious}
                    className={`${baseButtonClasses} bg-white text-neutral-500`}
                  >
                    Back
                  </button>
                )}
                {currentPageIndex < pages.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className={`${baseButtonClasses} bg-cyan-500 text-white`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => console.log('Finish clicked')}
                    className={`${baseButtonClasses} bg-cyan-500 text-white`}
                  >
                    Finish
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

export default MyComponent

