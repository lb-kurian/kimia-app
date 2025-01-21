import * as React from "react";

interface NavigationButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  onSkip?: () => void;
}

export function NavigationButtons({
  onBack,
  onNext,
  onSkip,
}: NavigationButtonsProps) {
  return (
    <div className="flex flex-col justify-center p-2.5 mt-0 w-full text-sm font-medium tracking-normal leading-5 text-center whitespace-nowrap max-md:mt-0 max-md:max-w-full">
      <div className="flex items-start justify-between px-4 pb-6 w-full">
        <div className="flex gap-1.5 items-center">
          <button
            onClick={onBack}
            className="flex overflow-hidden flex-col justify-center self-stretch my-auto border border-solid border-zinc-900 border-opacity-10 min-h-[40px] rounded-[100px] text-zinc-900 w-[83px]"
          >
            <div className="flex flex-1 gap-2 justify-center items-center px-6 py-2.5 size-full max-md:px-5">
              <div className="self-stretch my-auto opacity-[0.38]">Back</div>
            </div>
          </button>
          <button
            onClick={onNext}
            className="flex overflow-hidden flex-col justify-center self-stretch my-auto text-cyan-600 border border-cyan-600 border-solid min-h-[40px] rounded-[100px] w-[83px]"
          >
            <div className="flex-1 gap-2 self-stretch px-6 py-2.5 size-full max-md:px-5">
              Next
            </div>
          </button>
        </div>
        <button
          onClick={onSkip}
          className="overflow-hidden px-10 py-4 text-xl font-semibold tracking-wide text-white whitespace-nowrap bg-cyan-600 border border-solid border-zinc-300 rounded-[40px] max-md:px-5"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
