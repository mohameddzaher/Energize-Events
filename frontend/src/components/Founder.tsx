"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaCrown,
  FaLightbulb,
  FaAward,
  FaRocket,
  FaHandshake,
  FaBullseye,
} from "react-icons/fa";
import Image from "next/image";

const Founder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [imageError, setImageError] = useState(false);

  const leadershipHighlights = [
    {
      icon: FaCrown,
      title: "Strategic Visionary",
      description: "25+ years shaping industry landscapes",
    },
    {
      icon: FaRocket,
      title: "Growth Catalyst",
      description: "Scaled 9+ companies to success",
    },
    {
      icon: FaHandshake,
      title: "Relationship Builder",
      description: "Strong network across MENA region",
    },
    {
      icon: FaBullseye,
      title: "Goal Achiever",
      description: "500+ projects delivered successfully",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-12 md:py-14 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#DC2626] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-500 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#DC2626]/10 to-red-600/10 mb-3">
            <FaCrown className="w-5 h-5 text-[#DC2626]" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Founder & Chairman
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent mx-auto mb-3" />

          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Driving innovation and excellence in event management
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mb-6 sm:mb-8"
        >
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto">
            <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white shadow-xl">
              {!imageError ? (
                <Image
                  src="/images/founder.jpeg"
                  alt="Mr. Dulaim Al Nasher"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <FaCrown className="w-10 h-10 text-gray-400" />
                </div>
              )}
            </div>

            <div className="absolute -bottom-1 right-4 sm:right-6">
              <div className="px-2.5 py-1 bg-gradient-to-r from-[#DC2626] to-red-600 rounded-full shadow-lg">
                <span className="text-white text-xs font-semibold">
                  Founder
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            Mr. Dulaim Al Nasher
          </h3>
          <p className="text-[#DC2626] font-medium text-sm">
            Founder & Chairman • Energize Global Group
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-sm mx-auto"
        >
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-lg sm:text-xl font-bold text-gray-900">
              25+
            </div>
            <div className="text-xs text-gray-600 mt-1">Years</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-lg sm:text-xl font-bold text-gray-900">9+</div>
            <div className="text-xs text-gray-600 mt-1">Companies</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-lg sm:text-xl font-bold text-gray-900">
              750+
            </div>
            <div className="text-xs text-gray-600 mt-1">Team</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#DC2626]/5 to-red-600/5 rounded-xl">
                <FaLightbulb className="w-3.5 h-3.5 text-[#DC2626]" />
                <span className="text-[#DC2626] font-medium text-xs">
                  Leadership Profile
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 sm:p-6 shadow-sm">
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                With over 25 years of experience, Mr. Dulaim Al Nasher has
                established himself as a visionary leader in the Saudi business
                landscape. As the founder and chairman of Energize Global Group,
                he has successfully launched and scaled multiple ventures,
                leading a team of 750+ professionals and delivering 500+
                projects across the MENA region.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {leadershipHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#DC2626]/10 to-red-600/10 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4 text-[#DC2626]" />
                    </div>
                    <h4 className="text-xs font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-black">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#DC2626]/20 to-transparent rounded-full -translate-x-16 -translate-y-16" />
            <div className="relative p-4 sm:p-5">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DC2626]/20 to-red-600/20 flex items-center justify-center">
                    <FaAward className="w-4 h-4 text-[#DC2626]" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/90 text-xs sm:text-sm italic mb-2 leading-relaxed">
                    &quot;We believe in creating not just events, but
                    experiences that inspire, connect, and transform. Our
                    commitment is to excellence, innovation, and building
                    lasting partnerships.&quot;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#DC2626] font-medium text-[10px] sm:text-xs">
                      Mr. Dulaim Al Nasher
                    </span>
                    <span className="text-gray-400 text-[10px] sm:text-xs">
                      Founder & Chairman
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 sm:mt-8"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <div className="px-3 py-1.5 bg-gradient-to-r from-[#DC2626]/10 to-red-600/10 rounded-xl border border-[#DC2626]/20">
              <span className="text-[#DC2626] text-xs font-medium">
                500+ Projects
              </span>
            </div>
            <div className="px-3 py-1.5 bg-gradient-to-r from-[#DC2626]/10 to-red-600/10 rounded-xl border border-[#DC2626]/20">
              <span className="text-[#DC2626] text-xs font-medium">
                MENA Region
              </span>
            </div>
            <div className="px-3 py-1.5 bg-gradient-to-r from-[#DC2626]/10 to-red-600/10 rounded-xl border border-[#DC2626]/20">
              <span className="text-[#DC2626] text-xs font-medium">
                6+ Awards
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
