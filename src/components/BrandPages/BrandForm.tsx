import * as React from "react";

export function BrandForm() {
  return (
    <div className="flex flex-col mt-9 max-w-full w-[1041px]">
      <div className="flex flex-wrap gap-7 items-center w-full max-md:max-w-full">
        <div className="flex flex-col grow shrink self-stretch my-auto text-base tracking-wide text-black min-w-[240px] w-[431px] max-md:max-w-full">
          <div className="font-semibold max-md:max-w-full">Brand Name*</div>
          <input
            type="text"
            defaultValue="Organico Caffee"
            className="overflow-hidden px-5 pt-4 pb-7 mt-2 w-full font-light rounded-lg border border-solid border-zinc-300 max-md:max-w-full"
            aria-label="Brand Name"
            required
          />
        </div>
        <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[387px] max-md:max-w-full">
          <div className="text-base font-semibold tracking-wide text-black max-md:max-w-full">
            Brand Tagline
          </div>
          <input
            type="text"
            defaultValue="Good for the Earth, Great in Your Cup"
            className="overflow-hidden px-5 pt-4 pb-7 mt-2 w-full font-light rounded-lg border border-solid border-zinc-300 max-md:max-w-full"
            aria-label="Brand Tagline"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-7 items-start mt-11 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col grow shrink min-w-[240px] w-[430px] max-md:max-w-full">
          <div className="text-base font-semibold tracking-wide text-black max-md:max-w-full">
            Brand Bio
          </div>
          <textarea
            defaultValue="At Organicoffee, we deliver the finest, organically grown coffee sourced from sustainable, fair trade farms. Our commitment to purity and quality ensures every cup is free from synthetic pesticides and fertilizers, while our eco-friendly packaging reflects our dedication to the environment. By choosing Organicoffee, you're supporting ethical practices and a healthier planet. Experience the pure, unadulterated taste of Organicoffee – Pure Brew, Pure Nature."
            className="overflow-hidden px-3.5 py-4 mt-2 w-full rounded-lg border border-solid border-zinc-300 max-w-[528px] max-md:max-w-full h-[200px]"
            aria-label="Brand Bio"
          />
        </div>
        <div className="flex flex-col grow shrink text-base tracking-wide text-black min-w-[240px] w-[390px] max-md:max-w-full">
          <div className="font-semibold max-md:max-w-full">Business Model</div>
          <select
            defaultValue="b2b"
            className="overflow-hidden px-5 py-3.5 mt-2 w-full rounded-lg border border-solid border-zinc-300 max-md:pl-5 max-md:max-w-full"
            aria-label="Business Model"
          >
            <option value="b2b">
              B2B Service (marketing agencies, software development)
            </option>
            <option value="b2c">B2C Service</option>
            <option value="hybrid">Hybrid Model</option>
          </select>
        </div>
      </div>
    </div>
  );
}
