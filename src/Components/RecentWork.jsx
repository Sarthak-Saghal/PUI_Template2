import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";


const categories = ["All", "Branding", "UI/UX"];

const projects = [
  { id: 1, category: "UI/UX", title: "Finance Dashboard UI", img: "https://i.pinimg.com/1200x/94/a1/bd/94a1bd7dc4d4c4aad0223ae199d8c43f.jpg" },
  { id: 2, category: "Branding", title: "Luxury Brand Identity", img: "https://i.pinimg.com/1200x/ae/1d/94/ae1d945fe2c06fbb2ca245d71569e518.jpg" },
  { id: 3, category: "Branding", title: "Creative Product Branding", img: "https://i.pinimg.com/1200x/b8/0c/5b/b80c5bf64282c01f1c489b2c4b9e3f2f.jpg" },
  { id: 4, category: "UI/UX", title: "E-Commerce Mobile UI", img: "https://i.pinimg.com/736x/ff/77/04/ff7704c261dcc8057ec28cc54f12857d.jpg" },
  { id: 5, category: "Branding", title: "Professional Logo Kit", img: "https://i.pinimg.com/1200x/ae/1d/94/ae1d945fe2c06fbb2ca245d71569e518.jpg" },
  { id: 6, category: "UI/UX", title: "SaaS Web UX Design", img: "https://i.pinimg.com/1200x/14/d3/eb/14d3eb87467784ac092f437416a0484a.jpg" },
  { id: 7, category: "Branding", title: "Clothing Line Branding", img: "https://i.pinimg.com/736x/f9/02/0c/f9020cf15f4909b5d73bae69836ee107.jpg" },
  { id: 8, category: "UI/UX", title: "Dark Mode Portfolio UI", img: "https://i.pinimg.com/736x/d9/2d/0f/d92d0f3074f8bb4b5d4583f1117a78a1.jpg" },
];

export const Recentwork = () => {
  const [active, setActive] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null); // 🔥 added

  const filteredProjects =
    active === "All"
      ? projects.slice(0, 4)
      : projects.filter((p) => p.category === active).slice(0, 4);

  return (
    <section className="bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#6C00FF] via-[#A64BFF] to-[#3A0CA3] bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Recent Works
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                active === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-700/60"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedImg(project.img)} // 🔥 added
              className="relative rounded-2xl overflow-hidden cursor-pointer group bg-white/5 p-2 backdrop-blur-xl border border-white/10 hover:shadow-xl shadow-purple-900"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={project.img}
                  alt="project"
                  className="w-full h-80 object-cover transition-all group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/40 opacity-0 group-hover:opacity-100 transition-all"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-600 opacity-0 group-hover:opacity-100 transition-all"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-sm font-semibold text-purple-300 backdrop-blur-md border border-purple-600/20 shadow-md">
                {project.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 Fullscreen Image Preview Popup */}
     {selectedImg && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
  >
    {/* ❌ Lucide Close Button */}
    <button
      className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
      onClick={() => setSelectedImg(null)}
    >
      <X className="w-6 h-6 text-white hover:text-purple-400 transition" />
    </button>

    {/* Image */}
    <img
      src={selectedImg}
      alt="Preview"
      className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
    />
  </div>
)}

    </section>
  );
};
