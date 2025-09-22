import Header from "@/components/Layout/header";
import PageTransition from "@/components/page-transition";
import StairTransition from "@/components/StairTransition";
import StarField from "@/components/StarField";
import TranslateButton from "@/components/TranslateButton";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dario's Portfolio",
  description:
    "Welcome to my portfolio website! I am a full-stack developer with expertise in Next.js, Nest.js, PostgreSQL, MySQL and more. Explore my projects that showcase elegant interfaces, robust back-end systems and efficient database management. Let's collaborate on your next extraordinary web development project.",
  keywords:
    "HTML, CSS, JavaScript, React, Redux, Next.js, Tailwind CSS, Bootstrap, OAuth2, APIs, MaterialUI, Back End, NodeJS, NestJS, Docker, Express, MySQL, Sequelize, TypeORM, PostgreSQL, MongoDB, Mongoose, GraphQL, Apollo, RestAPI, Git, GitHub, Heroku, Netlify, VSCode, Postman, Webpack, TypeScript, Scrum Board, SEO, Full-stack developer, Back-end Developer, Front-end developer, software enginer",

  creator: "Dario Flores",
  authors: [
    { name: "Dario Flores", url: "https://www.linkedin.com/in/dario-flores" },
  ],
  openGraph: {
    title: "Dario's Portfolio",
    images: "/og.png",
    description:
      "Welcome to my portfolio website! I am a full-stack developer with expertise in Next.js, Nest.js, PostgreSQL, MySQL and more. Explore my projects that showcase elegant interfaces, robust back-end systems and efficient database management. Let's collaborate on your next extraordinary web development project.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} font-mono antialiased`}>
        <StarField />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
        {/*         <TranslateButton /> */}
      </body>
    </html>
  );
}
