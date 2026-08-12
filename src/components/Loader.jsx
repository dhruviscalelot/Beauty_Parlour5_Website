import React from 'react'

const anglesPrimary = [0, 45, 90, 135, 180, 225, 270, 315]
const anglesSecondary = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5]

const particles = [
  { cx: 48, cy: 52, r: 2.2, delay: '0s' },
  { cx: 188, cy: 58, r: 2.8, delay: '0.7s' },
  { cx: 38, cy: 145, r: 1.8, delay: '1.4s' },
  { cx: 198, cy: 165, r: 2.5, delay: '0.3s' },
  { cx: 78, cy: 28, r: 1.5, delay: '1.9s' },
  { cx: 162, cy: 210, r: 2.2, delay: '1.1s' },
  { cx: 110, cy: 12, r: 1.8, delay: '0.5s' },
  { cx: 215, cy: 105, r: 2.0, delay: '1.7s' },
  { cx: 28, cy: 95, r: 1.6, delay: '0.9s' },
]

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center justify-center p-6">
        {/* Animated Vector Sacred Geometry Mandala Logo */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
          <svg
            viewBox="0 0 240 240"
            className="w-full h-full drop-shadow-[0_0_18px_rgba(232,180,184,0.3)]"
          >
            <defs>
              <linearGradient id="roseGoldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F6D5C7" />
                <stop offset="40%" stopColor="#E4B19F" />
                <stop offset="75%" stopColor="#C98F7E" />
                <stop offset="100%" stopColor="#F3D0C3" />
              </linearGradient>
              <linearGradient id="roseGoldShine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E4B19F" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E4B19F" />
              </linearGradient>
            </defs>

            {/* Ambient Floating Particle Dots */}
            <g className="opacity-80">
              {particles.map((p, idx) => (
                <circle
                  key={idx}
                  cx={p.cx}
                  cy={p.cy}
                  r={p.r}
                  fill="url(#roseGoldMetal)"
                  className="animate-particle"
                  style={{ animationDelay: p.delay }}
                />
              ))}
            </g>

            {/* Outer Spinning Dash Arc Rings */}
            <g className="animate-luxe-spin">
              <circle
                cx="120"
                cy="120"
                r="104"
                fill="none"
                stroke="url(#roseGoldMetal)"
                strokeWidth="1.2"
                strokeDasharray="420 50"
                opacity="0.85"
              />
              <circle
                cx="120"
                cy="120"
                r="110"
                fill="none"
                stroke="url(#roseGoldMetal)"
                strokeWidth="0.8"
                strokeDasharray="15 30"
                opacity="0.4"
              />
            </g>

            {/* Inner Counter-Rotating Outer Circle Frame */}
            <g className="animate-luxe-spin-reverse">
              <circle
                cx="120"
                cy="120"
                r="96"
                fill="none"
                stroke="url(#roseGoldMetal)"
                strokeWidth="1.5"
                opacity="0.95"
              />
              <circle
                cx="120"
                cy="120"
                r="92"
                fill="none"
                stroke="url(#roseGoldMetal)"
                strokeWidth="0.8"
                strokeDasharray="4 8"
                opacity="0.6"
              />
            </g>

            {/* Pulsing Central 8-Petal Mandala Flower Blossom */}
            <g className="animate-mandala-pulse">
              {/* Outer 8 Main Petals */}
              {anglesPrimary.map((angle) => (
                <path
                  key={`p-main-${angle}`}
                  d="M 120 120 C 96 82, 104 46, 120 32 C 136 46, 144 82, 120 120 Z"
                  fill="none"
                  stroke="url(#roseGoldMetal)"
                  strokeWidth="1.3"
                  transform={`rotate(${angle} 120 120)`}
                  opacity="0.95"
                />
              ))}

              {/* Intersecting 8 Secondary Petals */}
              {anglesSecondary.map((angle) => (
                <path
                  key={`p-sec-${angle}`}
                  d="M 120 120 C 106 92, 110 68, 120 54 C 130 68, 134 92, 120 120 Z"
                  fill="none"
                  stroke="url(#roseGoldMetal)"
                  strokeWidth="1"
                  transform={`rotate(${angle} 120 120)`}
                  opacity="0.75"
                />
              ))}

              {/* Inner Sacred Geometry Circle & Center Pearl Dot */}
              <circle
                cx="120"
                cy="120"
                r="18"
                fill="none"
                stroke="url(#roseGoldMetal)"
                strokeWidth="1"
                opacity="0.9"
              />
              <circle
                cx="120"
                cy="120"
                r="5"
                fill="url(#roseGoldShine)"
                className="drop-shadow-[0_0_8px_#F6D5C7]"
              />
            </g>
          </svg>
        </div>

        {/* Premium Brand Title & Tagline */}
        <div className="mt-6 text-center tracking-widest">
          <h1 className="text-blush-deep text-lg sm:text-xl font-medium uppercase tracking-[0.35em] mb-2 font-Lexend">
            Luxe Salon &amp; Spa
          </h1>
          <p className="text-xs sm:text-sm font-bold italic font-Lexend text-muted-foreground">
            Tranquility awaits
          </p>
        </div>
      </div>
    </div>
  )
}


export default Loader

