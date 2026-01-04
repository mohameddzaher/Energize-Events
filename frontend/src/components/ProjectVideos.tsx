"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { FiPlay, FiVideo } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const ProjectVideos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = [
    {
      id: "1S_t4Nqu42C67h9OJhn6gTPw9trWzFntM",
      title: "Event Showcase 1",
      description: "Our exceptional event management in action",
      embedUrl: "https://drive.google.com/file/d/1S_t4Nqu42C67h9OJhn6gTPw9trWzFntM/preview",
    },
    {
      id: "1J5yrcbC1ozT0Yx9DnM_X-CA_eHTUHVe0",
      title: "Event Showcase 2",
      description: "Creating unforgettable experiences",
      embedUrl: "https://drive.google.com/file/d/1J5yrcbC1ozT0Yx9DnM_X-CA_eHTUHVe0/preview",
    },
    {
      id: "14XRrAuUFYUMvDox3VDiZYo2GtyufjV3J",
      title: "Event Showcase 3",
      description: "World-class event production",
      embedUrl: "https://drive.google.com/file/d/14XRrAuUFYUMvDox3VDiZYo2GtyufjV3J/preview",
    },
  ];

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

        {/* Video Carousel */}
        <div className="mb-8">
          <Swiper
            modules={[Autoplay, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="video-swiper"
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {videos.map((video, index) => {
              const isActive = index === activeIndex;
              return (
                <SwiperSlide
                  key={video.id}
                  className="!w-[90%] md:!w-[70%] lg:!w-[60%]"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative rounded-xl overflow-hidden shadow-2xl group"
                  >
                    <div className="relative aspect-video bg-black/50">
                      {playingVideo === index ? (
                        <iframe
                          src={video.embedUrl}
                          className="w-full h-full"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={video.title}
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/20 to-black/80 flex items-center justify-center">
                            <div className="text-center">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setPlayingVideo(index)}
                                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#DC2626] flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-colors mb-3"
                              >
                                <FiPlay className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                              </motion.button>
                              <p className="text-white text-xs sm:text-sm font-medium">
                                Click to Play
                              </p>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent" />
                        </>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-white">
                        {video.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        {video.description}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-lg overflow-hidden shadow-xl group cursor-pointer bg-black/40 backdrop-blur-sm border border-white/10"
              onClick={() => setPlayingVideo(playingVideo === index ? null : index)}
            >
              <div className="relative aspect-video">
                {playingVideo === index ? (
                  <iframe
                    src={video.embedUrl}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={video.title}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/30 to-black/70 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#DC2626] flex items-center justify-center shadow-lg group-hover:bg-red-700 transition-colors"
                      >
                        <FiPlay className="w-5 h-5 md:w-6 md:h-6 text-white ml-1" />
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  </>
                )}
              </div>
              <div className="p-3 sm:p-4">
                <h4 className="font-bold text-sm sm:text-base mb-1 text-white">
                  {video.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectVideos;

