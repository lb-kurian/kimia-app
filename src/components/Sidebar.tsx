"use client";

import React from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarUserMenu from "./SidebarUserMenu";

export default function Sidebar() {
  return (
    <div className="w-[19%] max-md:ml-0 max-md:w-full">
      <div className="flex grow max-md:mt-2.5">
        <div className="overflow-hidden px-3 pt-24 border border-gray-200 border-solid pb-[1003px] max-md:hidden max-md:pb-24">
          <div className="flex gap-2.5 justify-center items-center min-h-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee269ab11fa301d01f2aae19da4004573c6493344b1ae7a56fab4c06d94d2ab?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
              className="object-contain self-stretch my-auto w-6 aspect-square"
            />
          </div>
        </div>
        <div className="relative px-4 pt-4 border-r border-zinc-900 border-opacity-10 pb-[598px] max-md:pb-24">
          <div className="flex z-0 flex-col items-start pb-3 w-full text-4xl h-[38px] text-blue-950">
            <div className="gap-2.5 self-stretch max-w-full min-h-[43px] w-[107px]">
              <span
                style={{
                  fontFamily:
                    "Gugi, -apple-system, Roboto, Helvetica, sans-serif",
                  letterSpacing: "0.17px",
                  color: "rgba(3,139,175,1)",
                }}
              >
                K{" "}
              </span>
              <span
                style={{
                  fontFamily:
                    "Gugi, -apple-system, Roboto, Helvetica, sans-serif",
                  letterSpacing: "0.17px",
                  color: "rgba(3,139,175,1)",
                }}
              >
                M
              </span>
              <span
                style={{
                  fontFamily:
                    "Gugi, -apple-system, Roboto, Helvetica, sans-serif",
                  color: "rgba(3,139,175,1)",
                }}
              >
                IA
              </span>
            </div>
          </div>
          <SidebarUserMenu />
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
}
