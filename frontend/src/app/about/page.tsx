'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MissionVision from '@/components/MissionVision';
import Founder from '@/components/Founder';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiTarget, FiUsers, FiAward, FiZap } from 'react-icons/fi';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring exceptional quality in all our events.',
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, building strong relationships based on trust.',
    },
    {
      icon: FiAward,
      title: 'Innovation',
      description: 'We embrace creativity and cutting-edge solutions to deliver unique event experiences.',
    },
    {
      icon: FiZap,
      title: 'Efficiency',
      description: 'We execute events smoothly and professionally, maximizing impact while optimizing resources.',
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
              alt="About Us Background"
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
                About <span className="text-gradient">Energize Events</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
                Specializing in organizing unforgettable events executed with smoothness and professionalism
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Energize Events specializes in organizing unforgettable events executed with smoothness and professionalism. 
                We provide comprehensive event management services from the conceptualization stage to execution, 
                ensuring that our clients&apos; events leave a lasting impact and exceed all expectations.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                We work closely with our clients to transform their visions into reality, creating experiences 
                that resonate with audiences and achieve exceptional results. Our team combines creativity, 
                strategic thinking, and meticulous attention to detail to deliver events that stand out.
              </p>
            </div>
          </div>
        </section>

        <MissionVision />
        <Founder />

        {/* Our Values Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-2">
                  Our Core Values
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  The principles that guide everything we do
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-lg transition-all text-center cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-[#DC2626]" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0A0A0A] mb-2">
                        {value.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920"
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
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                  Ready to Create Your Next Unforgettable Event?
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 mb-6 max-w-2xl mx-auto">
                  Let&apos;s work together to bring your vision to life. Contact us today to discuss your event needs.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#DC2626] px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all cursor-pointer"
                  >
                    Get in Touch
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
