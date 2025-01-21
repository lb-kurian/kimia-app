import * as React from "react";

interface BrandHeaderProps {
  title: string;
  subtitle: string;
}

export function BrandHeader({ title, subtitle }: BrandHeaderProps) {
  return (
    <div className="flex flex-col items-center w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center max-w-full tracking-normal w-[1100px]">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="text-2xl font-bold text-neutral-800 max-md:max-w-full">
            {title}
          </div>
          <div className="text-xl text-neutral-400 max-md:max-w-full">
            {subtitle}
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9951313f7b0454858e63f21bc172b86476512bcd0e88384ef474659b6fc8a737?apiKey=14a7292a75f846b897d9b0e6987ce9ff&"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.73] w-[173px]"
          alt="Brand header illustration"
        />
      </div>
    </div>
  );
}
