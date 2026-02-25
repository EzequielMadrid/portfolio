import { useRef, useMemo, useLayoutEffect } from "react";
import gsap from "gsap";
import * as THREE from "three";

const Stars = ({ count = 2000 }) => {
  const points = useRef();
  const material = useRef();

  const texture = useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, [count]);

  useLayoutEffect(() => {
    if (!points.current || !material.current) return;

    gsap.to(points.current.rotation, {
      y: Math.PI * 2,
      duration: 120,
      repeat: -1,
      ease: "none",
    });

    gsap.to(material.current, {
      size: 0.02,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        ref={material}
        map={texture}
        size={0.09}
        color="#22d3ee"
        transparent
        alphaTest={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export default Stars;
