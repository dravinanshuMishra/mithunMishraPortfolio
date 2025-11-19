"use client";
import {
  FaCameraRetro,
  FaMicrophoneAlt,
  FaPenNib,
  FaVideo,
  FaLaptop,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiCanva,
  SiGooglenews,
  SiGoogleanalytics,
} from "react-icons/si";
import { motion as Motion } from "framer-motion";

const skills = [
  {
    category: "Journalism Skills",
    color: "#ffb347",
    items: [
      { name: "News Reporting", icon: <FaPenNib className="text-[#ffb347]" /> },
      {
        name: "Interviewing",
        icon: <FaMicrophoneAlt className="text-red-400" />,
      },
      {
        name: "Field Journalism",
        icon: <FaCameraRetro className="text-blue-400" />,
      },
      { name: "Script Writing", icon: "📝" },
    ],
  },
  {
    category: "Media Production",
    color: "#60a5fa",
    items: [
      { name: "Video Editing", icon: <FaVideo className="text-sky-400" /> },
      {
        name: "Photography",
        icon: <FaCameraRetro className="text-gray-300" />,
      },
      { name: "Content Creation", icon: "🎥" },
    ],
  },
  {
    category: "Digital Tools",
    color: "#facc15",
    items: [
      {
        name: "Adobe Photoshop",
        icon: <SiAdobephotoshop className="text-blue-500" />,
      },
      { name: "Canva", icon: <SiCanva className="text-teal-400" /> },
      {
        name: "Google News Tools",
        icon: <SiGooglenews className="text-[#ffb347]" />,
      },
      {
        name: "Social Media Analytics",
        icon: <SiGoogleanalytics className="text-green-400" />,
      },
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
    <Motion.section
      id="skills"
      className="bg-black bg-opacity-30 text-white shadow-xl rounded-2xl mx-4 md:mx-20 my-12 p-10 md:p-16 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      {/* Header */}
      <Motion.div className="text-center mb-10" variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffb347]">
          Skills & Expertise
        </h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Tools and capabilities I use as a journalist to create impactful
          stories.
        </p>
      </Motion.div>

      {/* Skills Grid */}
      <Motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {skills.map((section, idx) => (
          <Motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative bg-linear-to-br from-[#0d1b2a] to-[#1a2b3c] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-[#ffb347]/40 transition-all duration-300"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 hover:opacity-30 blur-xl transition-all duration-500"
              style={{ background: section.color }}
            ></div>

            {/* Category */}
            <Motion.h3
              className="text-xl font-semibold mb-4 relative z-10"
              style={{ color: section.color }}
              variants={itemVariants}
            >
              {section.category}
            </Motion.h3>

            {/* Skill Items */}
            <div className="flex flex-col gap-3 relative z-10">
              {section.items.map((skill, i) => (
                <Motion.div
                  key={i}
                  layout={false}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 bg-opacity-5 rounded-lg py-3 px-4 hover:bg-opacity-10 transition-transform duration-150 ease-out min-h-[52px]"
                  style={{ transformOrigin: "center" }}
                >
                  <Motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.15 }}
                    className="text-2xl flex items-center justify-center w-8"
                  >
                    {skill.icon}
                  </Motion.div>
                  <span className="text-gray-200 text-sm md:text-base font-medium">
                    {skill.name}
                  </span>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        ))}
      </Motion.div>
    </Motion.section>
  );
};

export default Skills;
