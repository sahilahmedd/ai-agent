import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface SolidButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const SolidButton = React.forwardRef<HTMLButtonElement, SolidButtonProps>(
  ({ children, className, icon, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "rounded-xl flex items-center gap-2.5 px-[20px] py-[10px] shadow-[0px_4px_35.5px_0px_rgba(0,0,0,0.69)] font-[Poppins] text-[16px] font-medium leading-[24px] tracking-[-0.34px]",
          className
        )}
        style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        {...props}
      >
        {icon}
        {children}
      </motion.button>
    );
  }
);

SolidButton.displayName = "SolidButton";

export { SolidButton };
