"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import { BsSnapchat, BsThreads } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Our Work", href: "/projects" },
      { name: "Our Clients", href: "/clients" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  };

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
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden w-full">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#DC2626]/20 via-transparent to-red-600/20" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/images/EEM-white.png"
                    alt="Energize Events Logo"
                    width={100}
                    height={100}
                    className="rounded-lg w-45 h-14 object-contain cursor-pointer"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed text-xs sm:text-sm text-center lg:text-left">
                  Creating unforgettable experiences through innovative event
                  management solutions. Elevate your events with our expertise.
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-2.5 mb-3 justify-center lg:justify-start max-w-xs lg:max-w-none">
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
                <p className="text-xs text-gray-400 text-center lg:text-left">
                  <a
                    href="https://linktr.ee/EnergizeBusKSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC2626] hover:underline cursor-pointer"
                  >
                    Visit our Linktree
                  </a>
                </p>
              </motion.div>
            </div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h4 className="text-sm font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#DC2626] transition-colors text-xs sm:text-sm cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h4 className="text-sm font-bold mb-4">Working Hours</h4>
              <div className="space-y-3">
                <div className="flex flex-col items-center">
                  <p className="text-gray-400 text-xs sm:text-sm font-medium">
                    Sunday - Thursday
                  </p>
                  <p className="text-white text-xs sm:text-sm">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
                <div className="flex flex-col items-center pt-2 border-t border-white/10">
                  <p className="text-gray-400 text-xs sm:text-sm font-medium">
                    Friday - Saturday
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">Closed</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-block mt-3 px-4 py-2 bg-[#DC2626]/20 hover:bg-[#DC2626] text-white rounded-lg transition-colors text-xs sm:text-sm font-semibold cursor-pointer border border-[#DC2626]/30"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h4 className="text-sm font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 justify-center">
                  <FiMail className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:info@energize-sa.com"
                    className="text-gray-400 hover:text-[#DC2626] transition-colors text-xs sm:text-sm cursor-pointer"
                  >
                    info@energize-sa.com
                  </a>
                </li>
                <li className="flex items-start space-x-2 justify-center">
                  <FiPhone className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:0126825858"
                    className="text-gray-400 hover:text-[#DC2626] transition-colors text-xs sm:text-sm cursor-pointer"
                  >
                    0126825858
                  </a>
                </li>
                <li className="flex items-start space-x-2 justify-center">
                  <FiMapPin className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" />
                  <a
                    href="https://maps.app.goo.gl/QD5oynMuxxkYwqqP8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#DC2626] transition-colors text-xs sm:text-sm cursor-pointer"
                  >
                    Raihanat Al Jazirah, Jeddah
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Creative Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10"
          >
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#DC2626]/10 to-red-600/10 rounded-xl p-4 sm:p-6 border border-white/10 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-xs sm:text-sm font-bold mb-1 text-white">
                    Stay Updated
                  </h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs">
                    Get the latest event insights delivered to your inbox
                  </p>
                </div>
                <form className="flex gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 sm:flex-none sm:w-48 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-[10px] sm:text-xs focus:outline-none focus:border-[#DC2626] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#DC2626] text-white rounded-lg hover:bg-red-700 transition-colors text-[10px] sm:text-xs font-semibold cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-4 sm:pt-6 ">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-xs">
                © {currentYear} Energize Events. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
