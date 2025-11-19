import { FaUniversity, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Education = () => {
  return (
    <motion.section
      id="Education"
      className="text-white bg-black bg-opacity-30 mx-4 md:mx-20 rounded-2xl shadow-xl p-8 md:p-12 my-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-[#ffb347] mb-10"
        variants={item}
      >
        Education
      </motion.h2>

      {/* B.Tech */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#0d1b2a] bg-opacity-60 border border-gray-700 rounded-xl p-6 md:p-10 mb-6 hover:shadow-[#ffb347]/30 transition-all duration-300"
        variants={item}
      >
        <div className="flex items-center gap-4 md:gap-5 md:max-w-[75%] flex-shrink">
          <div className="p-3 bg-[#ffb347] bg-opacity-20 border border-[#ffb347] rounded-full">
            <FaUniversity size={36} color="#ffb347" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              Kalinga Institute of Industrial Technology (KIIT-DU)
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-[#ffb347] font-semibold text-sm md:text-base">
            2018 – 2022
          </p>
        </div>
      </motion.div>

      {/* Higher Secondary */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#0d1b2a] bg-opacity-60 border border-gray-700 rounded-xl p-6 md:p-10 mb-6 hover:shadow-[#ffb347]/30 transition-all duration-300"
        variants={item}
      >
        <div className="flex items-center gap-5">
          <div className="p-3 bg-[#ffb347] bg-opacity-20 border border-[#ffb347] rounded-full">
            <FaSchool size={32} color="#ffb347" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Higher Secondary Education
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              Kendriya Vidyalaya, Panagarh
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-[#ffb347] font-semibold text-sm md:text-base">
            2017 – 2018
          </p>
        </div>
      </motion.div>

      {/* School */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#0d1b2a] bg-opacity-60 border border-gray-700 rounded-xl p-6 md:p-10 hover:shadow-[#ffb347]/30 transition-all duration-300"
        variants={item}
      >
        <div className="flex items-center gap-5">
          <div className="p-3 bg-[#ffb347] bg-opacity-20 border border-[#ffb347] rounded-full">
            <FaSchool size={32} color="#ffb347" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Secondary School Education
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              Kendriya Vidyalaya, Panagarh
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-[#ffb347] font-semibold text-sm md:text-base">
            2015 – 2016
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
