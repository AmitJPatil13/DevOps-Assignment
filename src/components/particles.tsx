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
    <div className="pointer-events-none absolute inset-0 z-0">
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
            color: { value: ["#f59e0b", "#f43f5e", "#38bdf8"] },
            links: {
              enable: true,
              color: "#334155",
              opacity: 0.18,
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
            opacity: { value: 0.3, animation: { enable: true, speed: 0.5, minimumValue: 0.12, sync: false } },
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


