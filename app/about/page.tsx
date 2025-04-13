'use client';

import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { motion } from 'framer-motion';

export default function AboutPage() {
  const team = [
    {
      name: 'Kakungulu Abubakar',
      role: 'Founder',
      image: '/abubakar.jpg',
      bio: 'Dedicated to transforming students&apos; academic dreams into reality through comprehensive educational guidance and support.',
    },
    {
      name: 'Kiryowa Idrisa',
      role: 'Co-founder/Director',
      image: '/eidris.jpg',
      bio: 'Committed to providing expert guidance in educational consultancy and ensuring student success in their academic pursuits.',
    },
    {
      name: 'Wanjui Zakiia Badr',
      role: 'Director',
      image: '/co-founder.jpg',
      bio: 'Passionate about making quality education accessible and helping students achieve their academic aspirations.',
    },
  ];

  const services = [
    {
      title: 'Scholarship Programs',
      description: 'Access to fully-funded and partial scholarships for international education.',
      icon: '🎓',
    },
    {
      title: 'Career Guidance',
      description: 'Comprehensive career counseling and professional development support.',
      icon: '💼',
    },
    {
      title: 'Educational Consultancy',
      description: 'Expert guidance on academic programs and university selection.',
      icon: '📚',
    },
    {
      title: 'Travel Support',
      description: 'Flight ticket booking assistance and visa processing guidance.',
      icon: '✈️',
    },
    {
      title: 'Airport Services',
      description: 'Reliable airport pick-up service for international students.',
      icon: '🚗',
    },
    {
      title: 'Accommodation',
      description: 'Assistance in finding and arranging suitable hostel accommodation.',
      icon: '🏠',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Varsity Scholars Consult" showAuth={true} />

      <main className="flex-grow">
        {/* About Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">About Varsity Scholars Consult</h1>
              <div className="prose lg:prose-xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Varsity Scholars Consult is a legally registered company dedicated to helping students achieve their academic and career aspirations. Our primary focus is on securing fully-funded and partial scholarships, providing comprehensive career guidance, and offering educational consultancy services.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Our primary goal is to empower students by helping them access opportunities that can transform their academic and professional futures. At Varsity Scholars Consult, we are committed to making education accessible and ensuring students have the tools they need to excel in their academic and professional journeys.
                </p>
                <p className="text-2xl font-semibold text-blue-600 italic">
                  &ldquo;The dream you desire must be fuelled by faith and ignited by hope&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Comprehensive support for your academic journey</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600">The visionaries behind Varsity Scholars Consult</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment</h2>
              <p className="text-xl leading-relaxed">
                We are dedicated to making quality education accessible to all students. Through our comprehensive
                services and expert guidance, we help transform academic dreams into reality, providing the support
                needed at every step of your educational journey.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
