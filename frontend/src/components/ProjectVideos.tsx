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
          className="text-center mb-6 sm:mb-8"
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

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {/* Main Video Player - Smaller */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/50 border border-white/10 group">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
                    <span className="text-[#DC2626] text-xs font-semibold">LIVE</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-white">
                    {videos[selectedVideo].title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {videos[selectedVideo].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Video Cards Sidebar */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: -4, scale: 1.02 }}
                  onClick={() => setSelectedVideo(index)}
                  className={`relative rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 ${
                    selectedVideo === index
                      ? "ring-2 ring-[#DC2626] bg-[#DC2626]/10 scale-[1.02]"
                      : "bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#DC2626]/50"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/10 to-black/40 group-hover:from-[#DC2626]/20 transition-colors" />
                    {selectedVideo === index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#DC2626]/20">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center shadow-xl"
                        >
                          <FiPlay className="w-4 h-4 text-white ml-0.5" />
                        </motion.div>
                      </div>
                    )}
                    <div className="absolute top-1.5 left-1.5 bg-[#DC2626] text-white px-1.5 py-0.5 rounded text-[9px] font-semibold">
                      {index + 1}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent" />
                  </div>
                  <div className="p-2.5 sm:p-3">
                    <h4 className="font-bold text-xs sm:text-sm mb-0.5 text-white line-clamp-1">
                      {video.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideos;
