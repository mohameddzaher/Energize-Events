"use client";

import { useEffect, useMemo, useState } from "react";
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

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-12">
        <div className="flex items-center justify-between h-12 md:h-15">
          {/* Logo (Left) */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/EEM.png"
                alt="Energize Events Logo"
                width={72}
                height={72}
                className="w-16 h-16 md:w-34 md:h-18 object-contain"
                priority
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
                    className={`px-3 py-1.5 rounded-lg transition-all duration-200 text-xs ${
                      active ? "font-bold" : "font-medium"
                    } ${
                      isScrolled
                        ? active
                          ? "text-[#DC2626] bg-[#DC2626]/10"
                          : "text-gray-700 hover:text-[#DC2626] hover:bg-gray-100"
                        : active
                        ? "text-[#DC2626] bg-[#DC2626]/10"
                        : "text-gray-700 hover:text-[#DC2626] hover:bg-gray-100"
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
              className={`hidden lg:inline-flex px-4 py-1.5 rounded-lg transition-all duration-300 text-xs font-semibold ${
                isScrolled
                  ? "bg-[#DC2626] text-white hover:bg-red-700"
                  : "bg-[#DC2626] text-white hover:bg-red-700"
              }`}
            >
              Contact
            </Link>

            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-gray-700 hover:bg-gray-100"
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
              className="lg:hidden rounded-lg mt-2 mb-4 p-4 bg-white border border-gray-200 shadow-lg"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-2.5 rounded-lg transition-all duration-200 text-xs text-center ${
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
                    className="w-full py-2.5 font-semibold text-xs rounded-lg hover:shadow-lg transition-all duration-300 text-center block bg-[#DC2626] text-white"
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
