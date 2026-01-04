"use client";

import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import BackButton from "@/components/BackButton";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { FiUsers, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";

const projectDetails: Record<string, {
  title: string;
  category: string;
  client: string;
  date: string;
  location: string;
  attendees: string;
  description: string;
  longDescription: string;
  achievements: string[];
  images: string[];
}> = {
  "tech-conference-2024": {
    title: "Tech Conference 2024",
    category: "Conference",
    client: "Tech Corporation",
    date: "March 2024",
    location: "Riyadh, Saudi Arabia",
    attendees: "5000+",
    description:
      "A large-scale technology conference featuring industry leaders, innovative workshops, and networking opportunities.",
    longDescription:
      "We successfully organized a comprehensive technology conference that brought together 5000+ professionals from across the region. The event featured 50+ speakers, 100+ sessions, and multiple networking zones. Our team managed everything from venue setup to live streaming, ensuring a seamless experience for both in-person and virtual attendees.",
    achievements: [
      "5000+ attendees across 3 days",
      "50+ industry-leading speakers",
      "100+ educational sessions",
      "95% attendee satisfaction rate",
      "1M+ social media impressions",
    ],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
    ],
  },
  "corporate-gala-night": {
    title: "Corporate Gala Night",
    category: "Corporate Event",
    client: "Global Industries",
    date: "February 2024",
    location: "Jeddah, Saudi Arabia",
    attendees: "500+",
    description:
      "Elegant corporate gala with live entertainment and awards ceremony.",
    longDescription:
      "An exclusive corporate gala that celebrated company achievements and honored outstanding employees. The event featured elegant dining, live performances, and an awards ceremony. We created a sophisticated atmosphere with custom lighting, stage design, and entertainment that left a lasting impression on all attendees.",
    achievements: [
      "500+ VIP guests",
      "Live entertainment performances",
      "Awards ceremony coordination",
      "Custom stage and lighting design",
      "100% client satisfaction",
    ],
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  "music-festival": {
    title: "Music Festival",
    category: "Festival",
    client: "Entertainment Group",
    date: "January 2024",
    location: "Riyadh, Saudi Arabia",
    attendees: "20,000+",
    description: "Multi-day outdoor music festival with international artists.",
    longDescription:
      "A spectacular 3-day music festival that brought together 20,000+ music lovers. We coordinated 30+ international and local artists across multiple stages, managed crowd control, security, and all technical aspects. The festival featured food vendors, merchandise areas, and interactive experiences that created an unforgettable weekend.",
    achievements: [
      "20,000+ attendees over 3 days",
      "30+ international and local artists",
      "Multiple stage coordination",
      "Zero safety incidents",
      "Extensive media coverage",
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  "product-launch": {
    title: "Product Launch",
    category: "Launch Event",
    client: "Innovation Labs",
    date: "December 2023",
    location: "Riyadh, Saudi Arabia",
    attendees: "300+",
    description: "Innovative product launch with interactive demonstrations.",
    longDescription:
      "A cutting-edge product launch event that generated significant buzz in the tech industry. We created an immersive experience with interactive demonstrations, VR experiences, and live product showcases. The event successfully positioned the product in the market and generated extensive media coverage.",
    achievements: [
      "300+ media and industry professionals",
      "1M+ social media impressions",
      "500+ media coverage articles",
      "Interactive VR demonstrations",
      "Successful product positioning",
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
    ],
  },
  "wedding-celebration": {
    title: "Wedding Celebration",
    category: "Wedding",
    client: "Private Client",
    date: "November 2023",
    location: "Riyadh, Saudi Arabia",
    attendees: "300+",
    description: "Luxury wedding celebration with custom design elements.",
    longDescription:
      "An elegant and luxurious wedding celebration that reflected the couple's unique style and vision. We designed custom decorations, coordinated entertainment, and managed all aspects of the celebration to create a truly memorable day. Every detail was carefully planned and executed to perfection.",
    achievements: [
      "300+ guests",
      "Custom design and decorations",
      "Live entertainment coordination",
      "Gourmet catering service",
      "Perfect execution of vision",
    ],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1200",
    ],
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="App">
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-xl font-bold mb-4">Project Not Found</h1>
            <button
              onClick={() => router.push("/projects")}
              className="text-[#DC2626] hover:underline text-sm"
            >
              Back to Projects
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920"
              alt="Project Background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]/80" />
          </div>
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="flex items-start justify-between mb-6">
              <BackButton href="/projects" />
              <div className="flex-1"></div>
            </div>
            <div className="text-center mb-6">
              <span className="text-[#DC2626] font-semibold text-xs mb-2 block">
                {project.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                {project.title}
              </h1>
              <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 sm:mb-8">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <FiUsers className="w-5 h-5 text-[#DC2626] mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">
                    {project.attendees}
                  </div>
                  <div className="text-xs text-gray-600">Attendees</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <FiCalendar className="w-5 h-5 text-[#DC2626] mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-900">
                    {project.date}
                  </div>
                  <div className="text-xs text-gray-600">Date</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <FiMapPin className="w-5 h-5 text-[#DC2626] mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-900">
                    {project.location}
                  </div>
                  <div className="text-xs text-gray-600">Location</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <FiAward className="w-5 h-5 text-[#DC2626] mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-900">
                    {project.client}
                  </div>
                  <div className="text-xs text-gray-600">Client</div>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-3">
                  Project Overview
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-4">
                  Key Achievements
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.achievements.map(
                    (achievement: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
                      >
                        <div className="w-2 h-2 bg-[#DC2626] rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {achievement}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-4 sm:mb-6 text-center">
                Project Gallery
              </h2>
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                loop={true}
              >
                {project.images.map((img: string, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                      <Image
                        src={img}
                        alt={`${project.title} ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-3">
                Ready to Create Your Next Event?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-5">
                Let us bring your vision to life with our expertise and
                creativity
              </p>
              <motion.button
                onClick={() => router.push("/contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#DC2626] text-white px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm hover:bg-red-700 transition-all shadow-md"
              >
                Contact Us →
              </motion.button>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
