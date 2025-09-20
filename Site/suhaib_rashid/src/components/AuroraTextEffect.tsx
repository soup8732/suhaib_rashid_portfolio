import React from "react";
import { cn } from "./lib/utils";

export interface AuroraTextEffectProps {
  text: string;
  className?: string;
  textClassName?: string;
  fontSize?: string;
  colors?: {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
  };
}

export function AuroraTextEffect({
  text,
  className,
  textClassName,
  fontSize = "clamp(2.5rem, 6vw, 4rem)",
  colors = {
    first: "bg-cyan-400",
    second: "bg-yellow-400",
    third: "bg-green-400",
    fourth: "bg-purple-500",
  },
}: AuroraTextEffectProps) {
  return (
    <div className={cn("text-center", className)}>
      <h2
        className={cn(
          "font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse",
          textClassName
        )}
        style={{ fontSize }}
      >
        {text}
      </h2>
    </div>
  );
}
