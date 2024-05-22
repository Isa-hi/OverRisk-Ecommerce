import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type TShirtProps = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  darkMode?: boolean;
};

export default function TShirt({
  imgSrc,
  darkMode = false,
  className,
  ...props
}: TShirtProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-40 overflow-hidden -left-4",
        className
      )}
      {...props}>
      <img
        src={imgSrc}
        alt="overlaying t-shirt image"
        className="pointer-events-none z-40 select-none" />
      </div>
  );
}
