"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Adjust the import path as needed

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
}

const AnimatedButton = ({ children, className }: AnimatedButtonProps) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={cn(
        "relative flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-md pr-5",
        className,
      )}
    >
      <motion.div
        className="absolute inset-0 z-0 bg-[#636edf]"
        variants={{
          rest: { scaleX: 0, originX: 0 },
          hover: {
            scaleX: 1,
            transition: { duration: 0.3, ease: "easeInOut" },
          },
        }}
      />

      <motion.span
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-md bg-[#636edf]"
        variants={{
          hover: {
            backgroundColor: "rgba(0,0,0,0)",
            transition: { duration: 0.2 },
          },
        }}
      >
        <ArrowRight className="text-white" height={20} width={20} />
      </motion.span>

      <motion.span
        className="relative z-10 leading-6 font-semibold"
        variants={{
          rest: { color: "#111827" },
          hover: { color: "#ffffff", transition: { duration: 0.2 } },
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedButton;
