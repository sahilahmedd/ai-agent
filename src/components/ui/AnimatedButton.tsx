import React from "react";
import { cn } from "../../lib/utils";

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex h-12 overflow-hidden rounded-full focus:outline-none w-full",
          className
        )}
        {...props}
      >
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#5E2CD9] px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
          {children}
        </span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
