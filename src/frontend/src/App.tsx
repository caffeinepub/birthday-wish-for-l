import { Balloons } from "./components/Balloons";
import { Confetti } from "./components/Confetti";
import { Sparkles } from "./components/Sparkles";

const loveMessages = [
  {
    id: 1,
    emoji: "🌟",
    text: "You're not just my boyfriend, you're my safe place, my best friend, and my favorite adventure. Happiest birthday, love!",
  },
  {
    id: 2,
    emoji: "🎁",
    text: "Every day with you feels like a gift, but today is all about celebrating the gift of YOU. Happy Birthday, darling!",
  },
  {
    id: 3,
    emoji: "🕯️",
    text: "Happy Birthday, my love! If kisses were candles, you'd need a fire extinguisher today. 🕯️🔥",
  },
  {
    id: 4,
    emoji: "🥜",
    text: "You're the peanut butter to my jam, the Netflix to my chill, and the chaos to my calm. Happy Birthday, sweetheart!",
  },
];

const photos = [
  "/assets/1-019d5e53-e4a6-7338-9932-6e8c7379ae9f.jpeg",
  "/assets/2-019d5e53-e487-715d-88a4-7194294656cc.jpeg",
  "/assets/3-019d5e53-e48f-735c-8bc9-e365a659ac6e.jpeg",
  "/assets/4-019d5e53-e5b3-77cc-8e99-5ad816a26805.jpeg",
  "/assets/5-019d5e53-e432-76df-ab1f-433a79bd6103.jpeg",
  "/assets/6-019d5e53-e644-759d-9c1d-425a3e32cb90.jpeg",
  "/assets/7-019d5e53-e561-7096-bbbf-dcf3c5d4e144.jpeg",
];

