"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-12 md:py-14 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920"
          alt="Newsletter Background"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/80 via-[#0A0A0A]/75 to-[#0A0A0A]/80" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
              <FiMail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Stay Connected
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Subscribe to our newsletter and stay updated with the latest events,
            insights, and exclusive offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-full bg-white/95 backdrop-blur-sm border-2 border-white/30 text-[#0A0A0A] placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-white transition-all text-xs sm:text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#DC2626] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-red-700 transition-all whitespace-nowrap text-xs sm:text-sm cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {submitted ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </div>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-white/90 text-xs font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Thank you for subscribing! 🎉
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
