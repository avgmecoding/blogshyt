import {
  FaJs, FaReact, FaGitAlt, FaGithub, FaLinux, FaNodeJs, FaFigma
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiGo, SiPython, SiMongodb, SiPostman, SiExpress
} from "react-icons/si";

export default function TechCard() {
  const stack = [
    { Icon: FaJs, name: "JavaScript", color: "group-hover/icon:text-yellow-400" },
    { Icon: SiTypescript, name: "TypeScript", color: "group-hover/icon:text-blue-400" },
    { Icon: FaReact, name: "React", color: "group-hover/icon:text-cyan-400" },
    { Icon: SiNextdotjs, name: "Next.js", color: "group-hover/icon:text-white" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "group-hover/icon:text-sky-400" },
    { Icon: SiGo, name: "Go", color: "group-hover/icon:text-cyan-500" },
    { Icon: SiPython, name: "Python", color: "group-hover/icon:text-yellow-300" },
    { Icon: FaNodeJs, name: "Node.js", color: "group-hover/icon:text-green-500" },
    { Icon: SiExpress, name: "Express", color: "group-hover/icon:text-gray-400" },
    { Icon: SiMongodb, name: "MongoDB", color: "group-hover/icon:text-green-400" },
    { Icon: FaGitAlt, name: "Git", color: "group-hover/icon:text-orange-500" },
    { Icon: FaGithub, name: "GitHub", color: "group-hover/icon:text-white" },
    { Icon: FaLinux, name: "Linux", color: "group-hover/icon:text-yellow-200" },
    { Icon: SiPostman, name: "Postman", color: "group-hover/icon:text-orange-400" },
    { Icon: FaFigma, name: "Figma", color: "group-hover/icon:text-pink-400" },
  ];

  return (
    <div className="group relative w-full max-w-md">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000" />
      
      <div className="relative bg-[#080808] border border-zinc-800/50 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-sm font-mono font-bold tracking-[0.3em] text-zinc-400 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              Tech Stack
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-px bg-zinc-800/30 border border-zinc-800/50 rounded-xl overflow-hidden">
          {stack.map(({ Icon, name, color }, index) => (
            <div 
              key={index} 
              className="group/icon relative bg-[#0A0A0A] aspect-square flex flex-col items-center justify-center transition-all duration-300 hover:bg-zinc-900/40"
            >
              <Icon className={`text-2xl text-zinc-600 transition-all duration-500 group-hover/icon:scale-125 ${color} group-hover/icon:drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]`} />
              
              <span className="absolute bottom-1.5 text-[7px] font-mono text-zinc-500 opacity-0 group-hover/icon:opacity-100 transition-all transform translate-y-1 group-hover/icon:translate-y-0 uppercase tracking-tighter">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}