'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiClock, FiUsers, FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function CareersPage() {
  const positions = [
    {
      id: 'event-coordinator',
      title: 'Event Coordinator',
      department: 'Operations',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      description: 'We are looking for an experienced Event Coordinator to join our team...',
    },
    {
      id: 'creative-designer',
      title: 'Creative Designer',
      department: 'Design',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      description: 'Join our creative team to design stunning event concepts and visual experiences...',
    },
    {
      id: 'production-manager',
      title: 'Production Manager',
      department: 'Production',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      description: 'Manage technical production and ensure flawless execution of events...',
    },
  ];

  const hiringProcess = [
    {
      step: 1,
      title: 'Application',
      description: 'Submit your application through our portal or email',
      icon: FiBriefcase,
    },
    {
      step: 2,
      title: 'Review',
      description: 'Our HR team reviews your application and qualifications',
      icon: FiUsers,
    },
    {
      step: 3,
      title: 'Interview',
      description: 'Selected candidates are invited for interviews',
      icon: FiUsers,
    },
    {
      step: 4,
      title: 'Decision',
      description: 'We make our decision and extend an offer to the best candidate',
      icon: FiBriefcase,
    },
  ];

  const whyWorkWithUs = [
    {
      title: 'Creative Environment',
      description: 'Work in a dynamic, creative environment where your ideas matter',
      icon: FiBriefcase,
    },
    {
      title: 'Growth Opportunities',
      description: 'Continuous learning and professional development opportunities',
      icon: FiUsers,
    },
    {
      title: 'Competitive Benefits',
      description: 'Attractive salary packages and comprehensive benefits',
      icon: FiBriefcase,
    },
    {
      title: 'Impactful Work',
      description: 'Be part of creating unforgettable experiences that make a difference',
      icon: FiUsers,
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
              src="https://m.eyeofriyadh.com/news_images/2022/12/FMF(2).jpg"
              alt="Careers Background"
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
                Join Our <span className="text-gradient">Team</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
                Be part of creating unforgettable event experiences
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-2">
                  Why Work With Us
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Join a team that values creativity, innovation, and excellence
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {whyWorkWithUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#DC2626]" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-[#0A0A0A] mb-2">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Process Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-2">
                  Our Hiring Process
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Simple, transparent, and designed to find the best talent
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                {hiringProcess.map((process, index) => {
                  const Icon = process.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-lg transition-all text-center cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm mb-3 mx-auto">
                        {process.step}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 text-[#DC2626]" />
                      </div>
                      <h3 className="text-sm font-bold text-[#0A0A0A] mb-2">
                        {process.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-5 sm:mb-6 text-center">
                Open Positions
              </h2>
              <div className="space-y-4">
                {positions.map((position, index) => (
                  <Link key={position.id} href={`/careers/${position.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-[#DC2626] hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A] mb-2 group-hover:text-[#DC2626] transition-colors">
                            {position.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 mb-3">
                            {position.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-[#DC2626] group-hover:gap-3 transition-all">
                          <span className="text-xs sm:text-sm font-semibold">View Details</span>
                          <FiArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <FiBriefcase className="w-4 h-4 text-[#DC2626]" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <FiMapPin className="w-4 h-4 text-[#DC2626]" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <FiClock className="w-4 h-4 text-[#DC2626]" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="relative py-6 sm:py-8 md:py-10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://m.eyeofriyadh.com/news_images/2022/12/FMF(2).jpg"
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
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl p-5 sm:p-6 text-white"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                  <FiMessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                  Still Have Questions?
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 mb-4 max-w-xl mx-auto">
                  Our HR team is here to help. Feel free to reach out if you have any questions about our open positions or the application process.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#DC2626] text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm hover:bg-red-700 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Contact HR</span>
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
