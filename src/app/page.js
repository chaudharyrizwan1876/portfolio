"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const vp = { once: true, margin: "-60px" };

// ─── SKILLS ───
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "XAML (WPF)", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Nest.js", level: 80 },
      { name: "C# / .NET", level: 85 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "SQL / SQLite", level: 88 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "CI/CD Pipeline", level: 80 },
    ],
  },
];

const categoryColors = [
  "#22d3ee",
  "#818cf8",
  "#34d399",
  "#f59e0b",
];

const skillDescriptions = {
  "React / Next.js": "Building scalable, SEO-friendly web apps using React component architecture and Next.js SSR/SSG capabilities.",
  "JavaScript / TypeScript": "Writing clean, type-safe JavaScript code with TypeScript for robust and maintainable full-stack applications.",
  "Tailwind CSS": "Rapidly building responsive, modern UIs using Tailwind's utility-first CSS framework.",
  "XAML (WPF)": "Building rich, animated Windows desktop UIs using WPF and XAML with custom styled components and smooth transitions.",
  "Node.js": "Server-side JavaScript runtime used to build fast, scalable backend services and APIs.",
  "Express.js": "Minimal and flexible Node.js web framework for building robust REST APIs and backend services.",
  "Nest.js": "Progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
  "C# / .NET": "Building high-performance Windows desktop applications using C# and .NET 10 with WPF, ML.NET, and Entity Framework Core.",
  "REST APIs": "Designing and integrating RESTful APIs for seamless communication between frontend and backend systems.",
  "MongoDB": "NoSQL database used for flexible, document-based data storage in full-stack applications.",
  "PostgreSQL": "Relational database management with complex queries, transactions, and data integrity.",
  "SQL / SQLite": "Structured query language for relational databases; SQLite used for local offline desktop applications via Entity Framework Core.",
  "Git & GitHub": "Version control, feature branching, pull request workflows, and collaborative code review.",
  "CI/CD Pipeline": "Automating build, test, and deployment workflows using CI/CD pipelines for reliable and fast software delivery.",
};

