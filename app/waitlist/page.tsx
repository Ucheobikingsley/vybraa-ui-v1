"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Head>
        <title>Join the Waitlist – Vybraa</title>
        <meta
          name="description"
          content="Be the first to connect with your favorite African artists through Vybraa. Join our exclusive waitlist."
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-10 md:py-16 flex flex-col items-center">
        <Link href="/" className="mb-8">
          <Image
            src="/jpeg/logo.jpeg"
            alt="Vybraa Logo"
            width={100}
            height={100}
            priority
            className="mx-auto w-[100px] h-[100px] rounded-full"
          />
        </Link>

        <div className="max-w-lg w-full text-center">
          <motion.h1
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🎉 You are Almost In!
          </motion.h1>

          <p className="text-gray-700 text-lg mb-10">
            Join the Vybraa waitlist and be first in line when we launch
            Africa’s first fan-commerce app for real artist connections.
          </p>

          {submitted ? (
            <motion.div
              className="bg-[#F7B708] text-gray-900 font-medium py-4 px-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              ✅ You are on the list! We will notify you as soon as we go live.
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-4 text-left"
            >
              <label className="font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7B708]"
                required
              />

              <label className="font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F7B708]"
                required
              />

              <button
                type="submit"
                className="mt-6 bg-[#F7B708] text-black font-semibold py-3 px-6 rounded-lg shadow hover:scale-105 transition"
              >
                Join the Waitlist
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
