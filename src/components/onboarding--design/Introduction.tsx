"use client"

import * as React from "react"

interface OnboardingContentProps {
  isVisible: boolean
  content: {
    title: string
    description: string[]
    cta: string
  }
  onGetStarted: () => void
}

export function Introduction({ onNext }: { onNext: () => void }) {
  const content = {
    title: "Let's shape your Brand Model together",
    description: [
      "You're in KIMIA Onboarding, and I'm here to help you unlock the full potential of your business by creating a Brand Model for you. The more details you share with me now, the better I'll be able to optimize my suggestions for you.",
      "Don't worry, you don't need to fill everything out right away—you can always come back and tweak it later.",
      "I can even automatically fill out some information based on Knowledge Base, which you upload next! 🎯",
      "Finally, in the System Setting section, we will connect all the dots. From linking your social accounts to setting up your workspace, this is where everything falls into place.",
    ],
    cta: "Get started",
  }

  const OnboardingContent: React.FC<OnboardingContentProps> = ({ isVisible, content, onGetStarted }) => {
    if (!isVisible) return null

    return (
      <>
        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto tracking-normal max-md:mt-10 max-md:max-w-full">
                <div className="self-start ml-8 text-2xl font-bold text-neutral-800 max-md:max-w-full">
                  {content.title}
                </div>
                <div className="mt-20 text-xl text-neutral-400 max-md:mt-10 max-md:max-w-full">
                  {content.description.map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      <br />
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/80890a40a1dcf792571161af5b180e01a7fc942ed4f571501aedb56e536b904d?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
                alt="Onboarding illustration"
                className="object-contain grow w-full aspect-[0.98] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={onGetStarted}
            className="rounded-full border border-[#038baf] bg-[#038baf] px-8 py-2.5 text-white hover:bg-[#038baf]/90 whitespace-nowrap"
          >
            {content.cta}
          </button>
        </div>
      </>
    )
  }

  const onGetStarted = () => {
    onNext()
  }

  return (
    <div className="w-full bg-white px-8 py-12">
      <div className="mx-auto max-w-[1200px]">
        <OnboardingContent isVisible={true} content={content} onGetStarted={onNext} />
      </div>
    </div>
  )
}