// ─── EXPERIENCES ───
const experiences = [
  {
    period: "Aug 2025 - Present",
    role: "Full Stack Developer",
    company: "Freelancing Agency",
    location: "Rawalpindi, Pakistan (Remote)",
    points: [
      "Building and delivering full-stack web applications for clients using Next.js, React.js, Nest.js, and Node.js.",
      "Developing RESTful APIs and backend services using Express.js and MongoDB.",
      "Built a fully offline Windows desktop application (Cafe Management System) using C# and WPF on .NET 10 with SQLite, Entity Framework Core, and ML.NET for AI-powered sales predictions.",
      "Managing project lifecycle from requirement gathering to deployment, including CI/CD pipeline setup on platforms like Vercel and Netlify.",
      "Collaborating with international clients to deliver high-quality, scalable web and desktop solutions.",
    ],
    tags: ["Next.js", "React.js", "Nest.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "C#", ".NET", "WPF", "SQLite", "ML.NET", "CI/CD", "GitHub"],
  },
  {
    period: "Feb 2024 - July 2025",
    role: "MERN Stack Developer",
    company: "Design Style Studio",
    location: "Rawalpindi, Pakistan (Hybrid)",
    points: [
      "Designed and developed UniJump — a modern international education platform for student onboarding and university applications.",
      "Built a responsive and SEO-friendly frontend using Next.js and Tailwind CSS with reusable component-based architecture.",
      "Developed secure authentication system and user dashboard for managing student data and application processes.",
      "Integrated backend APIs for handling user data, authentication, and application workflows using Node.js, Express.js, and MongoDB.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Vercel", "Git", "GitHub"],
  },
  {
    period: "July 2023 - Jan 2024",
    role: "Website Developer Internee",
    company: "Alright Private Tech Ltd",
    location: "Rawalpindi, Pakistan",
    points: [
      "Supported the full development lifecycle of an E-commerce Web Store Platform from UI design to Netlify deployment.",
      "Built a modern and responsive frontend using React.js and Tailwind CSS with component-based architecture.",
      "Integrated REST APIs for product listing, user authentication, and order handling.",
      "Developed backend services with Node.js and Express.js; designed and managed MongoDB database structure.",
    ],
    tags: ["ReactJS", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
  },
];

// ─── PROJECTS ───
const projects = [
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      </div>
    ),
    title: "UniJump",
    description: "A platform connecting students with universities. Built with Next.js, Node.js and MongoDB with real-time features.",
    github: "https://github.com/chaudharyrizwan1876/unijump-front",
    liveLink: "https://www.unijump.es/",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Vercel", "GitHub"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      </div>
    ),
    title: "E-Commerce Shopping Store",
    description: "Full-stack e-commerce platform with product catalog, shopping cart, and order management system.",
    github: "https://github.com/chaudharyrizwan1876/web-store",
    liveLink: "https://rizwansshoppingstore.netlify.app/",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "GitHub"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
    ),
    title: "AI Email Support Tool",
    description: "Intelligent email support system powered by AI. Complete full-stack application with frontend and backend.",
    github: "https://github.com/chaudharyrizwan1876/ai-email-frontend",
    githubBackend: "https://github.com/chaudharyrizwan1876/ai-email-backend",
    liveLink: "https://new.joaomiranda.com/ai-support/",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/25">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          <path d="M7 8h2M7 12h2M11 8h6M11 12h6"/>
        </svg>
      </div>
    ),
    title: "Cafe Management System",
    description: "A complete hospital cafe management desktop application built in C# and WPF on .NET 10. Manages doctor accounts, daily food orders, payments, and wallet balances. Includes AI-powered predictions using ML.NET for sales forecasting, balance warnings, item trends, and peak hour analysis. Runs fully offline on any Windows machine — no server or internet required.",
    github: "https://github.com/chaudharyrizwan1876/HospitalCafeLedger",
    liveLink: "https://github.com/chaudharyrizwan1876/HospitalCafeLedger/releases/latest/download/HospitalCafeLedger.App.exe",
    liveLabel: "Download .exe",
    tags: ["C#", "WPF", ".NET 10", "XAML", "SQLite", "Entity Framework Core", "ML.NET", "Windows"],
  },
];

// ─── Skill dot segments ───
function getLevelSegments(level) {
  if (level >= 90) return 5;
  if (level >= 85) return 4;
  return 3;
}

