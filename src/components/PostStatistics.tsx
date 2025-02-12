import React from "react";

export default function PostStatistics() {
  const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/289e597b4f93da984bf98311edb173999ba52b9d49fd26d0d303d1eb6972947a?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      label: "Published",
      value: "90",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7af9bf4945ed0fbe6601936664c2546d9a89c56edd672d0c85e437c3964fc0de?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      label: "Scheduled",
      value: "30",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9556d988f8023d2866e03aff4001d8b9a58d80e5d468a5da3120921063defb21?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      label: "Failed",
      value: "5",
    },
  ];

  return (
    <div className="flex gap-5 items-start min-w-60">
      <div className="px-4 py-4 bg-white rounded-3xl border border-gray-200 border-solid min-h-[173px] min-w-60 shadow-[0px_4px_20px_rgba(238,238,238,0.1)]">
        <div className="max-w-full text-base font-semibold leading-8 text-slate-700 w-[103px]">
          <div className="flex gap-6 items-start w-full">
            <div className="rounded-none w-[103px]">Post Statistics</div>
          </div>
        </div>
        <div className="flex gap-8 items-center mt-2.5">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="self-stretch my-auto w-[49px]">
      <img
        loading="lazy"
        src={icon}
        className="object-contain aspect-[1.02] w-[49px]"
      />
      <div className="mt-3.5 w-full">
        <div className="text-xs text-neutral-500">{label}</div>
        <div className="mt-1 text-base font-bold text-center text-black">
          {value}
        </div>
      </div>
    </div>
  );
}
