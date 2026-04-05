interface BalloonProps {
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  stringLength: number;
}

function BalloonSvg({
  x,
  color,
  size,
  delay,
  duration,
  stringLength,
}: BalloonProps) {
  const highlightColor = color === "#C9A35A" ? "#f0d898" : "#a8d0f5";
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-20px",
        left: `${x}%`,
        animation: `balloonRise ${duration}s ease-out ${delay}s both, sway 4s ease-in-out ${delay + 1}s infinite`,
        transformOrigin: "bottom center",
        pointerEvents: "none",
      }}
    >
      <svg
        role="img"
        aria-label="decorative balloon"
        width={size}
        height={size * 1.4 + stringLength}
        viewBox={`0 0 ${size} ${size * 1.4 + stringLength}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Balloon body */}
        <ellipse
          cx={size / 2}
          cy={size * 0.55}
          rx={size * 0.42}
          ry={size * 0.5}
          fill={color}
          opacity="0.9"
        />
        {/* Highlight */}
        <ellipse
          cx={size * 0.38}
          cy={size * 0.32}
          rx={size * 0.1}
          ry={size * 0.14}
          fill={highlightColor}
          opacity="0.55"
        />
        {/* Knot */}
        <ellipse
          cx={size / 2}
          cy={size * 1.06}
          rx={size * 0.07}
          ry={size * 0.07}
          fill={color}
        />
        {/* String */}
        <path
          d={`M${size / 2} ${size * 1.1} Q${size / 2 + size * 0.12} ${size * 1.1 + stringLength * 0.4} ${size / 2} ${size * 1.1 + stringLength}`}
          stroke="#999"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="3 2"
        />
      </svg>
    </div>
  );
}

const BALLOONS: BalloonProps[] = [
  {
    x: 2,
    color: "#5B9BD5",
    size: 54,
    delay: 0.2,
    duration: 12,
    stringLength: 38,
  },
  {
    x: 8,
    color: "#C9A35A",
    size: 44,
    delay: 0.8,
    duration: 14,
    stringLength: 32,
  },
  {
    x: 14,
    color: "#89BCE8",
    size: 60,
    delay: 0.0,
    duration: 16,
    stringLength: 44,
  },
  {
    x: 82,
    color: "#3A7DC9",
    size: 56,
    delay: 0.5,
    duration: 13,
    stringLength: 40,
  },
  {
    x: 88,
    color: "#C9A35A",
    size: 48,
    delay: 1.2,
    duration: 15,
    stringLength: 36,
  },
  {
    x: 93,
    color: "#7FBDE8",
    size: 52,
    delay: 0.3,
    duration: 11,
    stringLength: 34,
  },
  {
    x: 98,
    color: "#2E6FAA",
    size: 42,
    delay: 1.6,
    duration: 17,
    stringLength: 30,
  },
  {
    x: 5,
    color: "#D4B069",
    size: 38,
    delay: 2.0,
    duration: 13,
    stringLength: 28,
  },
];

export function Balloons() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {BALLOONS.map((b) => (
        <BalloonSvg key={`balloon-${b.x}-${b.color}`} {...b} />
      ))}
    </div>
  );
}
