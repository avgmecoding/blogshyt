export default function WaveBackground() {
  const totalLines = 45;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#070709]">
      {/* 1. Ultra-Subtle Professional Vignette & Deep Ambient Gloom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/30 via-[#070709] to-[#040405] pointer-events-none z-0" />
      
      {/* 2. Soft, Desaturated Corporate Steel-Blue Backlight Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-blue-500/[0.03] to-transparent rounded-full blur-[160px] pointer-events-none z-0" />

      {/* 3. High-Precision Technical Engineering Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.012] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] z-0" />

      <svg
        className="absolute w-full h-full z-0 opacity-[0.65]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Muted Premium Steel Slate Gradient */}
          <linearGradient id="professional-slate" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(63, 63, 70, 0)" />
            <stop offset="30%" stopColor="rgba(113, 113, 122, 0.18)" />
            <stop offset="70%" stopColor="rgba(147, 51, 234, 0.04)" />
            <stop offset="100%" stopColor="rgba(63, 63, 70, 0)" />
          </linearGradient>
        </defs>

        {Array.from({ length: totalLines }).map((_, i) => {
          const progress = i / totalLines;
          
          // Compressed, tight linear vertical distribution
          const y = 200 + i * 12;

          // Highly disciplined, uniform mathematical curve frequencies (removes erratic bends)
          const waveHeight1 = 90 * Math.sin(progress * Math.PI * 1.2);
          const waveHeight2 = 70 * Math.cos(progress * Math.PI * 1.5);

          // Taper lines out dynamically at the very top and bottom margins
          const boundaryFade = Math.sin(progress * Math.PI); 
          const strokeWidth = (0.5 + boundaryFade * 0.5).toFixed(2);
          const opacity = (boundaryFade * 0.75).toFixed(2);

          const pathData = `
            M 0 ${y}
            C 400 ${y - waveHeight1},
              800 ${y + waveHeight2},
              1200 ${y - waveHeight1 * 0.5}
            S 1400 ${y + waveHeight2 * 0.3},
              1600 ${y}
          `;

          return (
            <path
              key={i}
              d={pathData}
              fill="none"
              stroke="url(#professional-slate)"
              strokeWidth={strokeWidth}
              opacity={opacity}
            />
          );
        })}
      </svg>
    </div>
  );
}