"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export function FuturisticParticles() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {/* Mesh gradient blobs */}
      <div className="mesh-blob mesh-blob--1" style={{ top: "-10%", left: "-5%", width: 320, height: 320, background: "radial-gradient(closest-side, rgba(129,140,248,0.5), transparent)" }} />
      <div className="mesh-blob mesh-blob--2" style={{ bottom: "-8%", right: "-6%", width: 360, height: 360, background: "radial-gradient(closest-side, rgba(52,211,153,0.45), transparent)" }} />
      <div className="mesh-blob mesh-blob--3" style={{ top: "20%", right: "15%", width: 280, height: 280, background: "radial-gradient(closest-side, rgba(244,114,182,0.45), transparent)" }} />

      {/* Interactive particles */}
      <Particles
        id="tsparticles"
        init={init}
        className="absolute inset-0"
        options={{
          background: { color: { value: "transparent" } },
          fullScreen: { enable: false },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["attract", "trail"],
                parallax: { enable: true, force: 25, smooth: 18 },
              },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              attract: { distance: 140, duration: 0.2, factor: 0.8, speed: 0.8 },
              push: { quantity: 2 },
              trail: { pauseOnStop: true, quantity: 1 },
              repulse: { distance: 130, duration: 0.2 },
            },
          },
          particles: {
            number: { value: 55, density: { enable: true, area: 900 } },
            color: { value: ["#818CF8", "#34D399", "#F472B6", "#22D3EE"] },
            links: {
              enable: true,
              color: "#475569",
              opacity: 0.22,
              distance: 135,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.55,
              direction: "none",
              drift: 0.18,
              straight: false,
              outModes: { default: "out" },
              random: true,
            },
            opacity: {
              value: 0.42,
              animation: { enable: true, speed: 0.55, minimumValue: 0.15, sync: false },
            },
            size: {
              value: { min: 0.8, max: 2.6 },
              animation: { enable: true, speed: 1.8, minimumValue: 0.5, sync: false },
            },
            shape: { type: ["circle", "triangle"] },
          },
        }}
      />
    </div>
  );
}


