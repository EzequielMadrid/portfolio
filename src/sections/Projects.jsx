import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { myProjects } from "../constants/index.js";
import { Button } from "@/components/ui/button";
import Computer from "../components/Computer.jsx";
import {
  ArrowBigLeft,
  ArrowBigRight,
  Github,
  MousePointer2,
} from "lucide-react";

const projectCount = myProjects.length;

const getScale = () => {
  if (window.innerWidth < 640) return 2.6;
  if (window.innerWidth < 1024) return 2.8;
  return 3.2;
};

const Projects = () => {
  const modelRef = useRef();
  const orbitRef = useRef();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [scale, setScale] = useState(getScale());
  const [canvasActive, setCanvasActive] = useState(false);

  const handleNavigation = (direction) => {
    setCanvasActive(false);

    if (modelRef.current) {
      const angle = Math.PI * 2;
      gsap.to(modelRef.current.rotation, {
        y:
          modelRef.current.rotation.y + (direction === "next" ? angle : -angle),
        duration: 0.8,
        ease: "power2.inOut",
      });
    }

    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" },
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  useEffect(() => {
    const handleResize = () => setScale(getScale());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Clicking outside the canvas deactivates it
  useEffect(() => {
    if (!canvasActive) return;
    const handleClickOutside = (e) => {
      const canvasWrapper = document.getElementById("canvas-wrapper");
      if (canvasWrapper && !canvasWrapper.contains(e.target)) {
        setCanvasActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [canvasActive]);

  return (
    <section
      id="projects"
      className="relative z-10 flex flex-col text-slate-300"
    >
      <motion.h2
        className="mb-2 mt-2 w-fit select-none rounded-md relative mx-auto px-4 py-2 text-center text-md md:text-xl font-light uppercase tracking-wide bg-slate-950/70 border border-cyan-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.25)]"
        initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, mass: 0.7 }}
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.6, repeat: 1, repeatType: "mirror" },
        }}
      >
        APPs
      </motion.h2>
      <div className="flex grow flex-col gap-2 w-full items-center lg:mt-2 mt-8">
        <div className="animatedText w-[90%] sm:w-[80%] lg:w-[70%] px-1 flex flex-col gap-1">
          <h3 className="font-semibold text-base md:text-lg tracking-widest uppercase underline text-slate-100">
            {currentProject.title}
          </h3>
          <p className="text-xs md:text-md leading-relaxed text-slate-200">
            {currentProject.description}
          </p>
        </div>
        {/* Nav buttons */}
        <div className="p-2 flex justify-center items-center gap-6 w-full max-w-100 relative">
          {/* Previous */}
          <Button
            onClick={() => handleNavigation("previous")}
            className="group cursor-pointer bg-cyan-700 text-cyan-950 shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:shadow-[0_0_45px_rgba(6,182,212,1)] hover:bg-cyan-600 transition-all duration-300 active:scale-90"
          >
            <ArrowBigLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          </Button>
          {/* Center actions */}
          <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-slate-950/60 backdrop-blur-md border border-cyan-500/20 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:shadow-[0_0_45px_rgba(6,182,212,0.35)] transition-all duration-300">
            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-white"
            >
              <p className="px-3 py-1 font-light tracking-widest text-sm md:text-lg rounded-md border-2 border-cyan-500/30 group-hover:bg-slate-950 group-hover:border-cyan-400 transition-all duration-300">
                Live Demo
              </p>
            </a>
            <a
              href={currentProject.gitHref}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1 px-4 py-1 font-light tracking-widest text-sm md:text-lg rounded-md border-2 border-cyan-500/30 hover:bg-slate-950 hover:border-cyan-400 text-white transition-all duration-300"
            >
              <Github
                size={18}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="hidden sm:inline">Code</span>
            </a>
          </div>
          {/* Next */}
          <Button
            onClick={() => handleNavigation("next")}
            className="group cursor-pointer bg-cyan-700 text-cyan-950  shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:shadow-[0_0_45px_rgba(6,182,212,1)] hover:bg-cyan-600 transition-all duration-300 active:scale-90"
          >
            <ArrowBigRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
        {/* Canvas */}
        <div
          id="canvas-wrapper"
          className="relative rounded-lg w-[90%] sm:w-[80%] lg:w-[70%] h-102.5 md:h-132.5 lg:h-135 shadow-xl shadow-cyan-950 border-2 border-cyan-500/30 mb-4"
        >
          <Canvas shadows camera={{ position: [0, 0, 3], fov: 45 }}>
            <ambientLight intensity={3} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={2}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <directionalLight position={[-5, 5, -5]} intensity={1.5} />
            <Suspense fallback={null}>
              <Center>
                <group ref={modelRef}>
                  <Computer
                    key={currentProject.texture}
                    texture={currentProject.texture}
                    scale={scale}
                    position={[-0.1, -0.8, 0]}
                  />
                </group>
              </Center>
            </Suspense>
            <OrbitControls
              ref={orbitRef}
              enablePan={canvasActive}
              enableZoom={canvasActive}
              enableRotate={canvasActive}
              rotateSpeed={2}
            />
          </Canvas>
          {/* Overlay — shown when canvas is inactive */}
          {!canvasActive && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-end pb-6 gap-2 cursor-pointer rounded-lg"
              onClick={() => setCanvasActive(true)}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/70 border border-cyan-500/40 backdrop-blur-sm text-cyan-400 text-sm font-light tracking-widest shadow-[0_0_16px_rgba(6,182,212,0.3)]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <MousePointer2 size={15} />
                Touch to interact
              </motion.div>
            </div>
          )}
          {/* "Touch outside to exit" hint — shown when canvas is active */}
          {canvasActive && (
            <motion.div
              className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/70 border border-cyan-500/20 backdrop-blur-sm text-slate-400 text-xs font-light tracking-wide pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Touch outside to exit
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
