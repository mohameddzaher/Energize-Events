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
    services: [
      { name: "Conferences & Seminars", href: "/services" },
      { name: "Commercial Exhibitions", href: "/services" },
      { name: "Event Activation", href: "/services" },
      { name: "Technology & Production", href: "/services" },
    ],
  };

  const socialLinks = [
    {
      icon: FiInstagram,
      href: "https://linktr.ee/EnergizeBusKSA",
      label: "Instagram",
    },
    {
      icon: FiFacebook,
      href: "https://linktr.ee/EnergizeBusKSA",
      label: "Facebook",
    },
    {
      icon: FiTwitter,
      href: "https://linktr.ee/EnergizeBusKSA",
      label: "Twitter",
    },
    {
      icon: FiLinkedin,
      href: "https://linktr.ee/EnergizeBusKSA",
      label: "LinkedIn",
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
                <div className="flex space-x-3 sm:space-x-4 mb-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    const socialColors: Record<string, string> = {
                      Instagram:
                        "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
                      Facebook: "hover:bg-blue-600",
                      Twitter: "hover:bg-sky-500",
                      LinkedIn: "hover:bg-blue-700",
                    };
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full bg-[#DC2626]/10 flex items-center justify-center transition-colors duration-300 cursor-pointer group ${
                          socialColors[social.label] || "hover:bg-[#DC2626]"
                        }`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-[#DC2626] group-hover:text-white transition-colors duration-300" />
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

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h4 className="text-sm font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
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
                    href="tel:+966538486109"
                    className="text-gray-400 hover:text-[#DC2626] transition-colors text-xs sm:text-sm cursor-pointer"
                  >
                    +966 53 848 6109
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
            className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Newsletter Section */}
              <div className="bg-gradient-to-br from-[#DC2626]/10 to-red-600/10 rounded-xl p-6 sm:p-8 border border-white/10">
                <h4 className="text-sm font-bold mb-3 text-white">
                  Stay Updated
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-4">
                  Subscribe to our newsletter for the latest event insights and
                  updates.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#DC2626] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#DC2626] text-white rounded-lg hover:bg-red-700 transition-colors text-xs sm:text-sm font-semibold cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Quick Links & Social */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-xl p-6 sm:p-8 border border-white/10">
                <h4 className="text-sm font-bold mb-4 text-white">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-[#DC2626] transition-colors text-xs sm:text-sm cursor-pointer"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/projects"
                    className="text-gray-400 hover:text-[#DC2626] transition-colors text-xs sm:text-sm cursor-pointer"
                  >
                    Our Work
                  </Link>
                  <Link
                    href="/clients"
                    className="text-gray-400 hover:text-[#DC2626] transition-colors text-xs sm:text-sm cursor-pointer"
                  >
                    Our Clients
                  </Link>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-[#DC2626] transition-colors text-xs sm:text-sm cursor-pointer"
                  >
                    Careers
                  </Link>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Follow Us</p>
                  <div className="flex gap-2">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      const socialColors: Record<string, string> = {
                        Instagram:
                          "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
                        Facebook: "hover:bg-blue-600",
                        Twitter: "hover:bg-sky-500",
                        LinkedIn: "hover:bg-blue-700",
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
                          <Icon className="w-4 h-4 text-[#DC2626] group-hover:text-white transition-colors duration-300" />
                        </a>
                      );
                    })}
                  </div>
                </div>
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
