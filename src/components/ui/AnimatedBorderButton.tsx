import React from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface AnimatedBorderButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

const AnimatedBorderButton: React.FC<AnimatedBorderButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      className={`relative inline-flex h-12 min-w-[320px] px-8 items-center justify-center rounded-full border-2 bg-[#6C47FF] text-white text-base font-semibold focus:outline-none overflow-hidden ${className}`}
      style={{
        borderImage:
          "conic-gradient(from 90deg at 50% 50%, #8558F2 0%, #FFFFFF 50%, #8558F2 100%) 1",
        borderStyle: "solid",
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      type="button"
      {...props}
    >
      <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 py-4">
        {children}
      </span>
    </motion.button>
  );
};

export default AnimatedBorderButton;
