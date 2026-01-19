'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { HiLightBulb, HiSparkles, HiTrendingUp } from 'react-icons/hi';
import { MdAutoAwesome, MdWorkspacePremium } from 'react-icons/md';
import Link from 'next/link';

export default function ClientsPage() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://assets.asharqbusiness.com/images/articles/1200x630/social-image/0218f5c9-416b-4a26-9b1d-b1255129c775.jpg"
              alt="Clients Background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]/80" />
          </div>
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3 sm:mb-4">
                Our <span className="text-gradient">Clients</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
                Their trust is our strength - Company logos and testimonials
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-4">
                  Building Trust Through Excellence
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We are proud to partner with leading companies and organizations across Saudi Arabia. 
                  Our commitment to delivering exceptional event experiences has earned us the trust of 
                  diverse clients, from government entities to multinational corporations. Each partnership 
                  is built on a foundation of professionalism, creativity, and unwavering dedication to 
                  exceeding expectations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Clients />

        {/* Why Choose Us Section */}
        <section className="relative py-6 sm:py-8 md:py-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-5 sm:mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#DC2626]/10 rounded-full mb-2">
                  <div className="w-1 h-1 bg-[#DC2626] rounded-full animate-pulse" />
                  <span className="text-[#DC2626] font-medium text-[10px]">
                    WHY CHOOSE US
                  </span>
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0A0A0A] mb-2">
                  Excellence in Every Detail
                </h2>
                <p className="text-[10px] sm:text-xs text-gray-600 max-w-xl mx-auto">
                  What sets us apart in the world of event management
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  {
                    title: "Innovation",
                    description: "Cutting-edge solutions and creative approaches",
                    icon: HiLightBulb,
                    color: "text-yellow-500",
                    bgColor: "bg-yellow-50",
                    borderColor: "border-yellow-200",
                  },
                  {
                    title: "Excellence",
                    description: "Uncompromising quality in every project",
                    icon: MdWorkspacePremium,
                    color: "text-[#DC2626]",
                    bgColor: "bg-red-50",
                    borderColor: "border-red-200",
                  },
                  {
                    title: "Creativity",
                    description: "Creative solutions that stand out",
                    icon: HiSparkles,
                    color: "text-purple-500",
                    bgColor: "bg-purple-50",
                    borderColor: "border-purple-200",
                  },
                  {
                    title: "Growth",
                    description: "Driving success and measurable results",
                    icon: HiTrendingUp,
                    color: "text-green-500",
                    bgColor: "bg-green-50",
                    borderColor: "border-green-200",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="relative group"
                    >
                      <div className={`relative bg-white rounded-lg p-4 border ${item.borderColor} hover:border-[#DC2626]/40 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden`}>
                        <div className="relative z-10">
                          {/* Icon */}
                          <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`w-5 h-5 ${item.color}`} />
                          </div>

                          {/* Title */}
                          <h3 className="text-xs sm:text-sm font-bold text-[#0A0A0A] mb-1.5">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Compact Stats */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-5 sm:mt-6 bg-gradient-to-r from-[#DC2626]/5 to-red-600/5 rounded-lg p-4 border border-[#DC2626]/10"
              >
                <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center">
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-[#DC2626] mb-0.5">100+</div>
                    <div className="text-[10px] text-gray-600">Clients</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-[#DC2626] mb-0.5">500+</div>
                    <div className="text-[10px] text-gray-600">Events</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-[#DC2626] mb-0.5">50+</div>
                    <div className="text-[10px] text-gray-600">Partners</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-[#DC2626] mb-0.5">10+</div>
                    <div className="text-[10px] text-gray-600">Years</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner With Us Section */}
        <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://assets.asharqbusiness.com/images/articles/1200x630/social-image/0218f5c9-416b-4a26-9b1d-b1255129c775.jpg"
              alt="CTA Background"
              fill
              className="object-cover"
              loading="lazy"
              sizes="100vw"
              quality={60}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/85 to-[#0A0A0A]/90" />
          </div>
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl p-8 sm:p-10 text-white"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
                  Partner With Us
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 mb-6 max-w-2xl mx-auto">
                  Join our growing list of satisfied clients and experience the difference that professional event management makes.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#DC2626] px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Become a Client</span>
                    <FiArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
