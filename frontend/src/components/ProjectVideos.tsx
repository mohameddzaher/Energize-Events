"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiVideo, FiPlay } from "react-icons/fi";
import Image from "next/image";

const ProjectVideos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isPlaying, setIsPlaying] = useState(false);

  const video = {
    id: "1J5yrcbC1ozT0Yx9DnM_X-CA_eHTUHVe0",
    title: "Event Showcase",
    description: "Creating unforgettable experiences",
    embedUrl: "https://drive.google.com/file/d/1J5yrcbC1ozT0Yx9DnM_X-CA_eHTUHVe0/preview",
    thumbnailUrl: "https://drive.google.com/thumbnail?id=1J5yrcbC1ozT0Yx9DnM_X-CA_eHTUHVe0&sz=w1920",
  };

  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-12 md:py-14 bg-gradient-to-br from-[#0A0A0A] via-gray-900 to-[#0A0A0A] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DC2626]/20 rounded-full mb-3 border border-[#DC2626]/30">
            <FiVideo className="w-3.5 h-3.5 text-[#DC2626]" />
            <span className="text-[#DC2626] font-medium text-xs">VIDEO SHOWCASE</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mb-2">
            Our Work in Motion
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Experience the energy and excellence of our events through these highlights
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/50 border border-white/10">
            <div className="relative aspect-video bg-black">
              {isPlaying ? (
                <iframe
                  src={`${video.embedUrl}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen; accelerometer; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                  style={{ border: 'none' }}
                />
              ) : (
                <div 
                  className="w-full h-full relative cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#DC2626] flex items-center justify-center shadow-2xl"
                    >
                      <FiPlay className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-white">
                {video.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {video.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectVideos;
