"use client";

import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { IoLogoGithub } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import WorkSliderBtns from "./work-slider-btns";

type Props = {};

const projects = [
  {
    id: 1,
    title: "Brokerlit",
    category: "fronted",
    description:
      "Brokerlit is a platform for managing and tracking your properties.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
    ],
    image: "/work/thumb1.png",
    live: "https://www.brokerlit.com/",
    github: "",
  },
  {
    id: 2,
    title: "Angabparts",
    category: "fullstack",
    description:
      "Angabparts is an ecommerce platform for buying parts for cars.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    image: "/work/thumb2.png",
    live: "https://angabparts.com/",
    github: "",
  },
  {
    id: 3,
    title: "Aelee",
    category: "fullstack",
    description:
      "Aelee is a platform for managing students and their payments.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "MySQL" },
      { name: "Nestjs" },
    ],
    image: "/work/thumb3.png",
    live: "https://inscripciones.aelee.com.ve/",
    github: "",
  },
  {
    id: 4,
    title: "Tryo",
    category: "frontend",
    description: "Tryo is a landing page made in figma and made with react.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
    ],
    image: "/work/thumb4.png",
    live: "https://tryo-frontend.vercel.app/",
    github: "https://github.com/Dariocoding/tryo-frontend",
  },
  {
    id: 5,
    title: "VSK",
    category: "frontend",
    description: "VSK is a landing page made in figma and made with react.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
    ],
    image: "/work/thumb5.png",
    live: "https://vsk-frontend.vercel.app/",
    github: "https://github.com/Dariocoding/VSK-frontend",
  },
];

export default function Work({}: Props) {
  const [project, setProject] = React.useState(projects[0]);
  const handleSlideChange: SwiperProps["onSlideChange"] = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn", delay: 2.4 },
      }}
      className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[510px] flex flex-col bg-slate-800/20 rounded-lg p-6 xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="xl:text-8xl text-4xl leading-none font-extrabold text-transparent text-outline">
                {project.title}
              </div>
              <h2 className="text-[42px] font-bold leading text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, idx) => (
                  <li key={idx} className="text-xl text-accent">
                    {item.name}
                    {idx === project.stack.length - 1 ? "" : ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20" />

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <IoLogoGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg">
                    <div className="absolute inset-0 z-10 w-full h-full bg-black/10 rounded-lg"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        quality={100}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent cursor-pointer rounded hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles="text-white/80 text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
