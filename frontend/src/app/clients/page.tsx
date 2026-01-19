'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight, FiUsers, FiCalendar, FiAward } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
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

        {/* Partnership Stats Section */}
        <section className="relative py-10 sm:py-12 md:py-14 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#DC2626] to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-500 to-transparent rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DC2626]/10 rounded-full mb-3">
                  <div className="w-1.5 h-1.5 bg-[#DC2626] rounded-full animate-pulse" />
                  <span className="text-[#DC2626] font-medium text-xs">
                    OUR PARTNERSHIPS
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-3">
                  Building Lasting Relationships
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent mx-auto mb-3" />
                <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                  Trusted by industry leaders across various sectors
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  {
                    number: "100+",
                    label: "Satisfied Clients",
                    icon: FiUsers,
                    color: "from-blue-500/10 to-blue-600/10",
                    iconColor: "text-blue-600",
                  },
                  {
                    number: "500+",
                    label: "Events Delivered",
                    icon: FiCalendar,
                    color: "from-green-500/10 to-green-600/10",
                    iconColor: "text-green-600",
                  },
                  {
                    number: "50+",
                    label: "Industry Partners",
                    icon: FaHandshake,
                    color: "from-purple-500/10 to-purple-600/10",
                    iconColor: "text-purple-600",
                  },
                  {
                    number: "10+",
                    label: "Years of Excellence",
                    icon: FiAward,
                    color: "from-[#DC2626]/10 to-red-600/10",
                    iconColor: "text-[#DC2626]",
                  },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-[#DC2626]/30 hover:shadow-xl transition-all text-center group"
                    >
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
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
