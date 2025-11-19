"use client";
import { motion as Motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook, CiTwitter } from "react-icons/ci";

const Footer = () => {
  const contactLinks = [
    {
      icon: <MdOutlineEmail size={22} className="text-[#ffb347]" />,
      label: "mithunkmishra.in@gmail.com",
      href: "mailto:mithunkmishra.in@gmail.com",
    },
    {
      icon: <CiTwitter size={22} className="text-[#ffb347]" />,
      label: "twitter.com/mithun_mishra",
      href: "https://twitter.com/mithun_mishra",
    },
    {
      icon: <CiFacebook size={22} className="text-[#ffb347]" />,
      label: "facebook.com/mithun.mishra",
      href: "https://www.facebook.com/mithun.mishra",
    },
  ];

  return (
    <Motion.footer
      id="Footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-linear-to-br from-[#0d1b2a] via-[#1b263b] to-[#2c3e50] text-white pt-6 pb-4 px-8 md:px-20 rounded-t-3xl shadow-xl mt-20 overflow-hidden border-t border-gray-800"
    >
      {/* Soft background glow */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#ffb347]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#465697]/20 blur-3xl rounded-full"></div>

      <Motion.div
        className="relative flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* Left Section */}
        <Motion.div
          className="text-center md:text-left space-y-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#ffb347] drop-shadow-md">
            Let’s Connect
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md">
            I’m a journalist passionate about uncovering stories, sharing real
            experiences, and bringing meaningful narratives to the world. Always
            open to collaborations and new opportunities—let’s create impactful
            stories together.
          </p>
        </Motion.div>

        {/* Right Section */}
        <Motion.ul
          className="flex flex-col gap-5 text-sm md:text-lg font-medium text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {contactLinks.map((item, i) => (
            <Motion.li
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
            </Motion.li>
          ))}
        </Motion.ul>
      </Motion.div>

      {/* Divider with glow */}
      <Motion.div
        className="border-t border-gray-700 mt-6 pt-4 text-center text-xs md:text-sm text-gray-400 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="inline-block mb-2 text-[#ffb347] font-semibold tracking-wide">
          ✨ Thank you for visiting ✨
        </span>
        <br />© {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Mithun Mishra</span>. All
        Rights Reserved.
      </Motion.div>

      {/* Floating glow orb animation */}
      <Motion.div
        className="absolute top-10 right-10 w-6 h-6 bg-[#ffb347]/30 rounded-full blur-lg"
        animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </Motion.footer>
  );
};

export default Footer;
