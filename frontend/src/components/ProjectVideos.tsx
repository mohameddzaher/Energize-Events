"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiVideo, FiPlay } from "react-icons/fi";

const ProjectVideos = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedVideo, setSelectedVideo] = useState(0);

  const videos = [
    {
      id: "saudia-family-day",
      title: "Saudia Family Day",
      description: "Creating unforgettable family experiences",
      videoUrl: "/images/Saudia - FamilyDay.mp4",
    },
    {
      id: "skyteam",
      title: "SkyTeam Event",
      description: "World-class event production and excellence",
      videoUrl: "/images/SkyTeam.mp4",
    },
  ];

  // Auto-play video when it becomes visible
  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      });
    }
  }, [selectedVideo, isInView]);

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

        <div className="max-w-7xl mx-auto">
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/50 border border-white/10">
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  key={selectedVideo}
                  src={videos[selectedVideo].videoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-white">
                  {videos[selectedVideo].title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  {videos[selectedVideo].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video Cards Grid - Horizontal */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setSelectedVideo(index)}
                className={`relative rounded-xl overflow-hidden shadow-xl group cursor-pointer transition-all duration-300 ${
                  selectedVideo === index
                    ? "ring-2 ring-[#DC2626] bg-[#DC2626]/10"
                    : "bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#DC2626]/50"
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <video
                    src={video.videoUrl}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/10 to-black/50 group-hover:from-[#DC2626]/20 transition-colors" />
                  {selectedVideo === index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#DC2626]/10">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-12 h-12 rounded-full bg-[#DC2626] flex items-center justify-center shadow-xl"
                      >
                        <FiPlay className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-[#DC2626] text-white px-2 py-1 rounded text-[10px] font-semibold">
                    {index + 1}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                </div>
                <div className="p-3 sm:p-4">
                  <h4 className="font-bold text-sm mb-1 text-white line-clamp-1">
                    {video.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideos;
