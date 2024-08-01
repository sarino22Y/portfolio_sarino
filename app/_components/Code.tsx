import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border border-accent px-1 text-primary rounded-sm mx-1 text-nowrap hover:bg-accent/50 transition-colors ",
        className
      )}
      {...props} />
  );
};
