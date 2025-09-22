import { motion, Variants } from "framer-motion";

type Props = {};

const stairAnimation: Variants = {
  initial: { top: "0%" },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// CALCULATE THE REVERSE INDEX FOR STAGGED DELAY

const totalSteps = 6;
const reverseIndex = (index: number) => {
  return totalSteps - index - 1;
};

export default function Stairs({}: Props) {
  return (
    <>
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-slate-700/30 relative"
        />
      ))}
    </>
  );
}
