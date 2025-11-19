"use client";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    color: "#60a5fa",
    items: [
      { name: "React.js", icon: <FaReact className="text-[#61DBFB]" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
      { name: "Ant Design", icon: "🎨" },
    ],
  },
  {
    category: "Backend Development",
    color: "#facc15",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: "🚀" },
      { name: "REST API", icon: "🔗" },
    ],
  },
  {
    category: "Database & Tools",
    color: "#ffb347",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Cloudinary", icon: <FaDatabase className="text-gray-300" /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
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

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="bg-black bg-opacity-30 text-white shadow-xl rounded-2xl mx-4 md:mx-20 my-12 p-10 md:p-16 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="text-center mb-10" variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffb347]">
          Skills & Technologies
        </h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Tools and technologies I use to build fast, scalable, and modern web apps.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {skills.map((section, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-[#0d1b2a] to-[#1a2b3c] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-[#ffb347]/40 transition-all duration-300"
          >
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 hover:opacity-30 blur-xl transition-all duration-500"
              style={{ background: section.color }}
            ></div>

            {/* Category Title */}
            <motion.h3
              className="text-xl font-semibold mb-4 relative z-10"
              style={{ color: section.color }}
              variants={itemVariants}
            >
              {section.category}
            </motion.h3>

            {/* Skill Items */}
            <div className="flex flex-col gap-3 relative z-10">
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  layout={false} // prevents layout recalculation
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="flex items-center gap-3 bg-white bg-opacity-5 rounded-lg py-3 px-4 hover:bg-opacity-10 transition-transform duration-150 ease-out min-h-[52px]"
                  style={{ transformOrigin: "center" }} // consistent scale behavior
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.15 }}
                    className="text-2xl flex items-center justify-center w-8"
                  >
                    {skill.icon}
                  </motion.div>
                  <span className="text-gray-200 text-sm md:text-base font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
