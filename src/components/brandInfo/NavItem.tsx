import * as React from "react";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ icon, label, alt }) => {
  return (
    <div className="flex gap-2 items-start w-full whitespace-nowrap">
      <img
        loading="lazy"
        src={icon}
        alt={alt}
        className="object-contain shrink-0 w-4 aspect-square"
      />
      <div className="flex-1 shrink basis-0">{label}</div>
    </div>
  );
};
