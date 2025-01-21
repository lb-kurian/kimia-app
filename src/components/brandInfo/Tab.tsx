import * as React from "react";
import { TabProps } from "./types";

export const Tab: React.FC<TabProps> = ({ label, isActive }) => (
  <div
    className={`flex overflow-hidden grow shrink gap-2.5 justify-center items-center p-4 bg-white min-h-[48px] ${
      isActive ? "text-orange-500" : "text-black text-opacity-60"
    }`}
    role="tab"
    aria-selected={isActive}
    tabIndex={0}
  >
    <div className="gap-2 self-stretch my-auto">{label}</div>
    {isActive && <div className="flex w-full bg-orange-500 min-h-[2px]" />}
  </div>
);
