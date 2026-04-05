import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  rotation: number;
  shape: "rect" | "circle" | "diamond";
}

const CONFETTI_COLORS = [
  "#5B9BD5",
  "#3A7DC9",
  "#89BCE8",
  "#C9A35A",
  "#E0C278",
  "#B8D9F5",
  "#7FBDE8",
  "#D4B069",
  "#2E6FAA",
  "#A8D0EF",
];

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generated: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 8 + 5,
      color:
        CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 15,
      rotation: Math.random() * 360,
      shape: (["rect", "circle", "diamond"] as const)[
        Math.floor(Math.random() * 3)
      ],
    }));
    setPieces(generated);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            left: `${p.left}%`,
            width: p.shape === "rect" ? `${p.size * 1.6}px` : `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius:
              p.shape === "circle"
                ? "50%"
                : p.shape === "diamond"
                  ? "0"
                  : "2px",
            transform:
              p.shape === "diamond"
                ? `rotate(${p.rotation}deg) rotate(45deg)`
                : `rotate(${p.rotation}deg)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
