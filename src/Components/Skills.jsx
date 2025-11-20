import React from "react";
import { motion } from "framer-motion";
import { Code, PenTool, Database, Layers, Laptop, Globe } from "lucide-react";  // 🔥 added

// 🔥 Skills Data added here
const skillsData = [
  { icon: Code, percent: "95%", title: "Web Dev" },
  { icon: PenTool, percent: "90%", title: "UI/UX" },
  { icon: Database, percent: "85%", title: "Database" },
  { icon: Layers, percent: "88%", title: "Full Stack" },
  { icon: Laptop, percent: "92%", title: "Responsive" },
  { icon: Globe, percent: "80%", title: "SEO" },
];

export const Skills = () => {
  return (
    <section className="bg-black text-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl text-center">
        <motion.h2
          className="text-4xl font-semibold text-purple-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-2 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Master your skills and showcase your abilities with a modern layout.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12">
          {skillsData.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="bg-[#141318] p-6 rounded-xl border border-purple-900/30 shadow-lg
                           flex flex-col items-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <motion.div className="text-purple-300 mb-4">
                  <Icon className="w-12 h-12" />
                </motion.div>

                <motion.p
                  className="text-purple-300 font-semibold"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.percent}
                </motion.p>

                <motion.p
                  className="text-gray-300 text-sm mt-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
