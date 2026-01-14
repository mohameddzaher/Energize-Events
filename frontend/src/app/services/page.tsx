'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function ServicesPage() {
  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We start by understanding your vision, goals, and requirements.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team creates a detailed plan tailored to your event.',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'We bring your event to life with precision and professionalism.',
    },
    {
      step: '04',
      title: 'Follow-up',
      description: 'We ensure everything runs smoothly and gather feedback for future events.',
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
              src="https://www.aleqt.com/sites/default/files/rbitem/2024/10/29/2424682-1143776767.jpg"
              alt="Services Background"
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
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
                Comprehensive event management solutions tailored to your needs
              </p>
            </div>
          </div>
        </section>

        <Services />

        {/* How We Work Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-2">
                  How We Work
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Our proven process ensures successful events from start to finish
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="text-[#DC2626] font-bold text-2xl mb-3">{item.step}</div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0A0A0A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://saudiict.com/wp-content/uploads/2022/10/Euromoney-Saudi-Arabia-Conference-2022_ssict_1200_800-1200x640.webp"
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
                  Ready to Start Your Event?
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 mb-6 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help make your next event unforgettable.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#DC2626] px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Get Started</span>
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
