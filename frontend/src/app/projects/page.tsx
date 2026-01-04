"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import ProjectVideos from "@/components/ProjectVideos";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920"
              alt="Projects Background"
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-2 sm:mb-3">
                Our <span className="text-gradient">Work</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-1">
                PROJECTS
              </p>
              <p className="text-xs text-gray-400">(PHOTOS & VIDEOS)</p>
            </div>
          </div>
        </section>

        <Projects />

        <ProjectVideos />

        {/* CTA Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-3">
                  Ready to Create Your Next Project?
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
                  Let&apos;s work together to bring your vision to life and
                  create an unforgettable experience.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#DC2626] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-red-700 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Start Your Project</span>
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
