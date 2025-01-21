import * as React from "react";

interface Tab {
  id: string;
  label: string;
}

interface BrandTabsProps {
  activeTab: string;
  tabs: Tab[];
}

export function BrandTabs({ activeTab, tabs }: BrandTabsProps) {
  return (
    <div className="flex flex-col w-full text-sm font-medium tracking-normal uppercase max-w-[1072px] text-black text-opacity-60 max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap items-start max-w-full w-[541px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex flex-col grow shrink justify-center text-base tracking-wide ${
              activeTab === tab.id ? "text-orange-500" : ""
            } capitalize bg-white min-h-[48px] w-[137px]`}
          >
            <div className="gap-2 self-center px-4 py-3.5 min-h-[46px]">
              {tab.label}
            </div>
            {activeTab === tab.id && (
              <div className="flex w-full bg-orange-500 min-h-[2px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
