import {
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaNodeJs,
  FaFigma
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGo,
  SiPython,
  SiMongodb,
  SiPostman,
  SiExpress
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="bg-black w-210 ml-87 justify-start border border-dashed border-gray-700 rounded-2xl p-6">
      <div className="flex flex-wrap w-200 justify-center gap-4 text-gray-300">
        <FaJs className="text-xl hover:text-yellow-400 transition" />
        <SiTypescript className="text-xl hover:text-blue-400 transition" />
        <FaReact className="text-xl hover:text-cyan-400 transition" />
        <SiNextdotjs className="text-xl hover:text-white transition" />
        <SiTailwindcss className="text-xl hover:text-sky-400 transition" />
        <SiGo className="text-xl hover:text-cyan-500 transition" />
        <SiPython className="text-xl hover:text-yellow-300 transition" />
        <FaNodeJs className="text-xl hover:text-green-500 transition" />
        <SiExpress className="text-xl hover:text-gray-400 transition" />
        <SiMongodb className="text-xl hover:text-green-400 transition" />
        <FaGitAlt className="text-xl hover:text-orange-500 transition" />
        <FaGithub className="text-xl hover:text-white transition" />
        <FaLinux className="text-xl hover:text-yellow-200 transition" />
        <SiPostman className="text-xl hover:text-orange-400 transition" />
        <FaFigma className="text-xl hover:text-pink-400 transition" />
      </div>
    </div>
  );
}
