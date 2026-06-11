import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Rizwan Chaudhary | Full Stack Developer",
  description:
    "Portfolio of Rizwan Chaudhary — Full Stack Developer specializing in React, Next.js, Node.js, and scalable web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0B1120]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
