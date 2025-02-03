
"use client";
import type React from "react";
import Image from "next/image";
import { useLanguage } from "../../../contexts/LanguageContext";
import { headerText } from "../../../locales/introduction/headerText";

const Header: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="flex items-center gap-4">
      {/* <Image src="/kimia.png" alt="KIMIA Logo" width={80} height={80} />   */}
      {/* <div className="text-4xl text-blue-950">
        <span className="tracking-normal text-blue-950">KIMIA</span>
      </div> */}
      <h1 className="text-2xl font-bold tracking-normal text-blue-950">{headerText[language]}</h1>
    </div>
  );
};

export default Header;
