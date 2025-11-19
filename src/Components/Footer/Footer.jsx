"use client";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const contactLinks = [
    {
      icon: <MdOutlineEmail size={22} className="text-[#ffb347]" />,
      label: "bbiplab165@gmail.com",
      href: "mailto:bbiplab165@gmail.com",
    },
    {
      icon: <CiLinkedin size={22} className="text-[#ffb347]" />,
      label: "linkedin.com/in/biplab-biswas-7246571ba",
      href: "https://www.linkedin.com/in/biplab-biswas-7246571ba/",
    },
    {
      icon: <FaGithub size={22} className="text-[#ffb347]" />,
      label: "github.com/bbiplab165",
      href: "https://github.com/bbiplab165",
    },
  ];

  return (
    <motion.footer
      id="Footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#2c3e50] text-white pt-6 pb-4 px-8 md:px-20 rounded-t-3xl shadow-xl mt-20 overflow-hidden border-t border-gray-800"
    >
      {/* Soft background glow */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#ffb347]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#465697]/20 blur-3xl rounded-full"></div>

      <motion.div
        className="relative flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* Left Section */}
        <motion.div
          className="text-center md:text-left space-y-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#ffb347] drop-shadow-md">
            Let’s Connect
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md">
            I’m always open to collaborating on projects or exploring new
            opportunities. Let’s create something impactful together.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.ul
          className="flex flex-col gap-5 text-sm md:text-lg font-medium text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {contactLinks.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05, x: 6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="hover:text-[#ffb347] transition-all duration-300 group-hover:underline"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Divider with glow */}
      <motion.div
        className="border-t border-gray-700 mt-6 pt-4 text-center text-xs md:text-sm text-gray-400 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="inline-block mb-2 text-[#ffb347] font-semibold tracking-wide">
          ✨ Thank you for visiting ✨
        </span>
        <br />
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Biplab Biswas</span>. All
        Rights Reserved.
      </motion.div>

      {/* Floating glow orb animation */}
      <motion.div
        className="absolute top-10 right-10 w-6 h-6 bg-[#ffb347]/30 rounded-full blur-lg"
        animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.footer>
  );
};

export default Footer;
