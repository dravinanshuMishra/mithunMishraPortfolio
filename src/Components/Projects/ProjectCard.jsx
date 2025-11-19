import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, main, tech, github, live, image }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col bg-[#0c0e19] bg-opacity-80 shadow-xl shadow-slate-900 rounded-2xl hover:shadow-[#ffb347]/20 transition-all duration-300 max-w-sm md:max-w-md w-full">
      {/* Image */}
      <img
        src={image || bannerImg}
        alt={title}
        className="rounded-xl mb-4 object-cover w-full h-40 md:h-48"
      />

      {/* Title */}
      <h3 className="px-2 text-xl md:text-2xl font-bold leading-normal text-[#ffb347]">
        {title}
      </h3>

      {/* Description */}
      <p className="px-2 text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>

      {/* Technologies */}
      {tech && (
        <div className="flex flex-wrap gap-2 px-2 mt-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-[#ffb347] bg-opacity-20 text-[#ffb347] font-medium px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      {/* <div className="mt-4 flex flex-col sm:flex-row gap-3 px-2 w-full">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 py-2 rounded-3xl bg-[#465697] text-white font-semibold text-sm md:text-base hover:opacity-85 hover:scale-105 transition-all duration-300"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 py-2 rounded-3xl bg-[#465697] text-white font-semibold text-sm md:text-base hover:opacity-85 hover:scale-105 transition-all duration-300"
          >
            <FaGithub /> Source Code
          </a>
        )}
      </div> */}

      <div className="mt-4 flex flex-col sm:flex-row gap-3 px-2 w-full">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
        flex items-center justify-center gap-2
        flex-1 sm:basis-[40%] md:basis-[39%] 
        py-2 rounded-3xl 
        bg-[#465697] text-white font-semibold 
        text-sm md:text-base 
        hover:opacity-85 hover:scale-105 
        transition-all duration-300
      "
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
        flex items-center justify-center gap-2
        flex-1 sm:basis-[60%] md:basis-[61%]
        py-2 rounded-3xl 
        bg-[#465697] text-white font-semibold 
        text-sm md:text-base 
        hover:opacity-85 hover:scale-105 
        transition-all duration-300
      "
          >
            <FaGithub /> Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
