"use client";
import { MdOutlineLiveTv } from "react-icons/md";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// 🔥 Experience Data
const experienceData = [
  {
    icon: <MdOutlineLiveTv color="#ffb347" size={40} />,
    title: "Assistant Producer",
    company: "Zee Media Corporation Limited, New Delhi",
    duration: "2024 – Present",
    points: [
      "Conceptualize and produce daily news bulletins, prime-time shows, and special segments ensuring accuracy and engagement.",
      "Script and edit news packages with strong focus on storytelling and editorial guidelines.",
    ],
  },

  {
    icon: <MdOutlineLiveTv color="#ffb347" size={40} />,
    title: "Assistant Producer",
    company: "Bharat Express, Noida",
    duration: "2023 – 2024",
    points: [
      "Produced live news shows and prime-time debates while coordinating with editorial & technical teams.",
      "Wrote and edited scripts, headlines, and tickers for on-air content.",
    ],
  },

  {
    icon: <MdOutlineLiveTv color="#ffb347" size={40} />,
    title: "Assistant Producer",
    company: "India News, Noida",
    duration: "2022 – 2023",
    points: [
      "Assisted in daily news show production including scripting, video editing, and newsroom coordination.",
      "Supported senior producers in preparing rundowns and executing live telecasts.",
    ],
  },
];

const ITEMS_PER_PAGE = 2;

const Experience = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(experienceData.length / ITEMS_PER_PAGE);

  const currentData = experienceData.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <Motion.section
      id="Experience"
      className="px-8 md:px-20 py-12 text-white bg-black bg-opacity-30 rounded-2xl shadow-xl mx-4 md:mx-20 my-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-10 text-[#ffb347] text-center"
        variants={itemVariants}
        initial="hidden"
        animate="show"
      >
        Experience
      </Motion.h2>

      {/* Experience Cards */}
      <AnimatePresence mode="wait">
        <Motion.div
          key={page}
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -70 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {currentData.map((exp, idx) => (
            <Motion.div
              key={idx}
              className="bg-[#0d1b2a] bg-opacity-60 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-[#ffb347]/20 transition-all duration-300"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <div className="flex items-center gap-4 mb-2">
                {exp.icon}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {exp.title} – {exp.company}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                </div>
              </div>

              <ul className="list-disc list-inside text-gray-300 text-sm md:text-base mt-3 leading-relaxed space-y-2">
                {exp.points.map((point, i) => (
                  <Motion.li key={i} variants={itemVariants}>
                    {point}
                  </Motion.li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </Motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={prevPage}
          disabled={page === 0}
          className={`px-4 py-2 rounded-lg border border-[#ffb347] text-[#ffb347] transition-all ${
            page === 0
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#ffb347] hover:text-black"
          }`}
        >
          Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === page ? "bg-[#ffb347]" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={page === totalPages - 1}
          className={`px-4 py-2 rounded-lg border border-[#ffb347] text-[#ffb347] transition-all ${
            page === totalPages - 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#ffb347] hover:text-black"
          }`}
        >
          Next
        </button>
      </div>
    </Motion.section>
  );
};

export default Experience;
