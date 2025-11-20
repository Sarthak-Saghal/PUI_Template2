import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const PROFILE_IMAGE_URL =
  "https://i.pinimg.com/1200x/b8/82/83/b882836fa749f501aefa935d19e19977.jpg";

const socialLinks = [
  { icon: Mail, label: "Email", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export const Herosection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 40, rotate: -3 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1 } },
  };

  return (
    <section className="relative min-h-screen bg-black text-white font-sans overflow-hidden pt-7">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-blob -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between h-full pt-20 pb-12 lg:pt-32 lg:pb-16 gap-12">
        {/* Left Text */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.p
            className="text-5xl sm:text-6xl font-extrabold text-purple-400"
            variants={textVariants}
          >
            I am Gerold
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold leading-tight text-gray-100"
            variants={textVariants}
          >
            <span className="text-purple-400">Web Developer  &</span > <br />
            <span className="text-purple-400">UX Designer</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-base sm:text-lg max-w-lg mx-auto lg:mx-0"
            variants={textVariants}
          >
            Crafting seamless digital experiences through thoughtful design and
            clean code. I help brands connect with users and shine online.
          </motion.p>

          {/* Buttons & Social Icons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4"
            variants={textVariants}
          >
            <motion.button
              className="px-8 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg shadow-purple-800 transition duration-300 transform"
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
            >
              Download CV &raquo;
            </motion.button>

            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="p-3 bg-white/10 rounded-full shadow-lg shadow-purple-700/20 ring-1 ring-purple-400/30"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: [0, -5, 0, 5, 0],
                    scale: [1, 1.1, 1, 1.1, 1],
                    rotate: [0, 10, -10, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: i * 0.3,
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                    boxShadow: "0 0 20px #a855f7",
                  }}
                  whileTap={{ scale: 0.9, rotate: -10 }}
                >
                  <link.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end flex-1"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-purple-800/60"
            animate={{
              y: [0, -15, 0, 15, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <img
              src={PROFILE_IMAGE_URL}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-3xl ring-4 ring-purple-500/20 animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
