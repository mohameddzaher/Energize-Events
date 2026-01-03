"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

interface BackButtonProps {
  href?: string;
  label?: string;
}

const BackButton = ({ href, label = "Back" }: BackButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05, x: -3 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 text-white hover:text-[#DC2626] transition-colors text-xs sm:text-sm font-medium mb-4 sm:mb-6 cursor-pointer"
    >
      <FiArrowLeft className="w-4 h-4" />
      <span>{label}</span>
    </motion.button>
  );
};

export default BackButton;
