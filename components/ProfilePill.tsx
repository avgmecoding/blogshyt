import Image from "next/image";

export default function ProfilePill() {
  return (
    <div className="group relative flex items-center gap-6 bg-[#0A0A0A] border border-dashed border-zinc-800 rounded-3xl p-4 pr-10 transition-all duration-300 hover:border-zinc-400">
      
      <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden border border-zinc-800 ring-4 ring-black group-hover:scale-105 transition-transform duration-500">
        <Image
          src="/pfp.jpg"
          alt="Rajshri Patil"
          fill
          className="object-cover transition-all duration-500"
          priority
        />
      </div>

      <div className="flex flex-col font-mono leading-tight">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-2xl tracking-tighter">
            rajshri
          </span>
          <span className="text-xl animate-pulse duration-1000">🍂</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-500 text-sm mt-1 uppercase tracking-wider">
          <span className="hover:text-zinc-300 transition-colors cursor-default">20y</span>
          <span className="text-zinc-800">•</span>
          <span className="hover:text-zinc-300 transition-colors cursor-default">cs undergrad</span>
          <span className="text-zinc-800">•</span>
          <span className="text-zinc-400 font-bold">builder</span>
        </div>
      </div>

    </div>
  );
}