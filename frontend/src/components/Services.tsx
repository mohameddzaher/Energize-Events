"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiCalendar,
  FiBriefcase,
  FiZap,
  FiLayers,
  FiMonitor,
  FiLayout,
  FiCoffee,
  FiMap,
  FiMusic,
  FiTarget,
  FiStar,
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";

  const services = [
    {
      icon: FiCalendar,
      title: "Conferences & Seminars",
      slug: "conferences-seminars",
      description:
        "We offer integrated conferences and seminars with high smoothness and excellence through creative thinking that inspires attendees and effectively develops engagement.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FiBriefcase,
      title: "Commercial Exhibitions",
      slug: "commercial-exhibitions",
      description:
        "Organizing world-class commercial exhibitions aimed at showcasing brands and products and highlighting the latest innovations.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FiZap,
      title: "Event Activation",
      slug: "event-activation",
      description:
        "We create unique and unforgettable brand experiences aimed at generating positive interaction and effectively stimulating audience participation.",
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FiLayers,
      title: "Event Design & Planning",
      slug: "event-design-planning",
      description:
        "We excel in designing unique event concepts that reflect the client's vision and identity, focusing on innovation and excellence at every stage.",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FiMonitor,
      title: "Technology & Production",
      slug: "technology-production",
      description:
        "We provide advanced technological and production solutions that create a qualitative shift in every event through the latest equipment and systems.",
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: FiLayout,
      title: "Stage Design",
      slug: "stage-design",
      description:
        "We create immersive and visually stunning stages that embody your vision and tell your story in all its details.",
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: FiCoffee,
      title: "Hospitality & Catering",
      slug: "hospitality-catering",
      description:
        "We provide elegant hospitality and catering services aimed at impressing guests and enhancing their experience.",
      iconColor: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: FiMap,
      title: "Event Planning",
      slug: "event-planning",
      description:
        "We provide comprehensive and integrated planning services covering all stages of the event from start to finish.",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      icon: FiMusic,
      title: "Entertainment Events",
      slug: "entertainment-events",
      description:
        "We excel in coordinating and organizing exciting entertainment experiences that captivate audiences and keep them engaged.",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: FiTarget,
      title: "Product Launches",
      slug: "product-launches",
      description:
        "We execute product launch campaigns in an innovative and effective style that generates momentum and positions your brand.",
      iconColor: "text-violet-600",
      bgColor: "bg-violet-50",
    },
    {
      icon: FiStar,
      title: "Special Events",
      slug: "special-events",
      description:
        "We transform unique ideas into exceptional experiences through events designed specifically to embody your vision.",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full py-10 sm:py-12 md:py-14 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#DC2626]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DC2626]/10 rounded-full mb-2">
            <div className="w-1.5 h-1.5 bg-[#DC2626] rounded-full animate-pulse" />
            <span className="text-[#DC2626] font-medium text-xs">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Everything You Need for
            <span className="block text-[#DC2626] mt-1">
              Exceptional Events
            </span>
          </h2>

          <p className="text-gray-600 text-xs max-w-2xl mx-auto">
            From task tracking to real-time coordination, our services keep your
            events connected, organized, and moving forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={`/services/${service.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
                  }}
                  className="group relative flex flex-col h-full cursor-pointer"
                >
                  <div className="relative bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200 flex flex-col h-full">
                    <div className="flex justify-center mb-3">
                      <div
                        className={`w-11 h-11 rounded-lg ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                      >
                        <Icon className={`w-5 h-5 ${service.iconColor}`} />
                      </div>
                    </div>

                    <h3 className="text-sm font-semibold text-gray-900 mb-2 text-center">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-xs leading-relaxed mb-3 text-center flex-grow line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-center text-[#DC2626] text-xs font-medium mt-auto pt-2 border-t border-gray-100">
                      <span className="mr-1">Learn more</span>
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button - Only show on home page */}
        {!isServicesPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-6 sm:mt-8"
          >
            <Link href="/services">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-5 py-2 rounded-full font-semibold text-xs hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>View All Services</span>
                <span className="text-base transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
