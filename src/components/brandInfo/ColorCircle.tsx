import * as React from "react";
import { ColorCircleProps } from "./types";

export const ColorCircle: React.FC<ColorCircleProps> = ({ color }) => (
  <div
    className="flex shrink-0 self-stretch my-auto rounded-full h-[70px] w-[70px]"
    style={{ backgroundColor: color }}
    role="presentation"
  />
);
