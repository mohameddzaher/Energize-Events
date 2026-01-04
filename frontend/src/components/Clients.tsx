"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const clients = [
    { name: "Abbott", logo: "/images/clients/Abbott-.png" },
    { name: "Ajmal", logo: "/images/clients/Ajmal-.png" },
    {
      name: "AlBalad Dev Company",
      logo: "/images/clients/AlBalad Dev Company-.png",
    },
    { name: "AlSalamah Hospital", logo: "/images/clients/AlSalamah Hosp-.png" },
    { name: "Alwatan", logo: "/images/clients/Alwatan.png" },
    {
      name: "Aviation Academy",
      logo: "/images/clients/Avaition Academy-.png",
    },
    { name: "Cheil", logo: "/images/clients/Cheil-.webp" },
    { name: "Communion", logo: "/images/clients/Communion-.png" },
    { name: "Core", logo: "/images/clients/Core-.png" },
    { name: "Damac", logo: "/images/clients/Damac-.png" },
    { name: "Fakeeh Medical", logo: "/images/clients/Fakeeh Medical-.webp" },
    { name: "flyadeal", logo: "/images/clients/flyadeal-.png" },
    { name: "GACA", logo: "/images/clients/GACA-.png" },
    { name: "Galderma", logo: "/images/clients/Galderma-.png" },
    { name: "Gillette", logo: "/images/clients/Gillette-.png" },
    { name: "jedco", logo: "/images/clients/jedco-.png" },
    { name: "MG", logo: "/images/clients/MG-.png" },
    { name: "Mobil1", logo: "/images/clients/Mobil1-.png" },
    { name: "Nahdi", logo: "/images/clients/Nahdi.png" },
    { name: "nice", logo: "/images/clients/nice-.png" },
    { name: "Ogilvy", logo: "/images/clients/Ogilvy-.png" },
    { name: "panda", logo: "/images/clients/panda-.png" },
    { name: "Petro Rabigh", logo: "/images/clients/Petro Rabigh-.png" },
    { name: "Philips", logo: "/images/clients/Philips-.png" },
    { name: "PIF", logo: "/images/clients/PIF-.png" },
    { name: "Rixos", logo: "/images/clients/Rixos-.png" },
    { name: "sael", logo: "/images/clients/sael-.png" },
    { name: "Samsung", logo: "/images/clients/Samsung-.png" },
    { name: "SARED", logo: "/images/clients/SARED-.png" },
    { name: "SASO", logo: "/images/clients/SASO-.png" },
    { name: "Saudia Group", logo: "/images/clients/Saudia Group-.png" },
    {
      name: "Saudia Technic",
      logo: "/images/clients/Saudia Technic-.png",
    },
    { name: "savola", logo: "/images/clients/savola-.png" },
    { name: "SGS", logo: "/images/clients/SGS-.png" },
    { name: "SNB", logo: "/images/clients/SNB-.png" },
    { name: "StarzPlay", logo: "/images/clients/StarzPlay-.png" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-12 md:py-14 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920"
          alt="Clients Background"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/92 to-[#0A0A0A]/95" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Their trust is our strength - Company logos
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 70,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="clients-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 grayscale hover:grayscale-0 transition-all duration-500 p-4 bg-white/5 rounded-lg hover:bg-white/10 backdrop-blur-sm cursor-pointer"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
