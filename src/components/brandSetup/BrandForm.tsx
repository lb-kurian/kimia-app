import * as React from "react";

export function BrandForm() {
  return (
    <div className="flex flex-col mt-9 max-w-full w-[1041px] border border-gray-200 rounded-lg p-6">
      <div className="grid grid-cols-2 gap-7">
        <FormField label="Brand Name*" value="Organico Caffee" />
        <FormField
          label="Brand Tagline"
          value="Good for the Earth, Great in Your Cup"
          hasActions
        />
        <FormField
          label="Brand Bio"
          value="At Organicoffee, we deliver the finest, organically grown coffee sourced from sustainable, fair trade farms. Our commitment to purity and quality ensures every cup is free from synthetic pesticides and fertilizers, while our eco-friendly packaging reflects our dedication to the environment. By choosing Organicoffee, you're supporting ethical practices and a healthier planet. Experience the pure, unadulterated taste of Organicoffee – Pure Brew, Pure Nature."
          multiline
          hasActions
        />
        <FormField
          label="Business Model"
          value="B2B Service (marketing agencies, software developmet)"
          hasDropdown
        />
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex gap-1.5">
          <button className="px-6 py-2.5 border border-zinc-900 border-opacity-10 rounded-full text-zinc-900 opacity-40">
            Back
          </button>
          <button className="px-6 py-2.5 border border-cyan-600 rounded-full text-cyan-600">
            Next
          </button>
        </div>
        <button className="px-10 py-4 bg-cyan-600 text-white rounded-full font-semibold">
          Skip
        </button>
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  multiline?: boolean;
  hasActions?: boolean;
  hasDropdown?: boolean;
}

function FormField({
  label,
  value,
  multiline,
  hasActions,
  hasDropdown,
}: FormFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-base font-semibold tracking-wide text-black mb-2">
        {label}
      </label>
      <div
        className={`flex border border-zinc-300 rounded-lg ${
          multiline ? "min-h-[200px]" : ""
        }`}
      >
        <div
          className={`flex-1 p-4 ${
            hasActions || hasDropdown ? "flex justify-between items-center" : ""
          }`}
        >
          <div className="text-base font-light tracking-wide text-black">
            {value}
          </div>
          {hasActions && (
            <div className="flex gap-2.5">
              <button aria-label="Edit">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c28806c71b066248193151d9db92c8f213921962848d45c17d8b2c6dbf8eb632?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
                  className="w-5 h-5"
                  alt="Edit"
                />
              </button>
              <button aria-label="Copy">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0016aae4fc21ec5cc4101959e472d5691e417a2ffdc7416cd050b5a1f27e106d?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
                  className="w-5 h-5"
                  alt="Copy"
                />
              </button>
              <button aria-label="Generate">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2797a29b50f956fd5fa8df3b2c2398d570b080b748e5537f71df6a3ad43d7e4c?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
                  className="w-7 h-7 rounded"
                  alt="Generate"
                />
              </button>
            </div>
          )}
          {hasDropdown && (
            <button aria-label="Open dropdown">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e6df3e8dc9ccebea31b7d59c24c8dacc0c7f34cf0d4ae351a7c40f2dd38b5f2?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
                className="w-8 h-7"
                alt="Dropdown"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
