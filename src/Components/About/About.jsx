import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.section
      id="About"
      className="text-white flex flex-col md:flex-row items-center justify-center bg-black bg-opacity-30 shadow-xl mx-4 md:mx-20 rounded-2xl p-8 md:p-12 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      {/* Left: Image */}
      <motion.div
        className="flex-shrink-0 w-full max-w-md md:w-80 md:max-w-[320px] flex justify-center mb-8 md:mb-0 md:mr-10"
        variants={fadeUp}
      >
        <img
          className="w-full h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg object-contain"
          src={AboutImg}
          alt="About illustration"
        />
      </motion.div>

      {/* Right: Content */}
      <div className="max-w-2xl">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-4 text-[#ffb347]"
          variants={fadeUp}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-sm md:text-lg text-gray-200 leading-relaxed mb-8"
          variants={fadeUp}
        >
          I’m a passionate{" "}
          <span className="font-semibold text-white">Full Stack Developer</span>{" "}
          with hands-on experience in building scalable and efficient web
          applications. I love transforming ideas into interactive, performant,
          and visually appealing digital solutions. My goal is to create
          seamless user experiences backed by strong and reliable backends.
        </motion.p>

        <motion.ul className="space-y-6" variants={container}>
          <motion.li
            className="flex items-start gap-3"
            variants={fadeUp}
          >
            <IoArrowForward size={24} className="text-[#ffb347] mt-1" />
            <div>
              <h3 className="text-lg md:text-2xl font-semibold text-white leading-normal">
                Frontend Developer
              </h3>
              <p className="text-sm md:text-md text-gray-300 leading-tight">
                Skilled in <span className="font-medium text-white">React.js</span>,{" "}
                <span className="font-medium text-white">Tailwind CSS</span>, and{" "}
                <span className="font-medium text-white">Ant Design</span> for
                creating responsive, accessible, and modern UIs.
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex items-start gap-3"
            variants={fadeUp}
          >
            <IoArrowForward size={24} className="text-[#ffb347] mt-1" />
            <div>
              <h3 className="text-lg md:text-2xl font-semibold text-white leading-normal">
                Backend Developer
              </h3>
              <p className="text-sm md:text-md text-gray-300 leading-tight">
                Experienced with <span className="font-medium text-white">Node.js</span>,{" "}
                <span className="font-medium text-white">Express.js</span>, and
                RESTful APIs. I enjoy designing efficient backend logic and
                integrating secure, scalable services.
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex items-start gap-3"
            variants={fadeUp}
          >
            <IoArrowForward size={24} className="text-[#ffb347] mt-1" />
            <div>
              <h3 className="text-lg md:text-2xl font-semibold text-white leading-normal">
                Database Developer
              </h3>
              <p className="text-sm md:text-md text-gray-300 leading-tight">
                Proficient with <span className="font-medium text-white">MongoDB</span>{" "}
                and <span className="font-medium text-white">PostgreSQL</span>. I
                focus on schema design, query optimization, and data integrity.
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default About;