function SkillRow({ name, level, color }) {
  const filled = getLevelSegments(level);
  const desc = skillDescriptions[name] || "";
  return (
    <div className="group border-b border-white/[0.05] last:border-0 cursor-default">
      <div className="flex items-center justify-between gap-3 py-2">
        <span className="text-[13px] text-gray-300 flex-1 min-w-0 group-hover:text-white transition-colors duration-200">
          {name}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex gap-[3px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-[7px] h-3.5 rounded-[3px] transition-all duration-200 group-hover:h-4"
                style={{ background: i <= filled ? color : "rgba(255,255,255,0.09)" }}
              />
            ))}
          </div>
          <span className="text-[10px] font-bold w-7 text-right" style={{ color }}>
            {level}%
          </span>
        </div>
      </div>
      {desc && (
        <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-300 ease-in-out">
          <div className="pb-2.5 pl-3" style={{ borderLeft: `2px solid ${color}50` }}>
            <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-hidden" style={{ scrollbarGutter: "stable" }}>

      {/* ── NAVBAR ── */}
      <motion.nav
        className="w-full border-b border-white/[0.07] fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/95 backdrop-blur-md"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-2 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
              <span className="text-white font-black text-sm leading-none">R</span>
            </div>
            <span className="font-bold text-sm text-white hidden sm:block">
              Muhammad Rizwan<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Nav links */}
          <ul className="flex items-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-400 font-medium">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group py-1 hover:text-white transition-colors duration-200"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Empty spacer to keep nav balanced */}
          <div className="w-8 sm:w-16" />
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <section id="about" className="relative w-full min-h-screen flex overflow-hidden pt-14 sm:pt-16">

        {/* LEFT — Full height profile image */}
        <motion.div
          className="hidden lg:block relative w-1/2 min-h-screen overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="absolute inset-0 z-10 flex items-end justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/profile.png"
                alt="Muhammad Rizwan"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#0B1120] z-20" />
        </motion.div>

        {/* RIGHT — Text content */}
        <div className="flex-1 flex items-center z-10 px-5 sm:px-8 lg:px-16 py-20 sm:py-24">
          <motion.div
            className="w-full max-w-xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4">
              HELLO, I'M
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-3 sm:mb-4">
              Muhammad <span className="text-cyan-400">Rizwan</span>
            </motion.h1>
            <motion.h2 variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-gray-300 font-semibold mb-6 sm:mb-8">
              Full Stack Web Developer
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base mb-8 sm:mb-10">
              I specialize in building scalable, high-performance web applications
              with clean, maintainable code and exceptional user experiences. With
              expertise in both frontend and backend technologies, I transform
              complex business requirements into elegant digital solutions that
              drive measurable impact.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#projects" className="px-5 sm:px-7 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-sm sm:text-base transition">
                View Projects
              </a>
              <a href="#contact" className="px-5 sm:px-7 py-2.5 sm:py-3 border border-white/30 hover:border-cyan-400 rounded-lg font-semibold text-sm sm:text-base transition">
                Contact Me
              </a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 sm:px-7 py-2.5 sm:py-3 bg-red-600 hover:bg-red-500 rounded-lg font-semibold text-sm sm:text-base transition">
                Open CV
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile: faded background image */}
        <div className="absolute inset-0 lg:hidden z-0">
          <Image
            src="/profile.png"
            alt="Muhammad Rizwan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-15"
          />
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-16 md:py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10 md:mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Technologies I work with every day</p>
          </motion.div>

          {/* Row 1: Frontend + Backend + Database */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {skillCategories.slice(0, 3).map((cat, i) => {
              const color = categoryColors[i];
              return (
                <motion.div
                  key={cat.title}
                  variants={fadeUp}
                  className="bg-[#0c1524] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                >
                  <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                      <h3 className="text-white font-bold text-sm leading-tight">{cat.title}</h3>
                    </div>
                    <div>
                      {cat.skills.map((s) => (
                        <SkillRow key={s.name} name={s.name} level={s.level} color={color} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Row 2: Tools — centered below Backend */}
          <motion.div
            className="flex justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {(() => {
              const cat = skillCategories[3];
              const color = categoryColors[3];
              return (
                <div className="w-full sm:w-[calc(50%-10px)] xl:w-[calc(33.333%-14px)] bg-[#0c1524] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                  <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                      <h3 className="text-white font-bold text-sm leading-tight">{cat.title}</h3>
                    </div>
                    <div>
                      {cat.skills.map((s) => (
                        <SkillRow key={s.name} name={s.name} level={s.level} color={color} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-8 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <div className="flex gap-[3px]">
                {[1,2,3,4,5].map(i => <div key={i} className="w-[6px] h-3 rounded-[2px] bg-cyan-400/70" />)}
              </div>
              Expert (90%+)
            </span>
            <span className="flex items-center gap-2">
              <div className="flex gap-[3px]">
                {[1,2,3,4,5].map(i => <div key={i} className={`w-[6px] h-3 rounded-[2px] ${i <= 4 ? "bg-cyan-400/70" : "bg-white/10"}`} />)}
              </div>
              Advanced (85–89%)
            </span>
            <span className="flex items-center gap-2">
              <div className="flex gap-[3px]">
                {[1,2,3,4,5].map(i => <div key={i} className={`w-[6px] h-3 rounded-[2px] ${i <= 3 ? "bg-cyan-400/70" : "bg-white/10"}`} />)}
              </div>
              Proficient (75–84%)
            </span>
          </div>
        </div>
      </section>

      {/* ── WORK EXPERIENCE ── */}
      <section id="experience" className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10 md:mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">My professional journey and roles</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[200px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-6 sm:space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row gap-3 md:gap-0"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                >
                  <div className="md:w-[200px] md:pr-6 flex md:flex-col md:items-end md:justify-start md:pt-7 shrink-0">
                    <p className="text-cyan-400 font-semibold text-xs sm:text-sm md:text-right leading-relaxed">
                      {exp.period}
                    </p>
                  </div>
                  <div className="hidden md:flex items-start justify-center w-10 pt-7 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)] mt-1" />
                  </div>
                  <div className="flex-1 bg-[#131d30] border border-white/5 rounded-2xl p-5 sm:p-7 md:ml-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold text-sm sm:text-base mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5">{exp.location}</p>
                    <hr className="border-white/5 mb-4 sm:mb-5" />
                    <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                          <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-cyan-400/25 text-cyan-300 bg-cyan-400/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section id="projects" className="py-16 md:py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10 md:mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Things I&apos;ve built recently</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {projects.map((proj, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#131d30] border border-white/5 rounded-2xl p-5 sm:p-7 flex flex-col hover:border-cyan-400/30 transition">
                <div className="flex items-start justify-between mb-6">
                  {proj.icon}
                  <div className="flex gap-3">
                    {proj.liveLink && (
                      <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/40 transition">
                          <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>
                          </svg>
                        </div>
                        <span className="text-xs text-blue-400">{proj.liveLabel || "Live"}</span>
                      </a>
                    )}
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/40 transition">
                          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                          </svg>
                        </div>
                        <span className="text-xs text-blue-400">GitHub</span>
                      </a>
                    )}
                    {proj.githubBackend && (
                      <a href={proj.githubBackend} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/40 transition">
                          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                          </svg>
                        </div>
                        <span className="text-xs text-blue-400">Backend</span>
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section id="contact" className="py-16 md:py-28 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/[0.04] blur-3xl pointer-events-none" />

        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <motion.p variants={fadeUp} className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Let&apos;s work together
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Touch
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed">
            I&apos;m open to new opportunities and collaborations. Let&apos;s build something great together.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="mailto:Rizwanchaudhary4477@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white text-sm sm:text-base hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 mb-10"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
            Send me a message
          </motion.a>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.a variants={fadeUp} href="https://www.linkedin.com/in/rizwan-chaudhary4477" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 bg-[#0c1524] border border-white/[0.07] rounded-2xl hover:border-blue-500/40 hover:bg-blue-500/[0.05] transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">LinkedIn</p>
                <p className="text-gray-500 text-xs mt-0.5">rizwan-chaudhary4477</p>
              </div>
            </motion.a>

            <motion.a variants={fadeUp} href="https://github.com/chaudharyrizwan1876/chaudharyrizwan1876" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 bg-[#0c1524] border border-white/[0.07] rounded-2xl hover:border-gray-500/40 hover:bg-gray-500/[0.05] transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-gray-600/15 border border-gray-500/20 flex items-center justify-center group-hover:bg-gray-600/25 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">GitHub</p>
                <p className="text-gray-500 text-xs mt-0.5">chaudharyrizwan1876</p>
              </div>
            </motion.a>

            <motion.a variants={fadeUp} href="mailto:Rizwanchaudhary4477@gmail.com"
              className="group flex flex-col items-center gap-3 p-5 bg-[#0c1524] border border-white/[0.07] rounded-2xl hover:border-cyan-500/40 hover:bg-cyan-500/[0.05] transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-cyan-600/15 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-600/25 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Email</p>
                <p className="text-gray-500 text-xs mt-0.5">Rizwanchaudhary4477</p>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <motion.footer
        className="border-t border-white/5 bg-[#0d1526] py-6 sm:py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">Building the web, one component at a time.</p>
          <p className="text-gray-500 text-xs sm:text-sm text-center">© {new Date().getFullYear()} Rizwan Chaudhary. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/rizwan-chaudhary4477" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/chaudharyrizwan1876/chaudharyrizwan1876" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
            </a>
            <a href="mailto:Rizwanchaudhary4477@gmail.com"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.footer>

    </main>
  );
}