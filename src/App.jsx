import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Navbar from "./sections/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Stars from "./components/Stars.jsx";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <color attach="background" args={["#09122C"]} />
          <Stars />
        </Canvas>
      </div>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Projects />
          <Services />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
