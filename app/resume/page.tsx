"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaDocker,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaEthereum,
  FaBitcoin,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDjango, SiLaravel, SiMysql, SiNestjs } from "react-icons/si";
import Image from "next/image";
type Props = {};

const about = {
  title: "About me",
  description:
    "I'm a software developer with a passion for creating beautiful and functional websites.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Darío Flores",
    },
    {
      fieldName: "Phone",
      fieldValue: "+58-04243177990",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+",
    },
    {
      fieldName: "Email",
      fieldValue: "darioflores170@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Venezuela, Aragua Maracay",
    },
  ],
};

const experience = {
  icon: "/resume/badge.svg",
  title: "Experience",
  description:
    "I'm a software developer with a passion for creating beautiful and functional websites.",
  items: [
    {
      company: "Chillmarin",
      position: "Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Angabparts",
      position: "Software Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Fiverr, Upwork, and more...",
      position: "Freelancer",
      duration: "2021 - Today",
    },
    {
      company: "Spoint - Brokerlit.",
      position: "Software Developer",
      duration: "2023 - Today",
    },
  ],
};

const education = {
  icon: "/resume/cap.svg",
  title: "My Education",
  description:
    "I'm a web developer with a passion for creating beautiful and functional websites.",
  items: [
    {
      institution: "Unidad Educativa Bicentenario de las Independencias",
      degree: "Bachelor's Degree",
      duration: "2005 - 2018",
    },
    {
      institution: "YouTube Courses",
      degree: "Web Developer",
      duration: "2020 - 2022",
    },
    {
      institution: "Udemy",
      degree: "React, AWS Cloud, and DevOps, and more...",
      duration: "2020 - 2022",
    },
    {
      institution: "Universidad Bicentenaria de Aragua",
      degree: "Systems Engineer",
      duration: "2019 - 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a wide range of skills that I can use to create beautiful and functional websites and applications.",
  skillList: [
    {
      name: "HTML 5",
      icon: <FaHtml5 />,
      percentage: 100,
    },
    {
      name: "CSS 3",
      icon: <FaCss3 />,
      percentage: 100,
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
      percentage: 100,
    },
    {
      name: "Reactjs",
      icon: <FaReact />,
      percentage: 100,
    },
    {
      name: "Nextjs",
      icon: <RiNextjsFill />,
      percentage: 95,
    },
    {
      name: "Tailwindcss",
      icon: <RiTailwindCssFill />,
      percentage: 90,
    },
    {
      name: "Nodejs",
      icon: <FaNodeJs />,
      percentage: 95,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      percentage: 75,
    },
    {
      name: "Git",
      icon: <FaGithub />,
      percentage: 80,
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql />,
      percentage: 80,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      percentage: 80,
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      percentage: 60,
    },
    {
      name: "NestJs",
      icon: <SiNestjs />,
      percentage: 75,
    },
    {
      name: "Python",
      icon: <FaPython />,
      percentage: 80,
    },
    {
      name: "Django",
      icon: <SiDjango />,
      percentage: 60,
    },
    {
      name: "Linux",
      icon: <FaLinux />,
      percentage: 90,
    },
    {
      name: "PHP",
      icon: <FaPhp />,
      percentage: 80,
    },
    {
      name: "Laravel",
      icon: <SiLaravel />,
      percentage: 70,
    },
    {
      name: "Solidity",
      icon: <FaEthereum />,
      percentage: 50,
    },
    {
      name: "Blockchain",
      icon: <FaBitcoin />,
      percentage: 50,
    },
  ],
};

export default function Resume({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={experience.icon}
                      alt={experience.title}
                      width={35}
                      height={35}
                    />
                  </div>
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item) => (
                      <li
                        key={item.company}
                        className="bg-slate-800/30 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={education.icon}
                      alt={education.title}
                      width={35}
                      height={35}
                    />
                  </div>
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item) => (
                      <li
                        key={item.institution}
                        className="bg-slate-800/30 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-slate-800/30 rounded-xl flex flex-col justify-center items-center group relative">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <p className="text-base text-white/60 my-3">
                                {skill.name}
                              </p>
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[80%] h-[10px] bg-slate-900 rounded-full">
                                <div
                                  className="h-full bg-sky-600 rounded-full"
                                  style={{ width: `${skill.percentage}%` }}
                                ></div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize"> {skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <p className="text-xl">{item.fieldValue}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
