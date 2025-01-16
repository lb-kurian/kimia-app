import * as React from "react";
import { Sidebar } from "./Sidebar";
import { BrandContent } from "./BrandContent";

export function BrandLayout() {
  return (
    <div className="overflow-hidden pr-4 bg-white border border-gray-200">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <BrandContent />
      </div>
    </div>
  );
}
