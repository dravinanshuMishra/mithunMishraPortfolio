"use client";
import { IoCodeSlashOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <motion.section
      id="Experience"
      className="px-8 md:px-20 py-12 text-white bg-black bg-opacity-30 rounded-2xl shadow-xl mx-4 md:mx-20 my-10 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-10 text-[#ffb347] text-center"
        variants={itemVariants}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
        {/* RIGHT: Experience Details */}
        <motion.div
          className="flex-1 space-y-6"
          variants={containerVariants}
        >
          {/* CARD */}
          <motion.div
            className="bg-[#0d1b2a] bg-opacity-60 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-[#ffb347]/20 transition-all duration-300 hover:-translate-y-1"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="flex items-center gap-4 mb-2"
              variants={itemVariants}
            >
              <IoCodeSlashOutline color="#ffb347" size={40} />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Full Stack Developer Intern – Ariedge
                </h3>
                <p className="text-sm text-gray-400">Dec 2024 – Jul 2025</p>
              </div>
            </motion.div>

            <motion.ul
              className="list-disc list-inside text-gray-300 text-sm md:text-base mt-3 leading-relaxed space-y-2"
              variants={containerVariants}
            >
              {[
                <>
                  Developed full-stack web applications using{" "}
                  <span className="text-white font-medium">
                    React.js, Node.js, Express.js, MongoDB, and PostgreSQL
                  </span>.
                </>,
                <>
                  Designed responsive and reusable UI components with{" "}
                  <span className="text-white font-medium">Tailwind CSS</span>{" "}
                  and integrated RESTful APIs.
                </>,
                <>
                  Built and deployed projects including{" "}
                  <span className="text-white font-medium">
                    SwiftMart Shopping Website
                  </span>{" "}
                  and an{" "}
                  <span className="text-white font-medium">
                    Email Application
                  </span>.
                </>,
                <>
                  Collaborated with team members using{" "}
                  <span className="text-white font-medium">Git & GitHub</span>{" "}
                  for version control and agile workflow.
                </>,
              ].map((item, i) => (
                <motion.li key={i} variants={itemVariants}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
