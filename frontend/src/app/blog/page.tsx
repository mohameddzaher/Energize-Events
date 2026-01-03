'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiUser, FiArrowRight, FiMail } from 'react-icons/fi';

export default function BlogPage() {
  const blogPosts = [
    {
      title: '10 Tips for Planning a Successful Corporate Event',
      excerpt: 'Discover the essential strategies for organizing memorable corporate events that leave a lasting impression...',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      date: 'March 15, 2024',
      author: 'Energize Team',
      category: 'Corporate Events',
    },
    {
      title: 'The Future of Event Technology',
      excerpt: 'Explore how cutting-edge technology is transforming the events industry and creating new possibilities...',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      date: 'March 10, 2024',
      author: 'Energize Team',
      category: 'Technology',
    },
    {
      title: 'Creating Memorable Brand Experiences',
      excerpt: 'Learn how to design brand activations that engage audiences and create meaningful connections...',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
      date: 'March 5, 2024',
      author: 'Energize Team',
      category: 'Brand Activation',
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
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920"
              alt="Blog Background"
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
                Our <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
                Insights, tips, and stories from the world of event management
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
                  >
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-3 mb-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiUser className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <span className="inline-block px-2 py-1 bg-[#DC2626]/10 text-[#DC2626] text-xs rounded-full mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#0A0A0A] mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link href="#" className="inline-flex items-center gap-2 text-[#DC2626] text-xs font-medium group-hover:gap-3 transition-all cursor-pointer">
                        <span>Read More</span>
                        <FiArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stay Updated Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-[#DC2626]/10 flex items-center justify-center mx-auto mb-4">
                  <FiMail className="w-8 h-8 text-[#DC2626]" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-3">
                  Stay Updated
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
                  Subscribe to our blog to receive the latest insights, tips, and stories about event management directly in your inbox.
                </p>
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#DC2626] text-white px-6 py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-red-700 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Subscribe to Newsletter</span>
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
