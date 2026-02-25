import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Fancy from "../components/Fancy.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `Platform empowers growing businesses and startups to achieve scalable advantage with premium results-driven web apps`;

  return (
    <section id="hub" className="flex flex-col justify-end min-h-screen">
      <AnimatedSection
        subTitle={"New Apps for mobiles and web platforms"}
        title={"digital experiences"}
        text={text}
        textColor={"text-cyan-100"}
      />
      <figure
        className="absolute inset-0 -z-10"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Fancy scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
