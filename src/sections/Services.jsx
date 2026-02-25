import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { serviceRows } from "../constants/index.js";
import Stars from "../components/Stars.jsx";
import FAQ from "../components/FAQ.jsx";

const TickerRow = ({ items, reverse = false, duration = 20 }) => {
  const tripled = [...items, ...items, ...items];

  return (
    <div className="py-4 overflow-hidden w-full text-xl md:text-3xl lg:text-5xl xl:text-7xl font-sans font-light tracking-tight">
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {tripled.map((item, index) => (
          <React.Fragment key={index}>
            <h2 className="whitespace-nowrap">{item}</h2>
            <div className="w-10 md:w-32 h-2 my-auto rounded-full border-2 border-cyan-700" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen relative pt-24 md:pt-20 text-center text-slate-300 overflow-hidden"
    >
      <figure className="absolute inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 15] }}
          style={{ background: "#09122C" }}
        >
          <Stars />
        </Canvas>
      </figure>
      <TickerRow items={serviceRows.row1} duration={26} />
      <TickerRow items={serviceRows.row2} reverse duration={30} />
      <TickerRow items={serviceRows.row3} duration={28} />
      <FAQ />
    </section>
  );
};

export default Services;
