// "use client";
// import { motion } from "framer-motion";
// import ProjectCard from "./ProjectCard";

// const containerVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.2,
//       ease: "easeOut",
//       duration: 0.6,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 25 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
// };

// const Projects = () => {
//   const projects = [
//     {
//       title: "SwiftMart Shopping Website 🛒",
//       main: "A full-stack e-commerce platform built using React.js, Node.js, Express.js, and MongoDB. Features include product listing, authentication, cart management, and order tracking. Designed with Tailwind CSS for a seamless shopping experience.",
//       tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Ant Design", "Cloudinary", "Razorpay"],
//       github: "https://github.com/yourusername/swiftmart",
//       live: "https://swiftmart-demo.vercel.app",
//     },
//     {
//       title: "Email Application ✉️",
//       main: "A web-based email management system for composing, sending, and receiving emails in real-time. Developed with React, Node.js, and MongoDB. Implements authentication, email filtering, and responsive UI.",
//       tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Ant Design", "Socket.io"],
//       github: "https://github.com/yourusername/email-app",
//       live: "https://emailapp-demo.vercel.app",
//     },
//     {
//       title: "SwiftMart Shopping Website 🛒",
//       main: "A full-stack e-commerce platform built using React.js, Node.js, Express.js, and MongoDB. Features include product listing, authentication, cart management, and order tracking. Designed with Tailwind CSS for a seamless shopping experience.",
//       tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Ant Design", "Cloudinary", "Razorpay"],
//       github: "https://github.com/yourusername/swiftmart",
//       live: "https://swiftmart-demo.vercel.app",
//     },
//     {
//       title: "Email Application ✉️",
//       main: "A web-based email management system for composing, sending, and receiving emails in real-time. Developed with React, Node.js, and MongoDB. Implements authentication, email filtering, and responsive UI.",
//       tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Ant Design", "Socket.io"],
//       github: "https://github.com/yourusername/email-app",
//       live: "https://emailapp-demo.vercel.app",
//     },
//   ];

//   return (
//     <motion.section
//       id="Projects"
//       className="px-6 md:px-20 py-16 text-white bg-black bg-opacity-30 rounded-2xl shadow-xl mx-4 md:mx-20 my-10"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={containerVariants}
//     >
//       {/* Header */}
//       <motion.div className="text-center mb-10" variants={itemVariants}>
//         <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffb347]">
//           Projects
//         </h2>
//         <p className="text-gray-300 mt-2 text-sm md:text-base">
//           Some of my key full-stack projects built with modern web technologies.
//         </p>
//       </motion.div>

//       {/* CONSTRAINED WRAPPER -> centers content on very large screens */}
//       <div className="max-w-6xl mx-auto">
//         {/* Project Cards Grid
//             - justify-items-center keeps each card centered in its grid cell
//             - grid auto-rows ensures vertical alignment looks good 
//         */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6 justify-items-center"
//           variants={containerVariants}
//         >
//           {projects.map((project, index) => (
//             <motion.div key={index} variants={itemVariants} className="w-full flex justify-center">

//               <ProjectCard {...project} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;


"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "SwiftMart Shopping Website 🛒",
      main: "A full-stack e-commerce platform built using React.js, Node.js, Express.js, and MongoDB. Features include product listing, authentication, cart management, and order tracking. Designed with Tailwind CSS for a seamless shopping experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Ant Design", "Cloudinary", "Razorpay"],
      github: "https://github.com/shoping-application",
      live: "https://swiftmartshopping.netlify.app/",
    },
    {
      title: "Email Application ✉️",
      main: "A real-time email management app for composing, sending, and receiving mails. Built with React, Node.js, MongoDB, and Socket.io for instant updates and modern UI.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      github: "https://github.com/Email-Service2",
      live: "https://emailservice2.netlify.app/",
    }
  ];

  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const handleNext = () => setCurrent((prev) => (prev + 1) % total);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section
      id="Projects"
      className="relative flex flex-col items-center justify-center py-16 px-4 md:px-12 text-white bg-black bg-opacity-30 rounded-2xl shadow-xl mx-4 md:mx-20 my-10 overflow-hidden"
    >
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffb347] text-center ">
        Featured Projects
      </h2>

      <p className="text-gray-300 text-center mt-6 text-sm md:text-base ">
        A showcase of my most impactful full-stack projects, built with modern web technologies.
      </p>

      {/* 3D Carousel */}
      <div
        className="relative flex items-center justify-center w-full max-w-5xl h-[550px]"
        style={{ perspective: "1200px" }}
      >
        {projects.map((project, i) => {
          const offset = (i - current + total) % total;
          const isActive = offset === 0;

          const styles = {
            scale: isActive ? 1 : 0.8,
            opacity: isActive ? 1 : 0.4,
            zIndex: total - offset,
            x:
              offset === 0
                ? 0
                : offset === 1
                  ? 220
                  : offset === total - 1
                    ? -220
                    : 0,
            rotateY:
              offset === 0
                ? 0
                : offset === 1
                  ? -10
                  : offset === total - 1
                    ? 10
                    : 0,
            filter: isActive ? "none" : "blur(3px)",
          };

          return (
            <motion.div
              key={i}
              animate={styles}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute"
            >
              <ProjectCard {...project} />
            </motion.div>
          );
        })}

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 bg-[#ffb347]/20 hover:bg-[#ffb347]/40 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 bg-[#ffb347]/20 hover:bg-[#ffb347]/40 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Thumbnail Row */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 mt-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrent(i)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${i === current
              ? "border-[#ffb347] scale-105 shadow-lg shadow-[#ffb347]/30"
              : "border-transparent opacity-60 hover:opacity-100"
              }`}
          >
            {/* small preview */}
            <div className="relative group w-[90px] h-[60px] sm:w-[110px] sm:h-[75px] md:w-[120px] md:h-[80px] bg-[#0c0e19] overflow-hidden rounded-lg">
              <img
                src={
                  project.image ||
                  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600"
                }
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-xs sm:text-sm text-white font-semibold text-center px-2">
                  {project.title}
                </p>
              </div>
            </div>


          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
