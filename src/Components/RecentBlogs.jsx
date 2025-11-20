import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from 'lucide-react';

const blogs = [
  {
    tag: "UI/UX",
    title: "The Basics of Consistency in UI/UX",
    img: "https://i.pinimg.com/1200x/ef/1d/aa/ef1daa2277d8e10eb41c5af8e0b77ea2.jpg",
    content: `
      Consistency is the backbone of UI and UX design. It helps users develop
      familiarity with interfaces, reducing confusion and strengthening usability.
      A consistent interface ensures repeatable patterns, predictable behaviors,
      and clarity across the product.
      
      When users don't need to think about how something works, they enjoy the
      experience more. Designers achieve consistency through visual hierarchy,
      typography, spacing, and reusing patterns such as components, icons, and layout.
    `,
  },
  {
    tag: "Design",
    title: "The Services Provided For Design",
    img: "https://i.pinimg.com/1200x/8b/76/8e/8b768eaf073689d0b81b54ec8cd49d8c.jpg",
    content: `
      Design services include UI design, UX strategy, brand identity, product
      aesthetics, and interactive prototyping. These services ensure that a product
      is not only visually appealing but also functional and user-centered.
      
      Good design blends creativity with psychology — solving user problems while
      promoting an emotional connection to the product or brand.
    `,
  },
  {
    tag: "Technology",
    title: "Graphic Industries To Their New Offices",
    img: "https://i.pinimg.com/736x/28/be/d4/28bed4347dc9a774eaad35cb5ad001de.jpg",
    content: `
      The graphic industry continues to evolve with new technologies, shifting from
      traditional print media to smart digital ecosystems. Modern studios now depend
      heavily on automation, 3D visual pipelines, AI-driven art assets, and virtual
      production.
      
      The transition to high-tech workflows has pushed studios into more modern
      office infrastructures that support hybrid work, scalable production, and
      digital real-time collaboration.
    `,
  },
];

export const RecentBlogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <div className="relative">
      {/* BLOG SECTION */}
      <section className="bg-black text-white py-24 px-6 flex justify-center">
        <div className="max-w-7xl w-full text-center">
          <h1 className="text-7xl pb-10 text-purple-500 font-semibold text-center " >Blogs</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                onClick={() => setActiveBlog(blog)}
                className="rounded-2xl overflow-hidden bg-white/5 border border-purple-600/20 backdrop-blur-lg cursor-pointer group shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <img
                  src={blog.img}
                  className="w-full h-80 object-cover group-hover:scale-110 duration-500"
                />

                <div className="p-6 bg-[#11001f]/70 flex flex-col gap-2">
                  <span className="mx-auto text-sm px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-700 to-purple-500 shadow-md border border-purple-300/20">
                    {blog.tag}
                  </span>
                  <h3 className="font-bold text-xl mt-1 mb-1">{blog.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 POPUP BLOG MODAL */}
      {/* 🔥 POPUP BLOG MODAL */}
      {/* 🔥 POPUP BLOG MODAL */}
      {activeBlog && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 px-4"
          onClick={() => setActiveBlog(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-[#160026] rounded-2xl border border-purple-700/40 shadow-2xl max-w-6xl w-full h-[620px] grid grid-cols-1 md:grid-cols-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEFT — IMAGE FULL HEIGHT */}
            <img src={activeBlog.img} className="w-full h-full object-cover" />

            {/* RIGHT — TEXT AND CLOSE BUTTON AT BOTTOM */}
            <div className="p-10 flex flex-col gap-6 overflow-y-auto">
              <span className="text-sm w-fit px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-semibold shadow-md">
                {activeBlog.tag}
              </span>

              <h1 className="text-4xl font-bold leading-tight text-purple-400">
                {activeBlog.title}
              </h1>

              <p className="text-gray-300 text-[15px] leading-relaxed whitespace-pre-line">
                {activeBlog.content}
              </p>

              {/* BUTTON AT RIGHT BELOW TEXT */}
              <button
                onClick={() => setActiveBlog(null)}
                className="ml-auto mt-5 bg-gradient-to-r from-purple-700 to-purple-500 hover:opacity-90 px-8 py-3 rounded-xl font-semibold text-lg shadow-lg transition flex items-center"
              >
                Close <X size={20}/>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
