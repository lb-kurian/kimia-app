import * as React from "react";
import { BrandInfoTabProps } from "./types";

export const BrandInfoTab: React.FC<BrandInfoTabProps> = ({
  label,
  isActive,
}) => {
  return (
    <div
      className={`flex overflow-hidden grow shrink gap-2.5 justify-center items-center p-4 bg-white min-h-[48px] ${
        isActive ? "text-orange-500" : ""
      }`}
    >
      <div className="gap-2 self-stretch my-auto">
        {label.charAt(0)}
        <span className="capitalize">{label.slice(1)}</span>
      </div>
      {isActive && <div className="flex w-full bg-orange-500 min-h-[2px]" />}
    </div>
  );
};
