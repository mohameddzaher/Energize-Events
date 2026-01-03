"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      slug: "tech-conference-2024",
      title: "Tech Conference 2024",
      category: "Conference",
      client: "Tech Corporation",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      description: "A large-scale technology conference with 5000+ attendees",
      achievements:
        "Successfully managed 5000+ attendees, 50+ speakers, and 100+ sessions",
    },
    {
      slug: "corporate-gala-night",
      title: "Corporate Gala Night",
      category: "Corporate Event",
      client: "Global Industries",
      image:
        "https://images.unsplash.com/photo-1593080358201-08e4ff5f93d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Elegant corporate gala with live entertainment and awards",
      achievements:
        "Delivered elegant evening with 500+ VIP guests and live performances",
    },
    {
      slug: "music-festival",
      title: "Music Festival",
      category: "Festival",
      client: "Entertainment Group",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      description:
        "Multi-day outdoor music festival with international artists",
      achievements:
        "Organized 3-day festival with 20,000+ attendees and 30+ artists",
    },
    {
      slug: "product-launch",
      title: "Product Launch",
      category: "Launch Event",
      client: "Innovation Labs",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Innovative product launch with interactive demonstrations",
      achievements:
        "Generated 1M+ social media impressions and 500+ media coverage",
    },
    {
      slug: "wedding-celebration",
      title: "Wedding Celebration",
      category: "Wedding",
      client: "Private Client",
      image:
        "https://images.unsplash.com/photo-1614487331144-b5b141c11eab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200",
      description: "Luxury wedding celebration with custom design elements",
      achievements:
        "Created unforgettable experience for 300+ guests with custom design",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-10 sm:py-12 md:py-14 bg-gradient-to-br from-gray-100 to-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="text-[#DC2626] font-semibold text-xs mb-2 block">
            PROJECTS
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#0A0A0A] mb-2">
            Our Recent Work
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-1">
            (PHOTOS & VIDEOS)
          </p>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto">
            See how we&apos;ve transformed visions into unforgettable
            experiences
          </p>
        </motion.div>

        <div className="mb-6 sm:mb-8">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="!w-[85%] sm:!w-[75%] md:!w-[65%] lg:!w-[55%]"
              >
                <Link href={`/projects/${project.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? {
                            opacity: index === activeIndex ? 1 : 0.7,
                            scale: index === activeIndex ? 1 : 0.9,
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                    className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer group"
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 75vw, (max-width: 1024px) 65vw, 55vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                      <span className="text-[#DC2626] font-semibold text-xs mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-xs">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {projects.slice(0, 3).map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer h-full"
              >
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                  <h4 className="font-bold text-sm sm:text-base mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Project"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-[#DC2626] rounded-full p-2 hover:bg-red-700 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
