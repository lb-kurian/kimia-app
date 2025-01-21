import * as React from "react";
import { BrandHeader } from "./BrandHeader";
import { BrandTabs } from "./BrandTabs";
import { BrandForm } from "./BrandForm";
import { NavigationButtons } from "./NavigationButtons";

interface BrandDefinitionProps {
  onNext?: () => void;
  onBack?: () => void;
  onSkip?: () => void;
}

export function BrandDefinition({
  onNext,
  onBack,
  onSkip,
}: BrandDefinitionProps) {
  return (
    <div className="overflow-hidden pr-4 bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <BrandHeader
              title="Brand Info Definition"
              subtitle="Brand Overview"
            />
            <div className="flex flex-col pt-7 max-w-full w-[1127px]">
              <div className="flex z-10 flex-col mr-2.5 ml-7 max-md:max-w-full">
                <BrandTabs
                  activeTab="brand"
                  tabs={[
                    { id: "brand", label: "Brand Overview" },
                    { id: "visual", label: "Visual Design" },
                    { id: "voice", label: "Brand Voice" },
                    { id: "audience", label: "Target Audience" },
                  ]}
                />
                <BrandForm />
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
