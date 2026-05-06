"use client";
import Link from "next/link";

export default function UniJumpProject() {
  const tech = ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Vercel", "Git", "GitHub"];
  const points = [
    "Designed and developed a modern international education platform for student onboarding and university applications",
    "Built a responsive and SEO-friendly frontend using Next.js and Tailwind CSS",
    "Implemented reusable component-based architecture for scalability and maintainability",
    "Developed secure authentication system with login functionality",
    "Created user dashboard for managing student data and application processes",
    "Integrated backend APIs for handling user data, authentication, and application workflows",
    "Built backend services using Node.js and Express.js",
    "Designed and structured database using MongoDB for efficient data management",
    "Implemented form handling and validation for student applications",
    "Optimized performance and page load speed using Next.js features",
    "Ensured clean UI/UX for smooth navigation and better user experience",
    "Managed version control and collaboration using Git and GitHub",
    "Deployed the platform using Vercel for production and scalability",
  ];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f0f0f0", fontFamily: "Inter, sans-serif" }}>
      {/* Back nav */}
      <div style={{ padding: "24px 40px" }}>
        <Link href="/" style={{ color: "#ff3c00", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em" }}>
          ← BACK
        </Link>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <span style={{ fontSize: "3rem" }}>🎓</span>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.03em", margin: "16px 0 8px", color: "#fff" }}>
          UniJump
        </h1>
        <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: 32 }}>International Education Platform</p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          {tech.map((t) => (
            <span
              key={t}
              style={{
                background: "rgba(255,60,0,0.1)",
                border: "1px solid rgba(255,60,0,0.25)",
                color: "#ff6a00",
                padding: "4px 12px",
                borderRadius: 20,
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <p style={{ color: "#aaa", lineHeight: 1.8, marginBottom: 40, fontSize: "0.95rem" }}>
          UniJump is a comprehensive international education platform designed to help students
          navigate the complex process of applying to universities worldwide. The platform provides
          a seamless experience from onboarding to application submission.
        </p>

        {/* Points */}
        <h2 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: 20 }}>
          What I Built
        </h2>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
          {points.map((pt, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                fontSize: "0.85rem",
                color: "#bbb",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "#ff3c00", flexShrink: 0, marginTop: 2 }}>▸</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
