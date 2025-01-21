import * as React from "react";
import { ColorCircle } from "./ColorCircle";
import { BrandLogoSection } from "./BrandLogoSection";
import { Tab } from "./Tab";

const tabs = [
  { label: "brand Overview", isActive: false },
  { label: "Visual design", isActive: true },
  { label: "Brand voice", isActive: false },
  { label: "Target audience", isActive: false },
];

const brandColors = [ 
  { color: "#3B82F6" },
  { color: "#F9A8D4" },
  { color: "#D1D5DB" },
];

export const BrandInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-10 items-center max-w-full tracking-normal w-[1100px]">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="text-2xl font-bold text-neutral-800 max-md:max-w-full">
            Brand Info Definition
          </div>
          <div className="text-xl text-neutral-400 max-md:max-w-full">
            Brand Overview
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9951313f7b0454858e63f21bc172b86476512bcd0e88384ef474659b6fc8a737?apiKey=14a7292a75f846b897d9b0e6987ce9ff&"
          alt="Brand Info Header"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.73] w-[173px]"
        />
      </div>
      <div className="flex relative flex-col px-4 pt-4 pb-36 w-full max-w-[1107px] min-h-[532px] max-md:pb-24 max-md:max-w-full">
        <div className="flex absolute right-0 bottom-0 z-0 items-start px-4 pb-6 text-sm font-medium tracking-normal leading-5 text-center whitespace-nowrap rounded-3xl border border-solid border-zinc-300 h-[532px] min-h-[532px] pt-[469px] w-[1107px] max-md:pt-24 max-md:max-w-full">
          <div className="flex gap-1.5 items-center">
            <button className="flex overflow-hidden flex-col justify-center self-stretch my-auto border border-solid border-zinc-900 border-opacity-10 min-h-[40px] rounded-[100px] text-zinc-900 w-[83px]">
              <div className="flex flex-1 gap-2 justify-center items-center px-6 py-2.5 size-full max-md:px-5">
                <span className="self-stretch my-auto opacity-[0.38]">
                  Back
                </span>
              </div>
            </button>
            <button className="flex overflow-hidden flex-col justify-center self-stretch my-auto text-cyan-600 border border-cyan-600 border-solid min-h-[40px] rounded-[100px] w-[83px]">
              <div className="flex-1 gap-2 self-stretch px-6 py-2.5 size-full max-md:px-5">
                Next
              </div>
            </button>
          </div>
        </div>
        <div className="flex z-0 flex-col w-full max-w-[1075px] max-md:max-w-full">
          <div
            className="flex overflow-hidden flex-wrap items-start max-w-full text-sm font-medium tracking-normal uppercase w-[541px]"
            role="tablist"
          >
            {tabs.map((tab, index) => (
              <Tab key={index} {...tab} />
            ))}
          </div>
          <div className="flex flex-col mt-9 w-full max-md:max-w-full">
            <div className="text-lg font-semibold tracking-normal text-slate-700 max-md:max-w-full">
              Describe the key visual elements that define your brand's look and
              feel.
            </div>
            <div className="flex flex-wrap gap-5 items-start mt-6 w-full max-md:max-w-full">
              <div className="flex flex-col grow shrink min-w-[240px] w-[422px] max-md:max-w-full">
                <BrandLogoSection
                  title="Add Logo for light background"
                  logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/02c361a06b29cd81af7272ba961fb8222786835e5359148fb862379dcf6a7cc1?apiKey=14a7292a75f846b897d9b0e6987ce9ff&"
                  logoAlt="Logo for light background"
                />
                <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                  <div className="text-base font-medium tracking-wide text-black max-md:max-w-full">
                    Select brand colours
                  </div>
                  <div className="flex gap-4 items-center self-start mt-4">
                    <div className="flex gap-4 items-center self-stretch my-auto">
                      {brandColors.map((circle, index) => (
                        <ColorCircle key={index} {...circle} />
                      ))}
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2466034b8ee67550fd1c4a86c5d92eecc8a2d17a7265ec8c4f5457742a8526e?apiKey=14a7292a75f846b897d9b0e6987ce9ff&"
                      alt="Add color"
                      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col grow shrink justify-center text-base tracking-wide min-w-[240px] w-[422px] max-md:max-w-full">
                <BrandLogoSection
                  title="Add Logo for Dark background"
                  logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/034b39c220f0e597ebe82a23015e45c764b919470bc9a9c17be7aa46eb06f34a?apiKey=14a7292a75f846b897d9b0e6987ce9ff&"
                  logoAlt="Logo for dark background"
                />
                <div className="flex flex-col mt-6 max-w-full whitespace-nowrap w-[487px]">
                  <label
                    htmlFor="typography"
                    className="font-medium text-black max-md:max-w-full"
                  >
                    Typography
                  </label>
                  <div className="flex flex-col mt-4 w-full text-neutral-800 max-md:max-w-full">
                    <div className="flex flex-wrap gap-1 items-center py-2 pr-3 pl-4 w-full rounded-lg border border-solid border-zinc-400 max-md:max-w-full">
                      <select
                        id="typography"
                        className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis max-md:max-w-full bg-transparent border-none outline-none"
                      >
                        <option>Calibri</option>
                      </select>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2eee98175c283c7ed79b5eb3607d890d9d7fd6a5b271cedce326dbe6e222078?apiKey=14a7292a75f846b897d9b0e6987ce9ff&"
                        alt="Select typography"
                        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
