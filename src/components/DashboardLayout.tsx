"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <div className="ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
