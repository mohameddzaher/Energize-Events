'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
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
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920"
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

        {/* Testimonials Section - Horizontal Cards */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-2">
                  Their Experience with Us
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">Client Reviews</p>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {[
                  {
                    name: 'Ahmed Al-Saud',
                    company: 'Saudi Airlines',
                    rating: 5,
                    text: 'Energize Events delivered an exceptional experience that exceeded all our expectations. Their attention to detail and creative approach made our event unforgettable.',
                  },
                  {
                    name: 'Sarah Al-Mansouri',
                    company: 'PIF',
                    rating: 5,
                    text: 'Working with Energize Events was a pleasure. They understood our vision and brought it to life with professionalism and innovation.',
                  },
                  {
                    name: 'Mohammed Al-Rashid',
                    company: 'Samsung',
                    rating: 5,
                    text: 'The team at Energize Events is truly exceptional. They managed every aspect of our event flawlessly, from planning to execution.',
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#DC2626] to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 mb-3 text-xs sm:text-sm leading-relaxed">
                          &quot;{testimonial.text}&quot;
                        </p>
                        <div>
                          <p className="font-semibold text-[#0A0A0A] text-xs sm:text-sm">{testimonial.name}</p>
                          <p className="text-xs text-gray-600">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner With Us Section */}
        <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920"
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
                    className="bg-white text-[#DC2626] px-6 py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all cursor-pointer inline-flex items-center gap-2"
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
