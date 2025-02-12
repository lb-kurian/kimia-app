import React from "react";

export default function SidebarUserMenu() {
  const menuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fe83b3fae211b869d8460293ab6b521bc6f09c8f913610b5ad1e77848000777?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      label: "Settings",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c192fa87d9d77dfea482d69d1913da3fc0abb55a6a724c2151c9f0cff9e0d1fe?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      label: "Billing",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08d41797511c2e853f87250a8c53e0420803cff467bb540e1842cb4c013bb1c1?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      label: "Notification",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dec02745901c8c7bf1f7d7a3c80b7f79e9f34ff8e45af029a5ef87b41288e017?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      label: "Help",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddeab1bd0de8641ca79b559d07a87538dd7bce175aa6856fab62720aa36779ed?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      label: "Logout Account",
    },
  ];

  return (
    <div className="flex absolute right-11 z-0 flex-col pt-9 max-w-full h-36 text-sm font-medium tracking-wide bottom-[182px] text-neutral-800 w-[135px]">
      <div className="z-10 mb-0 max-md:mb-2.5">
        <div className="w-full">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-start mt-2 w-full whitespace-nowrap"
            >
              <img
                loading="lazy"
                src={item.icon}
                className="object-contain shrink-0 w-4 aspect-square"
              />
              <div className="flex-1 shrink basis-0">{item.label}</div>
            </div>
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c293c8fbed749e4c8867a577f260ca0d0d8ac0aab6e1b56945f829f0daad5bf1?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
          className="object-contain mt-4 w-10 aspect-square rounded-[100px]"
        />
      </div>
    </div>
  );
}
