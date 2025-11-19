import { FaUniversity, FaSchool } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

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

// -----------------------------------
// 🎓 DYNAMIC EDUCATION DATA
// -----------------------------------
const educationData = [
  {
    icon: <FaUniversity size={36} color="#ffb347" />,
    title: "Master of Journalism (M.J)",
    school: "Uttar Pradesh Rajarshi Tandon Open University (UPRTOU), Prayagraj",
    year: "2019",
  },
  {
    icon: <FaUniversity size={32} color="#ffb347" />,
    title: "Bachelor of Arts (B.A)",
    school: "Nehru Gram Bharti University, Prayagraj",
    year: "2017",
  },
];

const Education = () => {
  return (
    <Motion.section
      id="Education"
      className="text-white bg-black bg-opacity-30 mx-4 md:mx-20 rounded-2xl shadow-xl p-8 md:p-12 my-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      <Motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-[#ffb347] mb-10"
        variants={item}
      >
        Education
      </Motion.h2>

      {/* ----------------------------------- */}
      {/*  Render Dynamic Education Cards */}
      {/* ----------------------------------- */}
      {educationData.map((edu, index) => (
        <Motion.div
          key={index}
          className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#0d1b2a] bg-opacity-60 border border-gray-700 rounded-xl p-6 md:p-10 mb-6 hover:shadow-[#ffb347]/30 transition-all duration-300"
          variants={item}
        >
          <div className="flex items-center gap-5 md:max-w-[75%] shrink">
            <div className="p-3 bg-[#ffb347] bg-opacity-20 border border-[#ffb347] rounded-full">
              {edu.icon}
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {edu.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">{edu.school}</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 text-right">
            <p className="text-[#ffb347] font-semibold text-sm md:text-base">
              {edu.year}
            </p>
          </div>
        </Motion.div>
      ))}
    </Motion.section>
  );
};

export default Education;
