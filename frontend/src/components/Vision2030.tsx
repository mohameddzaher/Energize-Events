"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Vision2030 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-12 md:py-14 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#DC2626]/10 to-green-600/10 rounded-full mb-4 border border-[#DC2626]/20">
              <span className="text-2xl">🇸🇦</span>
              <span className="text-[#DC2626] font-bold text-xs sm:text-sm">
                Vision 2030
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Contributing to Saudi Arabia&apos;s{" "}
              <span className="text-[#DC2626]">Vision 2030</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent mx-auto mb-4" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100"
          >
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center mb-6">
              We are proud to contribute to Saudi Arabia&apos;s Vision 2030 by
              creating world-class events that showcase innovation, excellence,
              and cultural richness on the global stage. Our commitment aligns
              with the Kingdom&apos;s ambitious goals of economic diversification,
              cultural enrichment, and international recognition.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-[#DC2626]/5 to-transparent rounded-lg">
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">
                  Innovation
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs">
                  Cutting-edge event solutions
                </p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-500/5 to-transparent rounded-lg">
                <div className="text-2xl mb-2">🌟</div>
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">
                  Excellence
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs">
                  World-class standards
                </p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#DC2626]/5 to-transparent rounded-lg">
                <div className="text-2xl mb-2">🌍</div>
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">
                  Global Impact
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs">
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

