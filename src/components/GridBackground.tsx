"use client";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dot grid via CSS background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(148 163 184 / 0.12) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "20px 20px",
        }}
      />

      {/* Radial gradient glow / vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 40%, rgb(249 115 22 / 0.03) 0%, transparent 70%),
            radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgb(255 255 255 / 0.8) 100%)
          `,
        }}
      />

      {/* Top fade for nav area */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgb(255 255 255 / 0.9), transparent)",
        }}
      />
    </div>
  );
}
