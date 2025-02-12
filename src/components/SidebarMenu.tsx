import React from "react";

export default function SidebarMenu() {
  return (
    <div className="z-0 mt-7 w-full">
      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-col justify-center py-1 pr-3 pl-8 w-full text-sm font-bold leading-none text-orange-500 whitespace-nowrap rounded-lg max-md:pl-5">
          <div className="flex gap-2.5 items-center w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b43211a89fdba12a366909d2859c1dceecdeb511fcb182140f1f3260088ed9a5?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
            <div className="self-stretch my-auto">Dashboard</div>
          </div>
        </div>
        <MenuSection
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/777e9bec4a0fa002422f274031c59d6170a86aa8b065de08bc363b66b370473a?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
          title="Idea Lab"
          items={[
            "Brainstorming",
            "Trend Discovery",
            "Prompt Collection",
            "AI History",
          ]}
        />
        <MenuSection
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9095e64f6146488a145cfc9e8c0ffc101f78554bcdbb8468a035a61be076e660?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
          title="Content Lab"
          items={["Smart Publisher", "Automation", "1-click Reanimation"]}
        />
        <MenuSection
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1426a72ef0f1927d71759b151b785ea985906c4f599a462019d3ee4065d43c?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
          title="Assets"
          items={[
            "Contents (Posts)",
            "Calendar",
            "Media Library",
            "Media Templates",
            "Social Accounts",
          ]}
        />
      </div>
    </div>
  );
}

function MenuSection({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col mt-2 w-full">
      <div className="flex flex-wrap gap-1 items-center p-2 w-full rounded-xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/54b94a0e273d7de0eb0b14ba3b6267548f5e29fa2e87cf7e3d0808c6c828e161?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto rounded-lg basis-0">
          <div className="flex justify-center items-center self-stretch my-auto w-5 rounded-lg">
            <img
              loading="lazy"
              src={icon}
              className="object-contain self-stretch my-auto w-5 aspect-square"
            />
          </div>
          <div className="flex-1 shrink self-stretch my-auto text-sm leading-none rounded-lg text-slate-700">
            {title}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center self-center max-w-full text-sm font-medium tracking-wide text-neutral-800 w-[121px]">
        {items.map((item, index) => (
          <div key={index} className={index > 0 ? "mt-2" : ""}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
