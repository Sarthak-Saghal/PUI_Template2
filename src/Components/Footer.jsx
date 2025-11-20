import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  UserRound,
  Code2,
  Briefcase,
  BookOpen,
  Target,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 px-4">

        {/* LOGO */}
        <motion.div
          className="opacity-90"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Target size={55} className="text-purple-400 animate-pulse" />
        </motion.div>

        {/* NAV LINKS WITH ICONS */}
        <ul className="
            flex flex-wrap justify-center gap-5 sm:gap-10
            text-[14px] sm:text-[15px] font-medium text-gray-300
        ">
          <li className="flex items-center gap-2 hover:text-purple-400 transition cursor-pointer">
            <Layers size={18} /> Services
          </li>
          <li className="flex items-center gap-2 hover:text-purple-400 transition cursor-pointer">
            <UserRound size={18} /> About
          </li>
          <li className="flex items-center gap-2 hover:text-purple-400 transition cursor-pointer">
            <Code2 size={18} /> Skills
          </li>
          <li className="flex items-center gap-2 hover:text-purple-400 transition cursor-pointer">
            <Briefcase size={18} /> Experience
          </li>
          <li className="flex items-center gap-2 hover:text-purple-400 transition cursor-pointer">
            <BookOpen size={18} /> Blogs
          </li>
        </ul>

        
        <p className="text-gray-500 text-[13px] sm:text-sm text-center leading-relaxed">
          © 2025 All Rights Reserved | Designed & Built by{" "}
          <span className="text-purple-400 font-semibold">Sarthak</span>
        </p>
      </div>
    </footer>
  );
};
