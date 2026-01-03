"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const ContactMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const googleMapsUrl = "https://maps.app.goo.gl/QD5oynMuxxkYwqqP8";
  const locationAddress = "Raihanat Al Jazirah, Al Faisaliyyah, Jeddah 23442";

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "info@energize-sa.com",
      href: "mailto:info@energize-sa.com",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+966 53 848 6109",
      href: "tel:+966538486109",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: locationAddress,
      href: googleMapsUrl,
    },
    {
      icon: FiClock,
      title: "Working Hours",
      value: "Sun - Thu: 9:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-12 md:py-14 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#DC2626]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl" />
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
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Visit Us or <span className="text-[#DC2626]">Contact</span> Us
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help you create unforgettable events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-6 sm:mb-8">
          {/* Contact Info Cards */}
          <div className="space-y-3 sm:space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DC2626]/10 to-gray-100 flex items-center justify-center group-hover:from-[#DC2626]/20 group-hover:to-gray-200 transition-all duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-xs text-gray-600">{info.value}</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-[#DC2626] transition-colors">
                    →
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Map */}
          <motion.a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-64 sm:h-80 md:h-full min-h-[300px] rounded-xl overflow-hidden shadow-xl border border-gray-200 group cursor-pointer block"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200"
                alt="Map Location"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 to-transparent" />
            </div>

            {/* Map Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                    Our Location
                  </h3>
                  <p className="text-xs text-gray-600">{locationAddress}</p>
                </div>
              </div>
            </div>

            {/* Map Pin Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-8 h-8 bg-[#DC2626] rounded-full flex items-center justify-center shadow-lg"
              >
                <div className="w-3 h-3 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.a>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-red-900 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Send Us a Message</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
