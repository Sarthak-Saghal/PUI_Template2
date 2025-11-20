import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, MonitorSmartphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Code size={42} />,
    title: "Web Development",
    description:
      "High-performance and responsive websites crafted with clean code and modern frameworks.",
  },
  {
    icon: <Palette size={42} />,
    title: "UI / UX Design",
    description:
      "Beautiful, intuitive and conversion-focused designs that elevate user experience.",
  },
  {
    icon: <MonitorSmartphone size={42} />,
    title: "Consulting",
    description:
      "Strategic guidance and technical consulting to scale your digital product efficiently.",
  },
];

export const Services = () => {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold bg-gradient-to-r from-[#6C00FF] via-[#A64BFF] to-[#3A0CA3] bg-clip-text text-transparent mb-6 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Bridging design and technology with handcrafted digital experiences that deliver results.
        </motion.p>

        {/* Services Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="
                group relative p-9 rounded-3xl
                bg-white/5 border border-white/15 shadow-[0_0_25px_rgba(90,0,150,0.35)]
                backdrop-blur-2xl cursor-pointer overflow-hidden
                transition-all duration-500 will-change-transform
              "
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.07 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
                e.currentTarget.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.08)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            >
              {/* Gradient glow overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(130deg, rgba(108,0,255,0.25), rgba(166,75,255,0.32), rgba(58,12,163,0.25))",
                  backgroundSize: "260% 260%",
                }}
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              />

              {/* Icon */}
              <motion.div
                className="mb-6 text-[#CFAEFF] drop-shadow-[0_0_15px_rgba(120,70,255,0.45)]"
                whileHover={{ scale: 1.22 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#A86BFF] via-[#7A29FF] to-[#4C0CCB] bg-clip-text text-transparent tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-14">
                {service.description}
              </p>

              {/* Arrow */}
              <motion.div
                className="absolute bottom-7 right-7 text-[#C6A1FF]"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2.3, repeat: Infinity }}
              >
                <ArrowRight size={22} />
              </motion.div>

              {/* Soft corner glows */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#A64BFF]/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#3A0CA3]/22 rounded-full blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
