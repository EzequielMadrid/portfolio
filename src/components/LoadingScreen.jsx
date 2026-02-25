import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFade(true);
            setTimeout(onFinish, 800);
          }, 400);
          return 100;
        }
        return next;
      });
    }, 140);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-999 flex flex-col items-center justify-center transition-opacity duration-700 bg-slate-950 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* loader circle */}
      <div className="relative w-8 h-8">
        <div className="absolute rounded-full inset-0 border border-slate-400/30"></div>
        <div
          className="absolute inset-0 rounded-full border-t border-slate-400 "
          style={{
            transform: `rotate(${progress * 3.6}deg)`,
            transition: "transform 300ms ease-out",
          }}
        />
      </div>
      {/* line */}
      <div className="w-48 h-1 mt-12 overflow-hidden rounded-full bg-slate-400/20">
        <div
          className="h-full transition-all duration-300 bg-cyan-800"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <p className="mt-6 uppercase text-xs tracking-[0.3em] text-slate-400/60">
        loading experience
      </p>
    </div>
  );
};

export default LoadingScreen;
