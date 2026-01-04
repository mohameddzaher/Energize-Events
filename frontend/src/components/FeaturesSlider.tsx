"use client";

import { motion } from "framer-motion";
import { FiZap, FiStar, FiAward, FiTarget } from "react-icons/fi";

const FeaturesSlider = () => {
  const features = [
    {
      icon: FiZap,
      title: "Lightning Fast",
      description: "Deliver exceptional events with speed and precision",
    },
    {
      icon: FiStar,
      title: "Premium Quality",
      description: "World-class standards in every detail",
    },
    {
      icon: FiAward,
      title: "Award Winning",
      description: "Recognized excellence in event management",
    },
    {
      icon: FiTarget,
      title: "Goal Oriented",
      description: "Achieving your vision with precision",
    },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#DC2626]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gray-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DC2626]/10 rounded-full mb-2">
            <div className="w-1.5 h-1.5 bg-[#DC2626] rounded-full animate-pulse" />
            <span className="text-[#DC2626] font-medium text-xs">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">
            What Makes Us <span className="text-[#DC2626]">Different</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            Creating unforgettable experiences that exceed expectations and transform visions into reality with precision and creativity
          </p>
        </motion.div>

        {/* Features Grid - Horizontal Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group relative cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 sm:p-4 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#DC2626]/10 to-gray-100 flex items-center justify-center mb-2.5 group-hover:from-[#DC2626]/20 group-hover:to-gray-200 transition-all duration-300">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC2626]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-tight">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSlider;
