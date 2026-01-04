"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Our Work", href: "/projects" },
      { name: "Our Clients", href: "/clients" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    []
  );

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    const timer = setTimeout(() => setIsMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg  border-gray-200/50"
          : "bg-gradient-to-r from-[#DC2626]/10 via-black to-[#DC2626]/10 backdrop-blur-md  border-white/10"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-12">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo (Left) */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={
                  isScrolled ? "/images/EEM.png" : "/images/EEM-white.png"
                }
                alt="Energize Events Logo"
                width={72}
                height={72}
                className="w-18 h-16 md:w-34 md:h-18 object-contain transition-all duration-500"
                priority
                fetchPriority="high"
              />
            </Link>
          </div>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-3 xl:gap-4">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-md transition-all duration-200 text-[10px] sm:text-[12px] ${
                      active ? "font-bold" : "font-medium"
                    } ${
                      isScrolled
                        ? active
                          ? "text-[#DC2626] bg-[#DC2626]/10"
                          : "text-gray-700 hover:text-[#DC2626] hover:bg-gray-100"
                        : active
                        ? "text-white bg-white/20"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={`hidden lg:inline-flex px-4 py-1.5 rounded-md transition-all duration-300 text-[10px] sm:text-[11px] font-semibold shadow-sm hover:shadow-md ${
                isScrolled
                  ? "bg-[#DC2626] text-white hover:bg-red-700"
                  : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30"
              }`}
            >
              Contact
            </Link>

            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden rounded-md mt-2 mb-4 p-4 bg-white border border-gray-200 shadow-lg"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-2.5 rounded-md transition-all duration-200 text-[10px] sm:text-[11px] text-center ${
                        active ? "font-bold" : "font-medium"
                      } ${
                        active
                          ? "text-[#DC2626] bg-[#DC2626]/10"
                          : "text-gray-700 hover:text-[#DC2626] hover:bg-gray-100"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <div className="pt-2 mt-2 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full py-2.5 font-semibold text-[10px] sm:text-[11px] rounded-md hover:shadow-md transition-all duration-300 text-center block bg-[#DC2626] text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
