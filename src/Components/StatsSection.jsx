import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statsData = [
  { value: 14, label: "Years of Experience" },
  { value: 50, label: "Teams Completed" },
  { value: 1500, label: "Happy Clients" },
  { value: 14, label: "Awards Won" },
];

const CountUp = ({ value, duration = 2 }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const motionValue = useMotionValue(0);

  const rounded = useTransform(motionValue, (latest) =>
    value >= 1000 ? `${Math.floor(latest / 1000)}K` : Math.floor(latest)
  );

  React.useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration, ease: "easeOut" });
    } else {
      motionValue.set(0); // reset when out of view
    }
  }, [inView, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const StatsSection = () => {
  return (
    <section className="bg-black text-[#fb64b6] pt-8 pb-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col p-6 sm:p-8 bg-[#1a1a1f] rounded-xl shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, once: false }} // animate every scroll
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <dt className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-500 mb-2">
              <CountUp value={stat.value} />
            </dt>
            <dd className="text-xs sm:text-sm md:text-base font-medium text-white uppercase tracking-wider">
              {stat.label}
            </dd>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
