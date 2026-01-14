'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import BackButton from '@/components/BackButton';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiClock, FiMail, FiSend, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const jobDetails: Record<string, any> = {
  'event-coordinator': {
    title: 'Event Coordinator',
    department: 'Operations',
    location: 'Riyadh, Saudi Arabia',
    type: 'Full-time',
    experience: '2-5 years',
    description: 'We are looking for an experienced Event Coordinator to join our team and help us deliver exceptional events.',
    responsibilities: [
      'Plan and coordinate events from conception to completion',
      'Liaise with clients to identify their needs and ensure customer satisfaction',
      'Manage event budgets and ensure cost-effectiveness',
      'Coordinate with vendors and suppliers',
      'Oversee event setup and breakdown',
      'Handle event logistics and troubleshooting',
    ],
    requirements: [
      'Bachelor\'s degree in Event Management or related field',
      '2-5 years of experience in event coordination',
      'Strong organizational and multitasking skills',
      'Excellent communication and interpersonal skills',
      'Ability to work under pressure and meet deadlines',
      'Proficiency in event management software',
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance',
      'Professional development opportunities',
      'Flexible working hours',
      'Team building activities',
    ],
  },
  'creative-designer': {
    title: 'Creative Designer',
    department: 'Design',
    location: 'Riyadh, Saudi Arabia',
    type: 'Full-time',
    experience: '3-7 years',
    description: 'Join our creative team to design stunning event concepts and visual experiences that captivate audiences.',
    responsibilities: [
      'Create innovative design concepts for events',
      'Develop visual identities and branding materials',
      'Design event layouts and floor plans',
      'Create digital and print marketing materials',
      'Collaborate with production teams',
      'Present design concepts to clients',
    ],
    requirements: [
      'Bachelor\'s degree in Graphic Design or related field',
      '3-7 years of experience in event design',
      'Proficiency in Adobe Creative Suite',
      'Strong portfolio showcasing creative work',
      'Excellent visual communication skills',
      'Ability to work in a fast-paced environment',
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance',
      'Creative freedom and autonomy',
      'Access to latest design tools',
      'Professional development opportunities',
    ],
  },
  'production-manager': {
    title: 'Production Manager',
    department: 'Production',
    location: 'Riyadh, Saudi Arabia',
    type: 'Full-time',
    experience: '5-10 years',
    description: 'Manage technical production and ensure flawless execution of events with attention to detail and precision.',
    responsibilities: [
      'Oversee all technical aspects of event production',
      'Manage production teams and coordinate workflows',
      'Ensure quality control and safety standards',
      'Manage production budgets and timelines',
      'Coordinate with vendors and technical suppliers',
      'Troubleshoot technical issues during events',
    ],
    requirements: [
      'Bachelor\'s degree in Production Management or related field',
      '5-10 years of experience in event production',
      'Strong technical knowledge of AV equipment',
      'Excellent leadership and team management skills',
      'Ability to work under pressure',
      'Strong problem-solving abilities',
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance',
      'Leadership development opportunities',
      'Access to state-of-the-art equipment',
      'Professional networking opportunities',
    ],
  },
};

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const job = jobDetails[slug];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!job) {
    return (
      <div className="App">
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
            <button
              onClick={() => router.push('/careers')}
              className="bg-[#DC2626] text-white px-6 py-2 rounded-xl"
            >
              Back to Careers
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', resume: '', coverLetter: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://m.eyeofriyadh.com/news_images/2022/12/FMF(2).jpg"
              alt="Job Background"
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
              <BackButton href="/careers" />
              <div className="flex-1"></div>
            </div>
            <div className="text-center">
              <span className="text-[#DC2626] font-semibold text-xs mb-2 block">
                {job.department}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                {job.title}
              </h1>
              <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                {job.description}
              </p>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-4">Job Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-sm">
                    <FiBriefcase className="w-5 h-5 text-[#DC2626]" />
                    <div>
                      <span className="text-gray-500 text-xs">Department</span>
                      <p className="text-gray-900 font-medium">{job.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FiMapPin className="w-5 h-5 text-[#DC2626]" />
                    <div>
                      <span className="text-gray-500 text-xs">Location</span>
                      <p className="text-gray-900 font-medium">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FiClock className="w-5 h-5 text-[#DC2626]" />
                    <div>
                      <span className="text-gray-500 text-xs">Job Type</span>
                      <p className="text-gray-900 font-medium">{job.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FiBriefcase className="w-5 h-5 text-[#DC2626]" />
                    <div>
                      <span className="text-gray-500 text-xs">Experience Required</span>
                      <p className="text-gray-900 font-medium">{job.experience}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">Responsibilities</h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#DC2626] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">Requirements</h2>
                  <ul className="space-y-2">
                    {job.requirements.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#DC2626] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">Benefits</h2>
                  <ul className="space-y-2">
                    {job.benefits.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#DC2626] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] mb-2">
                  Apply for This Position
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  Fill out the form below or send your application directly to our HR team
                </p>
                <motion.a
                  href={`mailto:HR@energize-sa.com?subject=Application for ${job.title}&body=Dear HR Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.%0D%0A%0D%0APlease find my application attached.%0D%0A%0D%0ABest regards`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white border-2 border-[#DC2626] text-[#DC2626] px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm hover:bg-[#DC2626] hover:text-white transition-all cursor-pointer mb-6"
                >
                  <FiMail className="w-4 h-4" />
                  <span>Send via Email to Info@energize-sa.com</span>
                </motion.a>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
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
                      placeholder="Email Address"
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
                      placeholder="Phone Number"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#DC2626] focus:outline-none transition-all text-xs sm:text-sm cursor-text"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="resume"
                      value={formData.resume}
                      onChange={handleChange}
                      placeholder="Resume/CV Link or File Name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#DC2626] focus:outline-none transition-all text-xs sm:text-sm cursor-text"
                    />
                  </div>
                  <div>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Cover Letter"
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#DC2626] focus:outline-none transition-all resize-none text-xs sm:text-sm cursor-text"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#DC2626] text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-all cursor-pointer"
                  >
                    <span>{submitted ? 'Application Submitted!' : 'Submit Application'}</span>
                    <FiSend className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

