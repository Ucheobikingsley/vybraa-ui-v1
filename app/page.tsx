"use client";

import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vybraa – Africa’s First Fan-Commerce Engine</title>
        <meta
          name="description"
          content="Book unforgettable, one-to-one moments with your favorite African artists. Coming soon to Play Store & App Store."
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
        <motion.div
          className="flex justify-center py-6 bg-[#F7B708]/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/jpeg/logo.jpeg"
            alt="Vybraa Logo"
            className=" w-[120px] h-[120px] rounded-full"
          />
        </motion.div>
        {/* Hero Section */}
        <section className="relative bg-[#F7B708]/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7B708] via-white to-[#fff] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 text-[#2e022e]"
            >
              Reimagining the Fan–Artist Bond
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
            >
              Vybraa lets music lovers book unforgettable, one-on-one moments
              with African artists — from video shoutouts to private
              mini-performances.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#"
                className="bg-[#F7B708] text-black font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
              >
                Coming Soon on Play Store
              </a>
              <a
                href="#"
                className="bg-[#2e022e] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
              >
                Coming Soon on App Store
              </a>
            </motion.div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-24 px-6 md:px-12 bg-white text-center">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-14 text-[#2e022e]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Vybraa?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10 text-left">
              {[
                {
                  title: "Personalized Shoutouts",
                  desc: "Receive heartfelt videos from your favorite artists — birthdays, celebrations, or just because.",
                  icon: "🎤",
                },
                {
                  title: "Exclusive Collectibles",
                  desc: "Own signed merchandise, personal belongings, and limited artist memorabilia.",
                  icon: "🎁",
                },
                {
                  title: "Private Access",
                  desc: "Get live video calls, private mini-shows, or front-row VVIP concert experiences.",
                  icon: "📞",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col gap-4 p-6 border border-gray-200 rounded-2xl bg-[#f9f9f9] hover:bg-[#fffcee] transition-all shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-[#2e022e]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-[#F7B708] via-[#fce580] to-white text-[#2e022e] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              className="text-4xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Don’t just stream — connect personally.
            </motion.h3>

            <motion.p
              className="text-lg md:text-xl mb-10 text-[#2e022e]/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Vybraa lets you turn your admiration for artists into real,
              unforgettable moments — live calls, collectibles, and more. Coming
              soon to your phone.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="/waitlist"
                className="bg-[#2e022e] text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition"
              >
                Join the Waitlist
              </a>
              <a
                href="/waitlist"
                className="bg-white text-[#2e022e] border border-[#2e022e] py-3 px-6 rounded-lg font-semibold hover:scale-105 transition"
              >
                Notify Me on Launch
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-50 py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              className="text-3xl font-bold mb-8 text-[#2e022e]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h3>

            <motion.div
              className="grid md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Address */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#F7B708] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="font-semibold text-[#2e022e] mb-2">Address</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tawakalitu Olabisi Lane
                  <br />
                  Lekki, Lagos
                  <br />
                  Nigeria
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#F7B708] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="font-semibold text-[#2e022e] mb-2">Phone</h4>
                <a
                  href="tel:+2349068018564"
                  className="text-gray-600 text-sm hover:text-[#F7B708] transition-colors"
                >
                  +234 906 801 8564
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#F7B708] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h4 className="font-semibold text-[#2e022e] mb-2">Email</h4>
                <a
                  href="mailto:Vybraa01@gmail.com"
                  className="text-gray-600 text-sm hover:text-[#F7B708] transition-colors"
                >
                  Vybraa01@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-500 bg-white">
          &copy; {new Date().getFullYear()} Vybraa. Built for the heartbeat of
          Africa.
        </footer>
      </main>
    </>
  );
}
