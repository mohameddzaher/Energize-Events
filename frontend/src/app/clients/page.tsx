'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiStar } from 'react-icons/fi';
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

        {/* Success Stories Section */}
        <section className="relative py-10 sm:py-12 md:py-14 bg-white overflow-hidden">
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DC2626]/10 rounded-full mb-3">
                  <div className="w-1.5 h-1.5 bg-[#DC2626] rounded-full animate-pulse" />
                  <span className="text-[#DC2626] font-medium text-xs">
                    SUCCESS STORIES
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-3">
                  The Impact We Create
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                  Real results from real partnerships - See how we've transformed events into unforgettable experiences
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Corporate Excellence",
                    description: "Delivered 200+ corporate events for leading organizations, achieving 98% client satisfaction rate",
                    metric: "200+",
                    metricLabel: "Corporate Events",
                    icon: FiCheckCircle,
                    gradient: "from-blue-500 to-blue-600",
                  },
                  {
                    title: "Government Partnerships",
                    description: "Successfully managed high-profile government conferences and exhibitions across the Kingdom",
                    metric: "50+",
                    metricLabel: "Government Events",
                    icon: FiTrendingUp,
                    gradient: "from-green-500 to-green-600",
                  },
                  {
                    title: "International Recognition",
                    description: "Award-winning event management services recognized by industry leaders and media",
                    metric: "10+",
                    metricLabel: "Awards & Recognition",
                    icon: FiStar,
                    gradient: "from-[#DC2626] to-red-600",
                  },
                ].map((story, index) => {
                  const Icon = story.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-[#DC2626]/30 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden">
                        {/* Gradient Background Effect */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${story.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        <div className="relative z-10">
                          {/* Icon */}
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${story.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>

                          {/* Metric */}
                          <div className="mb-3">
                            <div className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-1">
                              {story.metric}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 font-medium">
                              {story.metricLabel}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A] mb-3">
                            {story.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {story.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-10 sm:mt-12 bg-gradient-to-r from-[#DC2626]/5 via-red-600/5 to-[#DC2626]/5 rounded-2xl p-6 sm:p-8 border border-[#DC2626]/10"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#DC2626] mb-1">100+</div>
                    <div className="text-xs text-gray-600">Satisfied Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#DC2626] mb-1">500+</div>
                    <div className="text-xs text-gray-600">Events Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#DC2626] mb-1">50+</div>
                    <div className="text-xs text-gray-600">Industry Partners</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#DC2626] mb-1">10+</div>
                    <div className="text-xs text-gray-600">Years of Excellence</div>
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
