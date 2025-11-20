import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E0018] text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[120px] sm:text-[160px] md:text-[220px] font-extrabold bg-gradient-to-r from-purple-600 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-2xl"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg sm:text-2xl text-purple-200 text-center max-w-xl leading-relaxed"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          to="/"
          className="mt-8 bg-gradient-to-r from-purple-700 to-purple-500 hover:opacity-90 px-8 py-3 rounded-xl font-semibold text-lg shadow-xl transition flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};
