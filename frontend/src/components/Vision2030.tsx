"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FiZap, FiAward, FiGlobe } from "react-icons/fi";

const Vision2030 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-6 sm:py-8 md:py-10 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
          alt="Saudi Arabia Background"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/92 to-[#0A0A0A]/95" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#DC2626]/10 to-green-600/10 rounded-full mb-3 border border-[#DC2626]/20">
              <span className="text-base">🇸🇦</span>
              <span className="text-[#DC2626] font-bold text-[10px] sm:text-xs">
                Vision 2030
              </span>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
              Contributing to Saudi Arabia&apos;s{" "}
              <span className="text-[#DC2626]">Vision 2030</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent mx-auto mb-3" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg p-4 sm:p-5"
          >
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed text-center mb-4">
              We are proud to contribute to Saudi Arabia&apos;s Vision 2030 by
              creating world-class events that showcase innovation, excellence,
              and cultural richness on the global stage. Our commitment aligns
              with the Kingdom&apos;s ambitious goals of economic diversification,
              cultural enrichment, and international recognition.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DC2626]/20 to-red-600/20 flex items-center justify-center">
                    <FiZap className="w-4 h-4 text-[#DC2626]" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-[10px] sm:text-xs mb-1">
                  Innovation
                </h3>
                <p className="text-white/70 text-[9px] sm:text-[10px]">
                  Cutting-edge event solutions
                </p>
              </div>
              <div className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DC2626]/20 to-red-600/20 flex items-center justify-center">
                    <FiAward className="w-4 h-4 text-[#DC2626]" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-[10px] sm:text-xs mb-1">
                  Excellence
                </h3>
                <p className="text-white/70 text-[9px] sm:text-[10px]">
                  World-class standards
                </p>
              </div>
              <div className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DC2626]/20 to-red-600/20 flex items-center justify-center">
                    <FiGlobe className="w-4 h-4 text-[#DC2626]" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-[10px] sm:text-xs mb-1">
                  Global Impact
                </h3>
                <p className="text-white/70 text-[9px] sm:text-[10px]">
                  International recognition
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision2030;

