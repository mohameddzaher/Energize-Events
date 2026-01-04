"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const MissionVision = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.2 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.2 });

  return (
    <section className="relative py-10 sm:py-12 md:py-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920"
          alt="Mission Vision Background"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/92 to-[#0A0A0A]/95" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Mission Section */}
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600"
                  alt="Our Mission"
                  width={450}
                  height={300}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-0.5 bg-[#DC2626]" />
                <span className="text-[#DC2626] font-medium text-xs tracking-wider uppercase">
                  OUR MISSION
                </span>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                Creating <span className="text-[#DC2626]">Unforgettable</span>{" "}
                Experiences
              </h2>

              <p className="text-gray-300 text-xs leading-relaxed">
                We partner with Saudi companies and government entities to
                design and organize world-class events that elevate the attendee
                experience, inspire creativity, and achieve exceptional impact
                through innovative ideas and professional execution.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider - Smaller */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent" />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-[#DC2626]/20 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-[#DC2626] rounded-full" />
            </div>
          </div>
        </div>

        {/* Vision Section */}
            <motion.div
              ref={visionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 order-2 md:order-1"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-0.5 bg-[#DC2626]" />
                <span className="text-[#DC2626] font-medium text-xs tracking-wider uppercase">
                  OUR VISION
                </span>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                Leading <span className="text-[#DC2626]">Event Innovation</span>{" "}
                in KSA
              </h2>

              <p className="text-gray-300 text-xs leading-relaxed">
                By 2030, we aspire to be the most trusted partner in Saudi
                Arabia&apos;s events sector, creating iconic experiences that
                inspire attendees, embody cultural spirit, and deliver
                unforgettable impact through creative and forward-thinking
                solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group order-1 md:order-2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600"
                  alt="Our Vision"
                  width={450}
                  height={300}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
