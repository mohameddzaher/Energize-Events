"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import { BsSnapchat, BsThreads } from "react-icons/bs";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "info@energize-sa.com",
      href: "mailto:info@energize-sa.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "0126825858",
      href: "tel:0126825858",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Raihanat Al Jazirah, Jeddah",
      href: "https://maps.app.goo.gl/QD5oynMuxxkYwqqP8",
    },
    {
      icon: FiClock,
      label: "Working Hours",
      value: "Sun - Thu: 9:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/company/energize-your-business/posts/?feedView=all",
      label: "LinkedIn",
    },
    {
      icon: FiInstagram,
      href: "https://www.instagram.com/energizebusksa/",
      label: "Instagram",
    },
    {
      icon: FiTwitter,
      href: "https://x.com/EnergizeBusKSA",
      label: "Twitter",
    },
    {
      icon: FiFacebook,
      href: "https://www.facebook.com/EnergizeBusKSA",
      label: "Facebook",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@EnergizeBusKSA",
      label: "YouTube",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@energizebusksa",
      label: "TikTok",
    },
    {
      icon: BsSnapchat,
      href: "https://www.snapchat.com/add/energizebusksa",
      label: "Snapchat",
    },
    {
      icon: BsThreads,
      href: "https://www.threads.net/@energizebusksa",
      label: "Threads",
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
              src="https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1920"
              alt="Contact Background"
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
                Contact <span className="text-gradient">Us</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
                Start your journey with us - Book your appointment for services
                or consultations
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0A0A0A] mb-4">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#DC2626] focus:outline-none transition-all text-xs sm:text-sm cursor-text"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#DC2626] focus:outline-none transition-all text-xs sm:text-sm cursor-text"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#DC2626] focus:outline-none transition-all text-xs sm:text-sm cursor-text"
                    />
                  </div>
                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      aria-label="Select Subject"
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#DC2626] focus:outline-none transition-all text-xs sm:text-sm cursor-pointer"
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services</option>
                      <option value="quote">Request Quote</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#DC2626] focus:outline-none transition-all resize-none text-xs sm:text-sm cursor-text"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-900 text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-all cursor-pointer"
                  >
                    <span>{submitted ? "Message Sent!" : "Send Message"}</span>
                    <FiSend className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0A0A0A] mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4 mb-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all group cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-[#DC2626]/10 rounded-xl flex items-center justify-center group-hover:bg-[#DC2626] transition-colors flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#DC2626] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#0A0A0A] mb-1 text-xs sm:text-sm">
                            {info.label}
                          </p>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-base font-bold text-[#0A0A0A] mb-3">
                    Follow Us
                  </h3>
                  <div className="grid grid-cols-4 gap-3 max-w-xs">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      const socialColors: Record<string, string> = {
                        Instagram:
                          "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
                        Facebook: "hover:bg-blue-600",
                        Twitter: "hover:bg-sky-500",
                        LinkedIn: "hover:bg-blue-700",
                        YouTube: "hover:bg-red-600",
                        TikTok: "hover:bg-black",
                        Snapchat: "hover:bg-yellow-400",
                        Threads: "hover:bg-black",
                      };
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center transition-colors duration-300 cursor-pointer group ${
                            socialColors[social.label] || "hover:bg-[#DC2626]"
                          }`}
                          aria-label={social.label}
                        >
                          <Icon className="w-3.5 h-3.5 text-[#DC2626] group-hover:text-white transition-colors duration-300" />
                        </a>
                      );
                    })}
                  </div>
                  <p className="mt-3 text-gray-600 text-xs">
                    <a
                      href="https://linktr.ee/EnergizeBusKSA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline cursor-pointer"
                    >
                      Visit our Linktree
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative py-10 sm:py-12 md:py-14 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-2">
                  Our Location
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Visit us at our office in Jeddah
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/QD5oynMuxxkYwqqP8"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer mb-4"
              >
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200"
                    alt="Office Location"
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
                      <p className="text-xs text-gray-600">
                        Raihanat Al Jazirah, Al Faisaliyyah, Jeddah 23442
                      </p>
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
              </a>
              <p className="text-center text-xs sm:text-sm text-gray-600">
                We have multiple branches across multiple countries
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
