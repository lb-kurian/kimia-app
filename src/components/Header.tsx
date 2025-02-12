import React from "react";

export default function Header() {
  return (
    <div className="flex flex-wrap justify-between items-center px-7 py-5 w-full border-b border-zinc-900 border-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
        <div className="text-2xl text-black">
          <span
            style={{
              fontFamily:
                "Gilroy, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Welcome back,{" "}
          </span>
          <span
            style={{
              fontFamily:
                "Gilroy, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 700,
            }}
          >
            Max!
          </span>
        </div>
        <div className="mt-1 text-sm font-medium text-zinc-400 max-md:max-w-full">
          Continue creating content with KIMIA and get surprised by the
          potential of our Journeys!
        </div>
      </div>
      <HeaderControls />
    </div>
  );
}

function HeaderControls() {
  return (
    <div className="flex items-center self-stretch my-auto min-w-60 w-[391px]">
      <div className="flex gap-6 items-center self-stretch my-auto">
        <div className="flex gap-5 justify-center items-center self-stretch my-auto">
          <div className="flex gap-2 items-center self-stretch my-auto">
            <ThemeToggle />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9076aaa0a00ff0171f73f7899d19e2459815d6b2d4040e0829233e902615f762?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d7030f91505b95cb0835fcd23f25ccb208d7bf42032c9e0be96b062ce7bbf26?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
          className="object-contain shrink-0 self-stretch my-auto aspect-[2.42] w-[70px]"
        />
      </div>
    </div>
  );
}

function ThemeToggle() {
  return (
    <div className="flex flex-wrap gap-2 items-center self-stretch my-auto w-7 rounded-lg">
      <div className="flex relative grow shrink gap-1 justify-center items-start self-stretch p-1 my-auto rounded-lg w-[22px]">
        <div className="flex z-0 gap-1 justify-center items-center my-auto w-5 rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a397f42c2e9af1b52c69efb1988f702b9bec4201a92f62adc548b860e9037f?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
            className="object-contain self-stretch my-auto w-5 aspect-square"
          />
        </div>
        <div className="flex absolute top-2/4 left-2/4 z-0 gap-1 items-center self-start px-2 py-1 pt-4 pb-8 rounded-lg -translate-x-2/4 -translate-y-2/4 backdrop-blur-[20px] bg-zinc-900 bg-opacity-80">
          <div className="flex flex-wrap gap-2 items-center self-stretch my-auto rounded-lg">
            <div className="self-stretch my-auto text-xs text-white">
              Toggle theme
            </div>
            <div className="self-stretch my-auto text-sm leading-none text-white text-opacity-40">
              ⌘T
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
