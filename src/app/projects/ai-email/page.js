"use client";
import Link from "next/link";

export default function AIEmailProject() {
  const tech = ["AI", "Node.js", "Express.js", "React", "REST APIs", "MongoDB"];
  const points = [
    "Built an intelligent email support tool powered by AI for automated customer query handling",
    "Designed a clean and responsive frontend interface using React",
    "Integrated AI APIs for smart email response generation",
    "Developed backend services with Node.js and Express.js for request handling",
    "Implemented email parsing and classification logic for smart routing",
    "Created a dashboard for monitoring and managing email support tickets",
    "Ensured secure API communication with authentication middleware",
    "Optimized response time for real-time AI-powered suggestions",
  ];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f0f0f0", fontFamily: "Inter, sans-serif" }}>
      <div style={{ padding: "24px 40px" }}>
        <Link href="/" style={{ color: "#ff3c00", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em" }}>
          ← BACK
        </Link>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <span style={{ fontSize: "3rem" }}>🤖</span>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.03em", margin: "16px 0 8px", color: "#fff" }}>
          AI Email Support Tool
        </h1>
        <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: 32 }}>Intelligent Email Automation</p>

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

        <p style={{ color: "#aaa", lineHeight: 1.8, marginBottom: 40, fontSize: "0.95rem" }}>
          An AI-powered email support tool that automates customer service by intelligently
          reading, classifying, and responding to incoming emails — reducing response time
          and improving customer satisfaction.
        </p>

        <h2 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: 20 }}>What I Built</h2>
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
