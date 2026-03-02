import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { myProjects } from "../constants/index.js";
import { Button } from "@/components/ui/button";
import Computer from "../components/Computer.jsx";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const projectCount = myProjects.length;

const getScale = () => {
  if (window.innerWidth < 640) return 2.6;
  if (window.innerWidth < 1024) return 2.8;
  return 3.2;
};

const Projects = () => {
  const modelRef = useRef();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [scale, setScale] = useState(getScale());
  const handleNavigation = (direction) => {
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

  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen flex flex-col text-slate-300"
    >
      <motion.h2
        className="mb-4 mt-6 w-fit select-none rounded-md relative mx-auto px-4 py-2 text-center text-md md:text-xl font-light uppercase tracking-wide bg-slate-950/70 border border-cyan-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.25)]"
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
      <div className="flex grow flex-col gap-2 w-full items-center lg:mt-2 mt-8 ">
        <div className="rounded-lg w-[90%] sm:w-[80%] lg:w-[70%] h-102.5 md:h-132.5 lg:h-135 shadow-xl shadow-cyan-950 border-2 border-cyan-500/30">
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
            <OrbitControls enablePan rotateSpeed={2} />
          </Canvas>
        </div>
        <div className="mb-4 p-2 flex justify-center sm:justify-between items-center gap-2 md:gap-4 sm:gap-0 mt-2 w-full max-w-100">
          <Button
            onClick={() => handleNavigation("previous")}
            className="cursor pointer bg-cyan-700 text-cyan-950 shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,1)] hover:bg-cyan-600 transition-all duration-300"
          >
            <ArrowBigLeft />
          </Button>
          <a
            className="flex items-center gap-2 cursor-pointer text-white"
            href={currentProject.href}
            target="_blank"
            rel="noreferrer"
          >
            <p className="px-4 select-none font-light tracking-widest text-sm md:text-lg rounded-full border-2 border-cyan-500/30 hover:bg-slate-950">
              Live Demo
            </p>
          </a>
          <Button
            onClick={() => handleNavigation("next")}
            className="cursor pointer bg-cyan-700 text-cyan-950 shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,1)] hover:bg-cyan-600 transition-all duration-300"
          >
            <ArrowBigRight />
          </Button>
        </div>
        <footer className="block text-center text-sm text-slate-400 px-6 leading-relaxed">
          <p className="block text-center text-sm text-slate-400 mt-6 px-6 leading-relaxed">
            Zoom in to get a better view of the App. Check the code on my
            <a
              href="https://github.com/EzequielMadrid"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-600 font-medium hover:text-cyan-500 transition-colors duration-300 ml-1"
            >
              GitHub
            </a>
            .
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
