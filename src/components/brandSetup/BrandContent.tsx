import * as React from "react";
import { BrandHeader } from "./BrandHeader";
import { BrandTabs } from "./BrandTabs";
import { BrandForm } from "./BrandForm";

export function BrandContent() {
  return (
    <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <BrandHeader />
          <div className="flex flex-col pt-7 max-w-full w-[1127px]">
            <BrandTabs />
            <BrandForm />
          </div>
        </div>
      </div>
    </div>
  );
}
