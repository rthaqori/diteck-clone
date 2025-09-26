import { motion } from "framer-motion";
import { ReactNode } from "react";

type FooterLinkProps = {
  children: ReactNode;
};

const FooterLink = ({ children }: FooterLinkProps) => {
  return (
    <motion.div
      className="relative inline-block w-fit cursor-pointer overflow-hidden text-lg leading-7 font-normal capitalize"
      whileHover="hover"
      initial="initial"
    >
      {children}

      <motion.div
        className="absolute bottom-0 left-0 h-[0.5px] w-full bg-white"
        variants={{
          initial: { x: 0, opacity: 1 },
          hover: { x: "250%", opacity: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 h-[0.5px] w-full bg-white"
        variants={{
          initial: { x: "-250%", opacity: 0 },
          hover: { x: 0, opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default FooterLink;
