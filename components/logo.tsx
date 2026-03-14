"use client";

export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon - represents structure/technology */}
      <path
        d="M60 8L104 32V78L60 102L16 78V32L60 8Z"
        stroke="#218BC3"
        strokeWidth="3"
        fill="none"
      />
      {/* Inner circuit paths - represents AI/neural connections */}
      <path
        d="M60 28L84 42V68L60 82L36 68V42L60 28Z"
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      {/* Central brain/node - AI core */}
      <circle cx="60" cy="55" r="12" fill="#218BC3" />
      <circle cx="60" cy="55" r="7" fill="#0D1B2A" />
      <circle cx="60" cy="55" r="3" fill="#218BC3" />
      {/* Connection nodes */}
      <circle cx="60" cy="28" r="4" fill="white" />
      <circle cx="84" cy="42" r="4" fill="#218BC3" />
      <circle cx="84" cy="68" r="4" fill="#1E8B4C" />
      <circle cx="60" cy="82" r="4" fill="white" />
      <circle cx="36" cy="68" r="4" fill="#E67E22" />
      <circle cx="36" cy="42" r="4" fill="#218BC3" />
      {/* Neural connection lines from center to nodes */}
      <line x1="60" y1="43" x2="60" y2="32" stroke="white" strokeWidth="1.5" opacity="0.7" />
      <line x1="70" y1="49" x2="80" y2="42" stroke="#218BC3" strokeWidth="1.5" opacity="0.7" />
      <line x1="70" y1="61" x2="80" y2="68" stroke="#1E8B4C" strokeWidth="1.5" opacity="0.7" />
      <line x1="60" y1="67" x2="60" y2="78" stroke="white" strokeWidth="1.5" opacity="0.7" />
      <line x1="50" y1="61" x2="40" y2="68" stroke="#E67E22" strokeWidth="1.5" opacity="0.7" />
      <line x1="50" y1="49" x2="40" y2="42" stroke="#218BC3" strokeWidth="1.5" opacity="0.7" />
      {/* Human figure silhouette - small, integrated */}
      <path
        d="M55 50C55 47.2 57.2 45 60 45C62.8 45 65 47.2 65 50"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Logo size={40} />
      <div className="flex flex-col leading-tight">
        <span className="text-white font-bold text-base tracking-tight">AI Consulting</span>
        <span className="text-accent-blue font-medium text-xs tracking-wider uppercase">Partners</span>
      </div>
    </div>
  );
}

export function LogoFullMobile({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo size={32} />
    </div>
  );
}
