# Muhammad Rizwan – Portfolio Website

A Next.js portfolio website inspired by xenikii.one

---

## 📁 Folder Structure

```
rizwan-portfolio/
├── public/
│   └── profile.jpg          ← ⚠️ AAPKI PHOTO YAHAN RAKHEIN (naam bilkul profile.jpg hona chahiye)
│
├── src/
│   └── app/
│       ├── globals.css       ← Saari CSS / styles
│       ├── layout.js         ← Root layout (title, meta)
│       ├── page.js           ← MAIN HOME PAGE (Hero, Circles, Experience, Projects, Footer)
│       │
│       └── projects/
│           ├── unijump/
│           │   └── page.js   ← UniJump project detail page
│           ├── ai-email/
│           │   └── page.js   ← AI Email Support Tool page
│           └── shopping-store/
│               └── page.js   ← Shopping Store project page
│
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── postcss.config.js
```

---

## 🖼️ Profile Image

Aapki photo ko:
1. **Naam dein:** `profile.jpg`
2. **Folder:** `public/` folder ke andar rakhein
3. Final path: `rizwan-portfolio/public/profile.jpg`

---

## 🚀 Setup & Run

```bash
# 1. Dependencies install karein
npm install

# 2. Development server chalayein
npm run dev

# 3. Browser mein open karein
http://localhost:3000
```

---

## 🌐 Deploy on Vercel (Free)

```bash
npm install -g vercel
vercel
```

Ya GitHub pe push karein aur vercel.com se connect karein.

---

## ✏️ Changes Karne Ke Liye

| Kya change karna hai | Kahan jaayein |
|---|---|
| Name, title, hero section | `src/app/page.js` → `Hero()` function |
| Flip circles content | `src/app/page.js` → `circleData` array |
| Experience details | `src/app/page.js` → `experiences` array |
| Project cards | `src/app/page.js` → `projects` array |
| Footer email/links | `src/app/page.js` → `Footer()` function |
| UniJump page | `src/app/projects/unijump/page.js` |
| AI Email page | `src/app/projects/ai-email/page.js` |
| Shopping Store page | `src/app/projects/shopping-store/page.js` |
| Colors/fonts/styles | `src/app/globals.css` |

---

## 📞 Contact in Footer

- LinkedIn icon → aapka LinkedIn URL update karein
- GitHub → `https://github.com/chaudharyrizwan1876` (already set)
- WhatsApp → `https://wa.me/923XXXXXXXXX` mein apna number daalein
- Email → `Rizwanchaudhary4477@gmail.com` (already set)
