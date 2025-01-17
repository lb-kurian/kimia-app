import * as React from "react";

export function Logo() {
  return (
    <div className="flex z-0 flex-col items-start pb-3 w-full text-4xl h-[38px] text-blue-950">
      <div className="flex relative gap-2.5 items-start px-7 py-2.5 max-w-full min-h-[43px] w-[107px] max-md:px-5">
        <div className="absolute right-0 bottom-0 z-0 self-start h-[43px] w-[107px]">
          <span className="tracking-normal text-cyan-600">K</span>{" "}
          <span className="tracking-normal text-cyan-600">M</span>
          <span className="text-cyan-600">IA</span>
        </div>
        <img
          loading="lazy"
          // src="/pubic/logo.svg"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2de10a18e7603a4e34c89f51c28d01815c3527909a287a03553b0f9de5be61cf?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
          className="object-contain z-0 shrink-0 my-auto rounded-none aspect-[0.6] w-[15px]"
          alt="Logo icon"
        />
      </div>
    </div>
  );
}
