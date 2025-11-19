import AboutImg from "../../assets/about_us.png";
import { IoArrowForward } from "react-icons/io5";
import { motion as Motion } from "framer-motion";

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
    <>
      <Motion.section
        id="About"
        className="text-white flex flex-col md:flex-row items-center justify-center bg-black bg-opacity-30 shadow-xl mx-4 md:mx-20 rounded-2xl p-8 md:py-12 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {/* Left: Image */}
        <Motion.div
          className="shrink-0 w-full max-w-md md:w-80 md:max-w-[320px] flex justify-center mb-8 md:mb-0 md:mr-10"
          variants={fadeUp}
        >
          <img
            className="w-full h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg object-contain"
            src={AboutImg}
            alt="About illustration"
          />
        </Motion.div>

        {/* Right: Content */}
        <div className="max-w-2xl">
          <Motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-4 text-[#ffb347]"
            variants={fadeUp}
          >
            About Me
          </Motion.h2>

          <Motion.p
            className="text-sm md:text-lg text-gray-200 leading-relaxed mb-8"
            variants={fadeUp}
          >
            I’m a dedicated{" "}
            <span className="font-semibold text-white">
              Journalist & Storyteller
            </span>{" "}
            with a passion for uncovering truth, exploring human stories, and
            presenting impactful narratives. My work focuses on bridging
            information with meaningful insight, ensuring every story connects
            with audiences deeply and authentically.
          </Motion.p>

          <Motion.ul className="space-y-6" variants={container}>
            <Motion.li className="flex items-start gap-3" variants={fadeUp}>
              <IoArrowForward size={24} className="text-[#ffb347] mt-1" />
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-white leading-normal">
                  Investigative Reporting
                </h3>
                <p className="text-sm md:text-md text-gray-300 leading-tight">
                  Experienced in covering complex issues, uncovering hidden
                  facts, and presenting well-researched, unbiased reports that
                  bring clarity to public understanding.
                </p>
              </div>
            </Motion.li>

            <Motion.li className="flex items-start gap-3" variants={fadeUp}>
              <IoArrowForward size={24} className="text-[#ffb347] mt-1" />
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-white leading-normal">
                  Feature Writing & Storytelling
                </h3>
                <p className="text-sm md:text-md text-gray-300 leading-tight">
                  Skilled in crafting human-centered stories, interviews, and
                  long-form narratives that highlight emotion, depth, and
                  real-life experiences.
                </p>
              </div>
            </Motion.li>

            <Motion.li className="flex items-start gap-3" variants={fadeUp}>
              <IoArrowForward size={24} className="text-[#ffb347] mt-1" />
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-white leading-normal">
                  Digital Media & Journalism
                </h3>
                <p className="text-sm md:text-md text-gray-300 leading-tight">
                  Proficient in modern digital reporting, content research,
                  social media journalism, and creating engaging multimedia
                  stories for online platforms.
                </p>
              </div>
            </Motion.li>
          </Motion.ul>
        </div>
      </Motion.section>
    </>
  );
};

export default About;
