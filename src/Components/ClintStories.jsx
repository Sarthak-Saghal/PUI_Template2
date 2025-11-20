import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Jonathan Reeve",
    role: "CEO – Creative Solutions",
    feedback:
      "“Major transformation! Exceptional creativity, seamless execution and top-notch attention to detail. Highly recommended.”",
    img: "https://i.pinimg.com/1200x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
  },
  {
    name: "Lisa Anthony",
    role: "Marketing Head – Techworks",
    feedback:
      "“The digital overhaul boosted our brand immensely. The professionalism and design accuracy were beyond expectations.”",
    img: "https://i.pinimg.com/736x/f2/42/ff/f242ff06c34c1e3c2230c8f61590555f.jpg",
  },
];

export const ClintStories = () => {
  return (
    <section className="bg-black text-white py-15 px-6 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-[#6C00FF] via-[#A64BFF] to-[#3A0CA3] bg-clip-text text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Client’s Stories
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-3 mb-16 text-xl text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empowering brands to scale digitally, creating value and long-term
          success.
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-[#120022] rounded-2xl border border-purple-700/30 p-8 shadow-lg hover:shadow-purple-600/40 transition cursor-pointer relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Client Image Top-Left */}
              <img
                src={t.img}
                alt="client"
                className="w-14 h-14 rounded-full border border-purple-400 object-cover absolute -top-7 left-7 shadow-lg"
              />

              {/* Quote Icon */}
              <Quote className="text-purple-500 absolute top-6 right-6 w-8 h-8 opacity-70" />

              {/* Testimonial Text */}
              <p className="text-gray-300 mt-12 mb-6 leading-relaxed text-[15px]">
                {t.feedback}
              </p>

              {/* Bottom Info */}
              <div>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
