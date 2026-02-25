import { motion } from "framer-motion";

const AnimatedSection = ({ subTitle, title, text, textColor }) => {
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
          className="w-fit px-4 md:py-2 text-xs md:text-lg select-none font-light tracking-wider uppercase rounded-r-full text-slate-100 bg-cyan-950"
        >
          {subTitle}
        </motion.p>
        <div style={{ perspective: 1800, perspectiveOrigin: "50% 50%" }}>
          <motion.h1
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
            className="w-full md:py-2 px-2 uppercase text-center md:text-left text-xl md:text-4xl lg:text-6xl select-none tracking-widest rounded-r-full backdrop-blur-sm gap-4 border border-cyan-500/30 text-cyan-100 bg-slate-950/80 shadow-[0_0_40px_rgba(6,182,212,0.15)]"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {title}
          </motion.h1>
        </div>
      </div>
      <div className={`relative mt-10 ${textColor}`}>
        <motion.p
          initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-5 max-w-md mx-auto sm:ml-auto mr-0 px-4 py-2 select-none text-center sm:text-end text-xs md:text-sm font-mono uppercase tracking-wide bg-slate-950/70 border border-cyan-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AnimatedSection;
