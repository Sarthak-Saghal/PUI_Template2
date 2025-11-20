import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";


const data = {
  experience: [
    { year: "2020 – Present", title: "Lead Developer", place: "Rocksite Studio" },
    { year: "2021 – 2023", title: "Full Stack Web Developer", place: "Fantasy Production" },
    { year: "2018 – 2021", title: "UI Designer", place: "Webenix Studio" },
    { year: "2016 – 2018", title: "Junior Graphics Designer", place: "Studio Flat" },
  ],
  education: [
    { year: "2018 – 2020", title: "Programming Course", place: "Mac Vision" },
    { year: "2016 – 2018", title: "Graphic Design Course", place: "Modern Art School" },
    { year: "2014 – 2016", title: "Web Design Course", place: "London Institute" },
    { year: "2012 – 2014", title: "Design & Technology", place: "Matrix Technical School" },
  ],
};

export const ExperienceEducationSection = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16">

        {/* Experience */}
        <div>
          <motion.h2
            className="text-3xl font-semibold text-purple-400 mb-10 flex items-center gap-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="w-7 h-7 text-purple-400" /> My Experience

          </motion.h2>

          <div className="flex flex-col gap-5">
            {data.experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-r from-[#2d1b4b] to-[#1a1330] p-6 rounded-xl border border-purple-600/30 shadow-lg group"
              >
                <motion.p
                  className="text-sm text-purple-300"
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -4 }}
                >
                  {item.year}
                </motion.p>

                <motion.h3
                  className="text-lg font-bold mt-1 text-white"
                  transition={{ duration: 0.35 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-gray-400"
                  transition={{ duration: 0.35 }}
                  whileHover={{ opacity: 1, x: 4 }}
                >
                  {item.place}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h2
            className="text-3xl font-semibold text-purple-400 mb-10 flex items-center gap-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap className="w-7 h-7 text-purple-400" /> My Education

          </motion.h2>

          <div className="flex flex-col gap-5">
            {data.education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-r from-[#2d1b4b] to-[#1a1330] p-6 rounded-xl border border-purple-600/30 shadow-lg group"
              >
                <motion.p
                  className="text-sm text-purple-300"
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -4 }}
                >
                  {item.year}
                </motion.p>

                <motion.h3
                  className="text-lg font-bold mt-1 text-white"
                  transition={{ duration: 0.35 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-gray-400"
                  transition={{ duration: 0.35 }}
                  whileHover={{ opacity: 1, x: 4 }}
                >
                  {item.place}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
