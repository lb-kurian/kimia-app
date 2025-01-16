import * as React from "react";
import { IconButtonProps } from "./types";

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  alt,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center self-stretch my-auto w-5 rounded-lg"
    >
      <img
        loading="lazy"
        src={icon}
        alt={alt}
        className="object-contain self-stretch my-auto w-5 aspect-square"
      />
    </button>
  );
};
