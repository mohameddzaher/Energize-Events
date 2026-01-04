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
import {
  FiCalendar,
  FiBriefcase,
  FiZap,
  FiLayers,
  FiMonitor,
  FiLayout,
  FiCoffee,
  FiMap,
  FiMusic,
  FiTarget,
  FiStar,
} from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";

import { IconType } from "react-icons";

const serviceDetails: Record<string, {
  title: string;
  category?: string;
  icon?: IconType;
  description: string;
  longDescription: string;
  features?: string[];
  images: string[];
  services: string[];
  iconColor?: string;
  bgColor?: string;
}> = {
  "conferences-seminars": {
    title: "Conferences & Seminars",
    icon: FiCalendar,
    description:
      "We offer integrated conferences and seminars with high smoothness and excellence through creative thinking that inspires attendees and effectively develops engagement.",
    longDescription:
      "Our comprehensive conference and seminar services cover everything from initial planning to post-event analysis. We specialize in creating engaging experiences that combine educational content with interactive elements, ensuring maximum attendee participation and knowledge retention.",
    services: [
      "Event planning and coordination",
      "Speaker management and logistics",
      "Venue selection and setup",
      "Audio-visual production",
      "Registration and attendee management",
      "Networking session facilitation",
      "Post-event reporting and analytics",
    ],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  "commercial-exhibitions": {
    title: "Commercial Exhibitions",
    icon: FiBriefcase,
    description:
      "Organizing world-class commercial exhibitions aimed at showcasing brands and products and highlighting the latest innovations.",
    longDescription:
      "We create impactful commercial exhibitions that bring brands to life. Our team designs immersive experiences that effectively showcase products, generate leads, and create lasting brand impressions.",
    services: [
      "Exhibition design and layout",
      "Booth construction and setup",
      "Brand activation zones",
      "Product demonstration areas",
      "Visitor engagement solutions",
      "Lead capture systems",
      "Post-exhibition analytics",
    ],
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  "event-activation": {
    title: "Event Activation",
    icon: FiZap,
    description:
      "We create unique and unforgettable brand experiences aimed at generating positive interaction and effectively stimulating audience participation.",
    longDescription:
      "Our event activation services transform brand experiences into memorable moments. We design interactive activations that engage audiences, create social media buzz, and build lasting brand connections.",
    services: [
      "Brand activation strategy",
      "Interactive installations",
      "Social media integration",
      "Live demonstrations",
      "Sampling and trials",
      "Photo and video booths",
      "Real-time engagement tracking",
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGV2ZW50fGVufDB8fDB8fHww",
    ],
    iconColor: "text-red-600",
    bgColor: "bg-red-50",
  },
  "event-design-planning": {
    title: "Event Design & Planning",
    icon: FiLayers,
    description:
      "We excel in designing unique event concepts that reflect the client's vision and identity, focusing on innovation and excellence at every stage.",
    longDescription:
      "From concept to execution, our design and planning team creates cohesive event experiences. We combine creative vision with strategic planning to deliver events that exceed expectations.",
    services: [
      "Concept development",
      "Theme design and branding",
      "Timeline and schedule planning",
      "Budget management",
      "Vendor coordination",
      "Risk assessment",
      "Contingency planning",
    ],
    images: [
      "https://images.unsplash.com/photo-1561489401-fc2876ced162?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  "technology-production": {
    title: "Technology & Production",
    icon: FiMonitor,
    description:
      "We provide advanced technological and production solutions that create a qualitative shift in every event through the latest equipment and systems.",
    longDescription:
      "Our technology and production services leverage cutting-edge equipment and systems to create immersive experiences. We handle all technical aspects from audio-visual setup to live streaming.",
    services: [
      "Audio-visual systems",
      "Lighting design and setup",
      "LED screens and displays",
      "Live streaming services",
      "Sound engineering",
      "Technical support",
      "Equipment rental",
    ],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1200",
    ],
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  "stage-design": {
    title: "Stage Design",
    icon: FiLayout,
    description:
      "We create immersive and visually stunning stages that embody your vision and tell your story in all its details.",
    longDescription:
      "Our stage design team creates captivating environments that serve as the perfect backdrop for your event. We combine aesthetics with functionality to deliver stages that wow audiences.",
    services: [
      "Stage conceptualization",
      "3D design and visualization",
      "Set construction",
      "Backdrop and scenery",
      "Props and decorations",
      "Stage lighting design",
      "Installation and teardown",
    ],
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
    ],
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  "hospitality-catering": {
    title: "Hospitality & Catering",
    icon: FiCoffee,
    description:
      "We provide elegant hospitality and catering services aimed at impressing guests and enhancing their experience.",
    longDescription:
      "Our hospitality and catering services ensure your guests are well taken care of. From gourmet menus to attentive service, we create dining experiences that complement your event perfectly.",
    services: [
      "Menu planning and design",
      "Gourmet catering",
      "Beverage service",
      "Wait staff coordination",
      "Special dietary accommodations",
      "Table settings and decor",
      "Cleanup and breakdown",
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1200",
    ],
    iconColor: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  "event-planning": {
    title: "Event Planning",
    icon: FiMap,
    description:
      "We provide comprehensive and integrated planning services covering all stages of the event from start to finish.",
    longDescription:
      "Our comprehensive event planning services cover every detail from initial concept to final execution. We manage timelines, budgets, vendors, and logistics to ensure seamless events.",
    services: [
      "Full event coordination",
      "Timeline management",
      "Budget planning",
      "Vendor sourcing",
      "Logistics coordination",
      "On-site management",
      "Post-event evaluation",
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    ],
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  "entertainment-events": {
    title: "Entertainment Events",
    icon: FiMusic,
    description:
      "We excel in coordinating and organizing exciting entertainment experiences that captivate audiences and keep them engaged.",
    longDescription:
      "Our entertainment events combine music, performance, and interactive experiences to create unforgettable moments. We coordinate artists, manage production, and ensure smooth execution.",
    services: [
      "Artist booking and management",
      "Performance coordination",
      "Sound and lighting",
      "Stage management",
      "Crowd management",
      "Security coordination",
      "Media coverage",
    ],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1200",
    ],
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  "product-launches": {
    title: "Product Launches",
    icon: FiTarget,
    description:
      "We execute product launch campaigns in an innovative and effective style that generates momentum and positions your brand.",
    longDescription:
      "Our product launch services create buzz and excitement around new products. We design launch events that generate media attention, engage target audiences, and drive sales.",
    services: [
      "Launch strategy development",
      "Media event coordination",
      "Press conference management",
      "Product demonstration",
      "Media kit preparation",
      "Social media integration",
      "Post-launch follow-up",
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    ],
    iconColor: "text-violet-600",
    bgColor: "bg-violet-50",
  },
  "special-events": {
    title: "Special Events",
    icon: FiStar,
    description:
      "We transform unique ideas into exceptional experiences through events designed specifically to embody your vision.",
    longDescription:
      "Our special events service handles unique and custom occasions. Whether it's a milestone celebration, corporate gathering, or exclusive affair, we bring your vision to life with creativity and precision.",
    services: [
      "Custom event design",
      "Theme development",
      "Unique venue selection",
      "Specialized entertainment",
      "Exclusive catering",
      "Personalized experiences",
      "Memorable moments creation",
    ],
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1478146896981-7e959b4e4a0a?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
    ],
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="App">
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
            <button
              onClick={() => router.push("/services")}
              className="text-[#DC2626] hover:underline"
            >
              Back to Services
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
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920"
              alt="Service Background"
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
              <BackButton href="/services" />
              <div className="flex-1"></div>
            </div>
            <div className="text-center mb-8">
              {service.icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#DC2626]/10 to-red-600/10 mb-4">
                  <service.icon className={`w-8 h-8 ${service.iconColor || 'text-[#DC2626]'}`} />
                </div>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                {service.title}
              </h1>
              <p className="text-sm text-gray-200 max-w-2xl mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
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
              className="mb-8"
            >
              {service.images.map((img: string, index: number) => (
                <SwiperSlide key={index}>
                  <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={img}
                      alt={`${service.title} ${index + 1}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 text-center">
                About This Service
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-8 text-center">
                {service.longDescription}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {service.services.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#DC2626] rounded-full" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Contact us today to discuss how we can bring your vision to life
              </p>
              <motion.button
                onClick={() => router.push("/contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#DC2626] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-red-700 transition-all shadow-md"
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
