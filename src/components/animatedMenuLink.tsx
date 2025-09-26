"use client";

import { useState } from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { motion } from "motion/react"; // Your specific motion library

interface AnimatedMenuLinkProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedMenuLink = ({
  children,
  className = "",
}: AnimatedMenuLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavigationMenuLink asChild>
      <Link
        href="#"
        className={`flex flex-row items-center ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -4,
            scale: isHovered ? 1 : 0.6,
          }}
          transition={{ duration: 0.3 }}
          className="h-1.5 w-1.5 flex-shrink-0 rounded-xs bg-[#636edf]"
        />

        <motion.span
          animate={{ x: isHovered ? 8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>
      </Link>
    </NavigationMenuLink>
  );
};

export default AnimatedMenuLink;
