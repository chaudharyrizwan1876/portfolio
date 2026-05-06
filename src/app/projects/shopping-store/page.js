"use client";
import Link from "next/link";

export default function ShoppingStoreProject() {
  const tech = ["ReactJS", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"];
  const points = [
    "Supported the full development lifecycle: from UI design to deployment on Netlify",
    "Built a modern and responsive frontend using React.js and Tailwind CSS",
    "Implemented component-based architecture for scalable and maintainable code",
    "Integrated REST APIs for product listing, user authentication, and order handling",
    "Developed backend services using Node.js and Express.js",
    "Designed and managed database structure using MongoDB",
    "Implemented user authentication and secure login functionality",
    "Created dynamic product pages with filtering and category-based navigation",
    "Added cart functionality and order management system",
    "Optimized performance and UI/UX for a smooth shopping experience",
    "Managed version control and collaboration using Git and GitHub",
    "Deployed the frontend on Netlify for live production access",
  ];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f0f0f0", fontFamily: "Inter, sans-serif" }}>
      <div style={{ padding: "24px 40px" }}>
        <Link href="/" style={{ color: "#ff3c00", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em" }}>
          ← BACK
        </Link>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <span style={{ fontSize: "3rem" }}>🛍️</span>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.03em", margin: "16px 0 8px", color: "#fff" }}>
          Shopping Store
        </h1>
        <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: 16 }}>Full-Stack E-commerce Platform</p>

        <a
          href="https://rizwansshoppingstore.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 18px",
            background: "var(--accent, #ff3c00)",
            color: "#fff",
            borderRadius: 4,
            fontSize: "0.8rem",
            fontWeight: 700,
            textDecoration: "none",
            marginBottom: 32,
            letterSpacing: "0.05em",
          }}
        >
          🚀 LIVE DEMO ↗
        </a>

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
          A full-featured e-commerce web store with product listings, cart management, user authentication,
          and online payment integration. Built with the MERN stack and deployed live on Netlify.
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