export default function App() {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-start py-10 px-4"
      style={{ background: "oklch(94% 0.04 240)" }}
    >
      {/* Background animated layers */}
      <Confetti />
      <Balloons />
      <Sparkles />

      {/* Main content card */}
      <main
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-main px-8 py-12 md:px-16 md:py-16"
        style={{
          zIndex: 10,
          boxShadow:
            "0 8px 60px rgba(30, 61, 90, 0.13), 0 2px 16px rgba(30, 61, 90, 0.07)",
        }}
        data-ocid="birthday.card"
      >
        {/* Decorative dots (top corners) */}
        <span
          aria-hidden="true"
          className="absolute top-5 left-6 text-2xl opacity-60"
        >
          ✦
        </span>
        <span
          aria-hidden="true"
          className="absolute top-5 right-6 text-2xl opacity-60"
        >
          ✦
        </span>

        {/* Hero section */}
        <section className="text-center mb-10" data-ocid="birthday.section">
          {/* Small icon row */}
          <div className="flex justify-center gap-4 mb-4 text-xl">
            <span aria-hidden="true">🎈</span>
            <span aria-hidden="true">🎂</span>
            <span aria-hidden="true">🎈</span>
          </div>

          {/* Main heading */}
          <h1
            className="hero-heading font-script text-navy leading-tight mb-3"
            style={{
              fontSize: "clamp(3rem, 9vw, 5.5rem)",
              color: "#1E3D5A",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="gold-shimmer">Happy Birthday</span>
            <br />
            <span style={{ color: "#1E3D5A" }}>L!</span>
          </h1>

          {/* Date subheading */}
          <p
            className="hero-sub text-sm md:text-base font-display tracking-widest uppercase mb-6"
            style={{ color: "#C9A35A", letterSpacing: "0.2em" }}
          >
            6th April 2008 — A day the world became a better place 🎂
          </p>

          {/* Divider with hearts */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div
              className="h-px flex-1 max-w-20"
              style={{
                background: "linear-gradient(to right, transparent, #C7D9EC)",
              }}
            />
            <span className="text-base" style={{ color: "#C9A35A" }}>
              ❤️
            </span>
            <span className="text-base" style={{ color: "#5B9BD5" }}>
              💙
            </span>
            <span className="text-base" style={{ color: "#C9A35A" }}>
              ❤️
            </span>
            <div
              className="h-px flex-1 max-w-20"
              style={{
                background: "linear-gradient(to left, transparent, #C7D9EC)",
              }}
            />
          </div>

          {/* Hero message */}
          <div
            className="hero-message rounded-2xl p-6 md:p-8 mx-auto max-w-xl"
            style={{
              background: "linear-gradient(135deg, #E6F0FB, #D7E6F6)",
              border: "1px solid #C7D9EC",
            }}
          >
            <p
              className="font-script text-lg md:text-xl leading-relaxed"
              style={{
                color: "#1E3D5A",
                fontSize: "clamp(1.1rem, 3vw, 1.35rem)",
              }}
            >
              &ldquo;Happy Birthday to the one who makes my heart race faster
              than Wi-Fi on 5G. You&rsquo;re my favorite notification every
              single day.&rdquo;
            </p>
          </div>
        </section>

        {/* Love message cards */}
        <section className="cards-row" data-ocid="birthday.list">
          <h2
            className="text-center font-script mb-8"
            style={{
              color: "#1E3D5A",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
            }}
          >
            With all the love in my heart 💌
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {loveMessages.map((msg, index) => (
              <div
                key={msg.id}
                className="wish-card rounded-2xl p-5 md:p-6 flex flex-col gap-3"
                style={{
                  background:
                    "linear-gradient(135deg, #E6F0FB 0%, #D7E6F6 100%)",
                  border: "1px solid #C7D9EC",
                  boxShadow: "0 4px 16px rgba(30, 61, 90, 0.08)",
                }}
                data-ocid={`birthday.item.${index + 1}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{msg.emoji}</span>
                  <div
                    className="h-px flex-1"
                    style={{ background: "#C7D9EC" }}
                  />
                </div>
                <p
                  className="font-body text-sm md:text-base leading-relaxed"
                  style={{ color: "#2E3C49" }}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ufffff text before photos */}
        <div className="text-center mt-12 mb-2">
          <p
            className="font-script"
            style={{
              color: "#1E3D5A",
              fontSize: "clamp(2rem, 6vw, 3.2rem)",
              letterSpacing: "0.05em",
            }}
          >
            ufffff 😩💙
          </p>
        </div>

        {/* Life, Laughter, Love Photo Section */}
        <section className="mt-4" data-ocid="birthday.panel">
          {/* Main section heading */}
          <div className="text-center mb-10">
            <h2
              className="font-script"
              style={{
                color: "#1E3D5A",
                fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Life, Laughter, Love ✨
            </h2>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div
                className="h-px flex-1 max-w-24"
                style={{
                  background: "linear-gradient(to right, transparent, #C7D9EC)",
                }}
              />
              <span style={{ color: "#5B9BD5" }}>💙</span>
              <div
                className="h-px flex-1 max-w-24"
                style={{
                  background: "linear-gradient(to left, transparent, #C7D9EC)",
                }}
              />
            </div>
          </div>

          {/* Life subsection */}
          <div className="mb-10" data-ocid="birthday.life.section">
            <h3
              className="font-script mb-4"
              style={{
                color: "#1E3D5A",
                fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
                letterSpacing: "0.01em",
              }}
            >
              🌿 Life
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[photos[0], photos[1]].map((src, index) => (
                <div
                  key={src}
                  className="photo-card overflow-hidden rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, #E6F0FB, #D7E6F6)",
                    border: "1px solid #C7D9EC",
                    boxShadow: "0 4px 16px rgba(30, 61, 90, 0.08)",
                  }}
                  data-ocid={`birthday.life.item.${index + 1}`}
                >
                  <img
                    src={src}
                    alt={`Life memory ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.35s ease",
                    }}
                    className="photo-img"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Love subsection */}
          <div data-ocid="birthday.love.section">
            <h3
              className="font-script mb-4"
              style={{
                color: "#1E3D5A",
                fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
                letterSpacing: "0.01em",
              }}
            >
              💙 Love
            </h3>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {[photos[2], photos[3], photos[4], photos[5], photos[6]].map(
                (src, index) => (
                  <div
                    key={src}
                    className="photo-card overflow-hidden rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, #E6F0FB, #D7E6F6)",
                      border: "1px solid #C7D9EC",
                      boxShadow: "0 4px 16px rgba(30, 61, 90, 0.08)",
                    }}
                    data-ocid={`birthday.love.item.${index + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Love memory ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.35s ease",
                      }}
                      className="photo-img"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Bottom heart decoration */}
        <div className="flex justify-center gap-2 mt-10 text-xl">
          <span aria-hidden="true">💙</span>
          <span aria-hidden="true">✨</span>
          <span aria-hidden="true">💙</span>
          <span aria-hidden="true">✨</span>
          <span aria-hidden="true">💙</span>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative mt-8 mb-4 text-center w-full max-w-3xl"
        style={{ zIndex: 10 }}
      >
        <p
          className="font-script text-lg md:text-xl mb-2"
          style={{ color: "#1E3D5A" }}
        >
          With all my love, always and forever ❤️
        </p>
        <p className="text-xs mt-3" style={{ color: "#7899B5" }}>
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5B9BD5" }}
            className="hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>

      {/* Photo hover zoom style */}
      <style>{`
        .photo-card:hover .photo-img {
          transform: scale(1.07);
        }
      `}</style>
    </div>
  );
}
