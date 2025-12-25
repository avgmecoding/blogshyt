import Image from "next/image";

export default function ProfilePill() {
  return (
    <section className="flex ml-10 mt-10 grow px-3">
      <div className="flex items-center gap-6 bg-black/80 border border-dashed border-gray-700 rounded-2xl px-10 py-8 w-fit backdrop-blur-sm hover:border-gray-500 transition">
        <div className="relative w-45 h-33 rounded-full overflow-hidden ring-1 ring-gray-700 hover:scale-[1.03] transition">
          <Image
            src="/pfp.jpg"
            alt="Rajshri Patil"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col font-mono leading-tight">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-2xl tracking-tight">
              rajshri
            </span>
            <span className="text-gray-400 text-sm">🍂</span>
          </div>

          <span className="text-gray-400 text-lg mt-1">
            20y · cs undergrad · builder
          </span>
        </div>
      </div>
    </section>
  );
}
