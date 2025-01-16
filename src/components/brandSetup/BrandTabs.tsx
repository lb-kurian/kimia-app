import * as React from "react";

interface TabProps {
  text: string;
  active?: boolean;
}

function Tab({ text, active }: TabProps) {
  return (
    <div
      className={`flex overflow-hidden grow shrink gap-2.5 justify-center items-center p-4 bg-white min-h-[48px] ${
        active
          ? "text-orange-500 border-b-2 border-orange-500"
          : "text-black text-opacity-60"
      }`}
    >
      <div className="gap-2 self-stretch my-auto capitalize">{text}</div>
    </div>
  );
}

export function BrandTabs() {
  return (
    <div className="flex overflow-hidden flex-wrap items-start max-w-full w-[541px] border-b border-gray-200">
      <Tab text="brand Overview" active={true} />
      <Tab text="Visual design" />
      <Tab text="Brand voice" />
      <Tab text="Target audience" />
    </div>
  );
}
