"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920",
  ];

  return (
    <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden pt-12 md:pt-14">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={img}
                  alt={`Hero ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  sizes="100vw"
                  quality={index === 0 ? 75 : 60}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]/80" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium mb-4"
            >
              Creating Unforgettable Experiences
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-serif font-bold text-white mb-3 sm:mb-4 leading-tight"
          >
            Elevate Your Events,
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              Energize Your Vision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mb-6 sm:mb-8 font-light max-w-2xl mx-auto px-4 leading-relaxed"
          >
            All-in-one platform to plan, execute, and deliver exceptional events
            - faster and smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer group relative bg-red-900 text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm w-full sm:w-auto hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer group relative bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm w-full sm:w-auto  border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Our Work
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 bg-white rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
