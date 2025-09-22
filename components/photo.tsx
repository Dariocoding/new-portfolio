"use client";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

export default function Photo({}: Props) {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: "easeIn" },
        }}
        className="flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] m-auto absolute mix-blend-lighten bg-slate-800/30 rounded-full"
        >
          <Image
            src="/dario1.png"
            alt="Photo"
            fill
            quality={100}
            className="object-contain rounded-b-full"
          />
        </motion.div>

        <motion.svg
          className={"w-[300xp] xl:w-[506px] h-[300px] xl:h-[506px]"}
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={"253"}
            cy={"253"}
            r={"253"}
            stroke={"#00ff99"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            strokeWidth={"4"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
