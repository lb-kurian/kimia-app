import * as React from "react";

export function UserProfile() {
  return (
    <div className="flex absolute left-9 z-0 flex-col pt-9 max-w-full h-36 text-sm font-medium tracking-wide bottom-[139px] text-neutral-800 w-[135px]">
      <div className="flex z-10 flex-col mb-0 max-md:mb-2.5">
        <div className="flex flex-col w-full">
          <ProfileItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aaaf67cb1fda7e40ef4b2f279b731a84403980275a641a084bf0e57a4daa60d3?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
            text="Settings"
          />
          <ProfileItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c192fa87d9d77dfea482d69d1913da3fc0abb55a6a724c2151c9f0cff9e0d1fe?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
            text="Billing"
          />
          <ProfileItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/08d41797511c2e853f87250a8c53e0420803cff467bb540e1842cb4c013bb1c1?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
            text="Notification"
          />
          <ProfileItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/258bffb6fc5ce2c46a29250f6555aed77f1547a30126c6fd8a6156f00aa2f81a?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
            text="Help"
          />
          <ProfileItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ddeab1bd0de8641ca79b559d07a87538dd7bce175aa6856fab62720aa36779ed?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
            text="Logout Account"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2fe6d4337234660bb83ee36e217fc4845094db5643166e1f89de6a2099a3957?placeholderIfAbsent=true&apiKey=14a7292a75f846b897d9b0e6987ce9ff"
          className="object-contain mt-4 w-10 aspect-square rounded-[100px]"
          alt="User avatar"
        />
      </div>
    </div>
  );
}

interface ProfileItemProps {
  icon: string;
  text: string;
}

function ProfileItem({ icon, text }: ProfileItemProps) {
  return (
    <div className="flex gap-2 items-start mt-2 w-full whitespace-nowrap">
      <img
        loading="lazy"
        src={icon}
        className="object-contain shrink-0 w-4 aspect-square"
        alt={`${text} icon`}
      />
      <div className="flex-1 shrink basis-0">{text}</div>
    </div>
  );
}
