interface SparkleItem {
  id: number;
  top: number;
  left: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  type: "heart" | "star" | "sparkle";
}

function HeartSvg({ size, color }: { size: number; color: string }) {
  return (
    <svg
      role="img"
      aria-label="decorative heart"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function StarSvg({ size, color }: { size: number; color: string }) {
  return (
    <svg
      role="img"
      aria-label="decorative star"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function SparkleSvg({ size, color }: { size: number; color: string }) {
  return (
    <svg
      role="img"
      aria-label="decorative sparkle"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1v4M12 19v4M1 12h4M19 12h4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M19.78 4.22l-2.83 2.83M7.05 16.95l-2.83 2.83"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="12" r="2.5" fill={color} />
    </svg>
  );
}

const SPARKLE_ITEMS: SparkleItem[] = [
  {
    id: 1,
    top: 8,
    left: 12,
    size: 18,
    color: "#C9A35A",
    delay: 0,
    duration: 2.4,
    type: "star",
  },
  {
    id: 2,
    top: 15,
    left: 75,
    size: 14,
    color: "#5B9BD5",
    delay: 0.8,
    duration: 2.0,
    type: "heart",
  },
  {
    id: 3,
    top: 25,
    left: 90,
    size: 16,
    color: "#C9A35A",
    delay: 1.2,
    duration: 2.8,
    type: "sparkle",
  },
  {
    id: 4,
    top: 40,
    left: 6,
    size: 20,
    color: "#89BCE8",
    delay: 0.4,
    duration: 2.2,
    type: "heart",
  },
  {
    id: 5,
    top: 55,
    left: 94,
    size: 12,
    color: "#C9A35A",
    delay: 1.6,
    duration: 3.0,
    type: "star",
  },
  {
    id: 6,
    top: 70,
    left: 18,
    size: 15,
    color: "#5B9BD5",
    delay: 0.9,
    duration: 2.5,
    type: "sparkle",
  },
  {
    id: 7,
    top: 80,
    left: 85,
    size: 18,
    color: "#C9A35A",
    delay: 0.3,
    duration: 2.0,
    type: "heart",
  },
  {
    id: 8,
    top: 60,
    left: 50,
    size: 13,
    color: "#89BCE8",
    delay: 1.1,
    duration: 2.7,
    type: "star",
  },
  {
    id: 9,
    top: 30,
    left: 30,
    size: 10,
    color: "#D4B069",
    delay: 2.0,
    duration: 2.3,
    type: "sparkle",
  },
  {
    id: 10,
    top: 88,
    left: 40,
    size: 16,
    color: "#5B9BD5",
    delay: 0.6,
    duration: 3.2,
    type: "heart",
  },
  {
    id: 11,
    top: 5,
    left: 55,
    size: 12,
    color: "#C9A35A",
    delay: 1.4,
    duration: 2.1,
    type: "star",
  },
  {
    id: 12,
    top: 72,
    left: 63,
    size: 14,
    color: "#7FBDE8",
    delay: 0.2,
    duration: 2.6,
    type: "sparkle",
  },
];

export function Sparkles() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {SPARKLE_ITEMS.map((item) => (
        <div
          key={item.id}
          className={item.type === "heart" ? "heart-pulse" : "sparkle-twinkle"}
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.type === "heart" && (
            <HeartSvg size={item.size} color={item.color} />
          )}
          {item.type === "star" && (
            <StarSvg size={item.size} color={item.color} />
          )}
          {item.type === "sparkle" && (
            <SparkleSvg size={item.size} color={item.color} />
          )}
        </div>
      ))}
    </div>
  );
}
