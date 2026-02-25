import { motion } from "framer-motion";

const AnimatedSection = ({ subTitle, title, text, textColor }) => {
  const words = title.split(" ");
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.4,
      },
    },
  };
  const wordAnimation = {
    hidden: {
      opacity: 0,
      rotateY: 90,
      z: -120,
      y: 60,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      rotateY: 0,
      z: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial={{ y: "35vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="pb-24"
    >
      <div className="flex flex-col justify-center gap-6 pt-16">
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="px-8 py-2 md:text-xl text-xs font-light tracking-[0.5rem] uppercase rounded-r-full text-slate-100 bg-cyan-950 w-fit"
        >
          {subTitle}
        </motion.p>

        <div
          className="px-6"
          style={{ perspective: 1800, perspectiveOrigin: "50% 50%" }}
        >
          <motion.h1
            variants={container}
            initial={{
              opacity: 0,
              rotateY: -360,
              z: -800,
              scale: 0.55,
              filter: "blur(18px)",
            }}
            animate={{
              opacity: 1,
              rotateY: 0,
              z: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-fit p-2 uppercase text-5xl md:text-6xl lg:text-8xl rounded-sm backdrop-blur-sm flex gap-4 font-mono border border-cyan-500/30 text-cyan-100 bg-slate-950/80 shadow-[0_0_40px_rgba(6,182,212,0.15)]"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordAnimation}
                style={{ transformStyle: "preserve-3d" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      <div className={`relative mt-10 ${textColor}`}>
        <motion.p
          initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-5 max-w-md mx-auto sm:ml-auto mr-0 px-4 py-2 text-center sm:text-end text-xs md:text-sm font-light uppercase tracking-wide bg-slate-950/70 border border-cyan-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AnimatedSection;
