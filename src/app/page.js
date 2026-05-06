"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React / Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "JavaScript / TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "MongoDB / PostgreSQL", level: 78 },
    { name: "Git & Github", level: 80 },
    { name: "Express js", level: 85 },
    { name: "Nest js", level: 80 },
    { name: "REST API's", level: 90 },
  ];

  const experiences = [
    {
      period: "Aug 2025 - Present",
      title: "Full Stack Developer",
      company: "Freelancing Agency",
      location: "Rawalpindi, Pakistan (Remote)",
      skills: ["Next js", "React js", "Nest js", "Tailwind CSS", "Node js", "Express js", "MongoDB", "REST APIs", "GitHub"],
    },
    {
      period: "Feb 2024 - July 2025",
      title: "MERN Stack Developer",
      company: "Design Style Studio",
      location: "Rawalpindi, Pakistan (Hybrid)",
      skills: ["Next js", "Tailwind CSS", "Node js", "Express js", "MongoDB", "REST APIs", "Vercel", "Git", "GitHub"],
      project: "Development of UniJump (International Education Platform)",
      details: [
        "Designed and developed a modern international education platform for student onboarding and university applications",
        "Built a responsive and SEO-friendly frontend using Next.js and Tailwind CSS",
        "Implemented reusable component-based architecture for scalability and maintainability",
        "Developed secure authentication system with login functionality",
        "Created user dashboard for managing student data and application processes",
        "Integrated backend APIs for handling user data, authentication, and application workflows",
        "Built backend services using Node.js and Express.js",
        "Designed and structured database using MongoDB for efficient data management",
        "Implemented form handling and validation for student applications",
      ],
    },
    {
      period: "July 2023 - Jan 2024",
      title: "Website Developer Internee",
      company: "Alright Private Tech Ltd",
      location: "Rawalpindi, Pakistan",
      skills: ["ReactJS", "Vite", "Tailwind CSS", "Node js", "Express js", "MongoDB", "REST APIs", "Git"],
      project: "Development of an E-commerce Web Store Platform",
      details: [
        "Supported the full development lifecycle: from UI design to deployment on Netlify",
        "Built a modern and responsive frontend using React.js and Tailwind CSS",
        "Implemented component-based architecture for scalable and maintainable code",
        "Integrated REST APIs for product listing, user authentication, and order handling",
        "Developed backend services using Node.js and Express.js",
        "Designed and managed database structure using MongoDB",
        "Implemented user authentication and secure login functionality",
        "Created dynamic product pages with filtering and category-based navigation",
        "Added cart functionality and order management system",
      ],
    },
  ];

  const projects = [
    {
      title: "UniJump",
      description:
        "A platform connecting students with universities. Built with Next.js, Node.js and MongoDB with real-time features.",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Vercel", "GitHub"],
      github: "https://github.com/chaudharyrizwan1876/unijump-front",
      live: "https://www.unijump.es/",
    },
    {
      title: "E-Commerce Shopping Store",
      description:
        "Full-stack e-commerce platform with product catalog, shopping cart, and order management system.",
      tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "GitHub"],
      github: "https://github.com/chaudharyrizwan1876/web-store",
      live: "https://rizwansshoppingstore.netlify.app/",
    },
    {
      title: "AI Email Support Tool",
      description:
        "Intelligent email support system powered by AI. Complete full-stack application with frontend and backend.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      github: "https://github.com/chaudharyrizwan1876/ai-email-frontend",
      githubBackend: "https://github.com/chaudharyrizwan1876/ai-email-backend",
      live: "https://new.joaomiranda.com/ai-support/",
    },
  ];

  return (
    <div className="portfolio-root">
      {/* ── NAVBAR ── */}
      <nav
        className="navbar"
        style={{
          backdropFilter: scrollY > 50 ? "blur(14px)" : "none",
          background:
            scrollY > 50 ? "rgba(15,15,25,0.85)" : "transparent",
          boxShadow:
            scrollY > 50 ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <span className="logo"></span>

        <div className="nav-links-wrap">
          <ul className="nav-links">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="about">
        <div className="hero-bg-orb orb1" />
        <div className="hero-bg-orb orb2" />

        <div className="hero-content">
          {/* Profile Image */}
          <div className="profile-img-wrapper">
            <img
              src="/profile.PNG"
              alt="Muhammad Rizwan"
              className="profile-img"
            />
          </div>

          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              Muhammad{" "}
              <span className="hero-name-accent">Rizwan</span>
            </h1>
            <p className="hero-role">
              <span className="typed-text">Full Stack Web Developer</span>
            </p>
            <p className="hero-bio">
              I specialize in building scalable, high-performance web applications with clean, maintainable code and exceptional user experiences. With expertise in both frontend and backend technologies, I transform complex business requirements into elegant digital solutions that drive measurable impact.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-resume">
                Open CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        className="section"
        id="skills"
        data-animate
        style={
          isVisible["skills"]
            ? { opacity: 1, transform: "translateY(0)" }
            : {}
        }
      >
        <h2 className="section-title">
          My <span className="accent">Skills</span>
        </h2>
        <p className="section-sub">Technologies I work with every day</p>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={
                    isVisible["skills"]
                      ? { width: `${skill.level}%` }
                      : { width: "0%" }
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORK EXPERIENCES ── */}
      <section
        className="section"
        id="experience"
        data-animate
        style={
          isVisible["experience"]
            ? { opacity: 1, transform: "translateY(0)" }
            : {}
        }
      >
        <h2 className="section-title">
          Work <span className="accent">Experience</span>
        </h2>
        <p className="section-sub">My professional journey and roles</p>
        <div className="experiences-timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-period">{exp.period}</div>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-location">{exp.location}</p>
                
                {exp.project && (
                  <div className="exp-project">
                    <h4>{exp.project}</h4>
                    <ul className="exp-details">
                      {exp.details.map((detail, j) => (
                        <li key={j}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="exp-skills">
                  {exp.skills.map((skill) => (
                    <span className="exp-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        className="section section-alt"
        id="projects"
        data-animate
        style={
          isVisible["projects"]
            ? { opacity: 1, transform: "translateY(0)" }
            : {}
        }
      >
        <h2 className="section-title">
          Featured <span className="accent">Projects</span>
        </h2>
        <p className="section-sub">Things I&apos;ve built recently</p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className="project-card"
              key={p.title}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="project-top">
                <span className="project-icon">🚀</span>
                <div className="project-links">
                  {p.live && (
                    <div className="project-link-item">
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="View Live">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
                        </svg>
                      </a>
                      <span className="project-link-label">Live View</span>
                    </div>
                  )}
                  {p.github && (
                    <div className="project-link-item">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <span className="project-link-label">GitHub</span>
                    </div>
                  )}
                  {p.githubBackend && (
                    <div className="project-link-item">
                      <a href={p.githubBackend} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="Backend GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <span className="project-link-label">Backend</span>
                    </div>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        className="section"
        id="contact"
        data-animate
        style={
          isVisible["contact"]
            ? { opacity: 1, transform: "translateY(0)" }
            : {}
        }
      >
        <h2 className="section-title">
          Get In <span className="accent">Touch</span>
        </h2>
        <p className="section-sub">
          I&apos;m open to new opportunities and collaborations
        </p>
        <div className="contact-box">
          <a
            href="https://www.linkedin.com/in/rizwan-chaudhary4477"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            💼 linkedin.com/in/rizwan-chaudhary4477
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-tagline">
              Building the web, one component at a time.
            </p>
          </div>

          <div className="footer-center">
            <p className="footer-copy">
              © {new Date().getFullYear()} Rizwan Chaudhary. All rights
              reserved.
            </p>
          </div>

          <div className="footer-right">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rizwan-chaudhary4477"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/chaudharyrizwan1876/chaudharyrizwan1876"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:Rizwanchaudhary4477@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
