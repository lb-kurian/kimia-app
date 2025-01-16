import * as React from "react";

export function NavigationMenu() {
  return (
    <div className="flex z-0 flex-col mt-7 w-full">
      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-col justify-center py-1 pr-3 pl-8 w-full text-sm font-bold leading-none text-orange-500 whitespace-nowrap rounded-lg max-md:pl-5">
          <div className="flex gap-2.5 items-center w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1fe2ec26eebfead1a8d0a5dda906b73fe448f1566cce2e5ac84cfba4495ebe?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
              alt="Initiation icon"
            />
            <div className="self-stretch my-auto">Initiation</div>
          </div>
        </div>
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/68a0f97eaa95bf03c3854f39d0062c87c00fb13f31723cc918dafa18933f34ef?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
          text="Brand information"
          active={true}
        />
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9a06477360d43cc8dd965af2e1194925527a8b0434bdf06a7cfed80f52e84bbc?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
          text="System settings"
          active={false}
        />
        <NavigationItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/51f04a08452e2dfdb257709d35711fc88b556c3083e20fffe7fd75f67eee22e1?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
          text="Assets"
          active={false}
        />
      </div>
    </div>
  );
}

interface NavigationItemProps {
  icon: string;
  text: string;
  active: boolean;
}

function NavigationItem({ icon, text, active }: NavigationItemProps) {
  return (
    <div
      className={`flex flex-wrap gap-1 items-center p-2 mt-1 w-full rounded-xl ${
        active ? "bg-orange-50" : ""
      }`}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe96ce4abcfea27ea33071dbd6a23ed00e96efb6b8494afacbf6edad0fc29b2?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        alt="Navigation marker"
      />
      <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto rounded-lg basis-0">
        <div className="flex justify-center items-center self-stretch my-auto w-5 rounded-lg">
          <img
            loading="lazy"
            src={icon}
            className="object-contain self-stretch my-auto w-5 aspect-square"
            alt="Navigation item icon"
          />
        </div>
        <div className="flex-1 shrink self-stretch my-auto text-sm leading-none rounded-lg text-slate-700">
          {text}
        </div>
      </div>
    </div>
  );
}
