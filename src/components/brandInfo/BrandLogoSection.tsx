import * as React from "react";
import { BrandLogoSectionProps } from "./types";

export const BrandLogoSection: React.FC<BrandLogoSectionProps> = ({
  title,
  logoSrc,
  logoAlt,
}) => (
  <div className="flex flex-col w-full font-medium text-black max-md:max-w-full">
    <div className="max-md:max-w-full">{title}</div>
    <img
      loading="lazy"
      src={logoSrc}
      alt={logoAlt}
      className="object-contain mt-4 rounded-2xl aspect-square w-[84px]"
    />
  </div>
);
