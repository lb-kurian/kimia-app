import * as React from "react";
import { NavItem } from "./NavItem";
import { BrandInfoTab } from "./BrandInfoTab";
import { IconButton } from "./IconButton";

const navItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaaf67cb1fda7e40ef4b2f279b731a84403980275a641a084bf0e57a4daa60d3?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff",
    label: "Settings",
    alt: "Settings icon",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c192fa87d9d77dfea482d69d1913da3fc0abb55a6a724c2151c9f0cff9e0d1fe?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff",
    label: "Billing",
    alt: "Billing icon",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08d41797511c2e853f87250a8c53e0420803cff467bb540e1842cb4c013bb1c1?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff",
    label: "Notification",
    alt: "Notification icon",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/258bffb6fc5ce2c46a29250f6555aed77f1547a30126c6fd8a6156f00aa2f81a?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff",
    label: "Help",
    alt: "Help icon",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddeab1bd0de8641ca79b559d07a87538dd7bce175aa6856fab62720aa36779ed?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff",
    label: "Logout Account",
    alt: "Logout icon",
  },
];

const tabs = [
  { label: "brand Overview", isActive: true },
  { label: "Visual design" },
  { label: "Brand voice" },
  { label: "Target audience" },
];

export const BrandInfo: React.FC = () => {
  return (
    <div className="overflow-hidden pr-4 bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <div className="flex grow max-md:mt-3.5">
            <div className="flex overflow-hidden flex-col px-3 pt-24 border border-gray-200 border-solid pb-[782px] max-md:hidden max-md:pb-24">
              <div className="flex gap-2.5 justify-center items-center min-h-[24px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee269ab11fa301d01f2aae19da4004573c6493344b1ae7a56fab4c06d94d2ab?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
                  alt="Menu icon"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
            <div className="flex relative flex-col px-4 pt-4 border-r border-zinc-900 border-opacity-10 pb-[662px] max-md:pb-24">
              <div className="flex z-0 flex-col items-start pb-3 w-full text-4xl h-[38px] text-blue-950">
                <div className="flex relative gap-2.5 items-start px-7 py-2.5 max-w-full min-h-[43px] w-[107px] max-md:px-5">
                  <div className="absolute right-0 bottom-0 z-0 self-start h-[43px] w-[107px]">
                    <span className="tracking-normal text-cyan-600">K</span>{" "}
                    <span className="tracking-normal text-cyan-600">M</span>
                    <span className="text-cyan-600">IA</span>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2de10a18e7603a4e34c89f51c28d01815c3527909a287a03553b0f9de5be61cf?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
                    alt="Logo"
                    className="object-contain z-0 shrink-0 my-auto rounded-none aspect-[0.6] w-[15px]"
                  />
                </div>
              </div>
              <div className="flex absolute left-9 z-0 flex-col pt-9 max-w-full h-36 text-sm font-medium tracking-wide bottom-[139px] text-neutral-800 w-[135px]">
                <div className="flex z-10 flex-col mb-0 max-md:mb-2.5">
                  <div className="flex flex-col w-full">
                    {navItems.map((item, index) => (
                      <div key={index} className="mt-2 first:mt-0">
                        <NavItem {...item} />
                      </div>
                    ))}
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2fe6d4337234660bb83ee36e217fc4845094db5643166e1f89de6a2099a3957?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
                    alt="User avatar"
                    className="object-contain mt-4 w-10 aspect-square rounded-[100px]"
                  />
                </div>
              </div>
              {/* Rest of the component remains the same */}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-center w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-10 items-center max-w-full tracking-normal w-[1100px]">
                <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <h1 className="text-2xl font-bold text-neutral-800 max-md:max-w-full">
                    Brand Info Definition
                  </h1>
                  <div className="text-xl text-neutral-400 max-md:max-w-full">
                    Brand Overview
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9951313f7b0454858e63f21bc172b86476512bcd0e88384ef474659b6fc8a737?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
                  alt="Brand illustration"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.73] w-[173px]"
                />
              </div>
              <div className="flex flex-col pt-7 max-w-full w-[1127px]">
                <div className="flex z-10 flex-col mr-2.5 ml-7 max-md:max-w-full">
                  <div className="flex flex-col w-full text-sm font-medium tracking-normal uppercase max-w-[1072px] text-black text-opacity-60 max-md:max-w-full">
                    <div className="flex overflow-hidden flex-wrap items-start max-w-full w-[541px]">
                      {tabs.map((tab, index) => (
                        <BrandInfoTab key={index} {...tab} />
                      ))}
                    </div>
                  </div>
                  {/* Form section */}
                  <form className="flex flex-col mt-9 max-w-full w-[1041px]">
                    <div className="flex flex-wrap gap-7 items-center w-full max-md:max-w-full">
                      <div className="flex flex-col grow shrink self-stretch my-auto text-base tracking-wide text-black min-w-[240px] w-[431px] max-md:max-w-full">
                        <label
                          htmlFor="brandName"
                          className="font-semibold max-md:max-w-full"
                        >
                          Brand Name*
                        </label>
                        <input
                          id="brandName"
                          type="text"
                          value="Organico Caffee"
                          className="overflow-hidden px-5 pt-4 pb-7 mt-2 w-full font-light rounded-lg border border-solid border-zinc-300 max-md:max-w-full"
                        />
                      </div>
                      {/* Rest of the form fields */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
