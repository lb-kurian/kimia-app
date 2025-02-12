import React from "react";

export default function SocialAccounts() {
  const accounts = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/63074d42181d0e2dfb0d9c8a9b19c431f37e248ab88b3cbdfcd2338fe839d9e9?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f316066da25caf10ed6031123b6784c428bcf05822b484aa78f3d0d7161872d5?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecae8a6e-7562-4b4c-8d79-4610e086128d?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f2f95a3-204c-4b4a-b75a-637cb3c572ab?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfaa2582-1c8c-4a90-853d-39d6091ef7c0?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/12af5169d8104ab692837e6844089bab9c0ee41f6f5b5355254b23186cda9102?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      name: "Tim Khoshtipian",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2358418f1e502b33ae538a4e3229442319cdba6172740562783ead155e01a69?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
    },
  ];

  return (
    <div className="flex flex-col justify-center p-4 w-full bg-white rounded-3xl border border-gray-200 border-solid min-h-[190px] shadow-[0px_4px_20px_rgba(238,238,238,0.1)] max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="flex relative gap-10 items-start w-full max-md:max-w-full">
          <div className="text-base font-semibold leading-6 rounded-none min-w-60 text-neutral-400 w-[538px] max-md:max-w-full">
            <span style={{ color: "rgba(49,61,79,1)" }}>
              Connected Social Accounts
            </span>{" "}
            <span
              style={{
                fontWeight: 400,
                fontSize: "14px",
                color: "rgba(151,151,151,1)",
              }}
            >
              Connect your social accounts to schedule and manage your social
              media presence
            </span>
            <span style={{ fontWeight: 400 }}>.</span>
          </div>
          <div className="absolute top-0.5 gap-1 px-1 text-sm font-medium leading-none text-center text-sky-900 whitespace-nowrap bg-blue-50 rounded-md left-[215px]">
            6
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-center mt-4 w-full max-md:max-w-full">
          {accounts.map((account, index) => (
            <AccountItem key={index} {...account} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccountItem({ src, name }: { src: string; name?: string }) {
  if (name) {
    return (
      <div className="self-stretch my-auto text-xs font-medium rounded-md text-slate-700 w-[90px]">
        <div className="flex flex-col px-2.5 py-2.5 bg-white rounded-md border border-solid border-neutral-300 border-opacity-20 h-[92px] w-[92px]">
          <img
            loading="lazy"
            src={src}
            className="object-contain self-center w-14 rounded-md aspect-[0.98]"
          />
          <div className="mt-1.5">{name}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      loading="lazy"
      src={src}
      className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[0.97] w-[90px]"
    />
  );
}
