'use client';
import * as React from "react";
import { Logo } from "./Logo";
import { NavigationMenu } from "./NavigationMenu";
import { UserProfile } from "./UserProfile";

export function Sidebar() {
  
  return (
    <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full border-r border-gray-200">
      <div className="flex grow max-md:mt-3.5">
        <div className="flex relative flex-col px-4 pt-4 w-full">
          <Logo />
          <NavigationMenu />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
