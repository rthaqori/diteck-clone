import React, { ReactNode } from "react";
import { motion } from "motion/react";

type LinkTextProps = {
  children: ReactNode;
  active?: boolean;
};

const LinkText = ({ children, active = false }: LinkTextProps) => {
  const containerVariants = {
    rest: { y: 0 },
    hover: { y: -24 },
  };

  return (
    <div
      className={`relative h-6 w-fit cursor-pointer overflow-hidden p-5 text-lg leading-6 font-medium hover:text-[#636edf] ${
        active ? "#636edf" : "text-black"
      }`}
    >
      <motion.div
        className="flex flex-col"
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.3 }}
      >
        <motion.span variants={containerVariants}>{children}</motion.span>
        <motion.span variants={containerVariants}>{children}</motion.span>
      </motion.div>
    </div>
  );
};

export default LinkText;
