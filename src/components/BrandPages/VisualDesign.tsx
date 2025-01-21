import * as React from "react";
import { BrandHeader } from "./BrandHeader";
import { BrandTabs } from "./BrandTabs";
import { NavigationButtons } from "./NavigationButtons";

interface VisualDesignProps {
  onNext?: () => void;
  onBack?: () => void;
  onSkip?: () => void;
}

export function VisualDesign({ onNext, onBack, onSkip }: VisualDesignProps) {
  return (
    <div className="overflow-hidden pr-4 bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <BrandHeader
              title="Visual Design"
              subtitle="Visual Design Overview"
            />
            <div className="flex flex-col pt-7 max-w-full w-[1127px]">
              <div className="flex z-10 flex-col mr-2.5 ml-7 max-md:max-w-full">
                <BrandTabs
                  activeTab="visual"
                  tabs={[
                    { id: "brand", label: "Brand Overview" },
                    { id: "visual", label: "Visual Design" },
                    { id: "voice", label: "Brand Voice" },
                    { id: "audience", label: "Target Audience" },
                  ]}
                />
                <div className="flex flex-col mt-9 max-w-full w-[1041px]">
                  <div className="flex flex-wrap gap-7 items-center w-full max-md:max-w-full">
                    <div className="flex flex-col grow shrink self-stretch my-auto text-base tracking-wide text-black min-w-[240px] w-[431px] max-md:max-w-full">
                      <div className="font-semibold max-md:max-w-full">
                        Color Palette*
                      </div>
                      <div className="flex gap-4 mt-4">
                        <div className="w-12 h-12 rounded-full bg-[#4A90E2]" />
                        <div className="w-12 h-12 rounded-full bg-[#50E3C2]" />
                        <div className="w-12 h-12 rounded-full bg-[#B8E986]" />
                        <div className="w-12 h-12 rounded-full bg-[#9013FE]" />
                      </div>
                    </div>
                    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[387px] max-md:max-w-full">
                      <div className="text-base font-semibold tracking-wide text-black max-md:max-w-full">
                        Typography
                      </div>
                      <select
                        className="overflow-hidden px-5 py-3.5 mt-2 w-full rounded-lg border border-solid border-zinc-300"
                        defaultValue="inter"
                      >
                        <option value="inter">Inter</option>
                        <option value="roboto">Roboto</option>
                        <option value="opensans">Open Sans</option>
                      </select>
                    </div>
                  </div>
                </div>
                <NavigationButtons
                  onBack={onBack}
                  onNext={onNext}
                  onSkip={onSkip}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
