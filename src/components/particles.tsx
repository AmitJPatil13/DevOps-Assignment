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
    <Particles
      id="tsparticles"
      init={init}
      className="absolute inset-0 -z-10"
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
              parallax: { enable: true, force: 30, smooth: 20 },
            },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            attract: { distance: 150, duration: 0.2, factor: 0.8, speed: 0.8 },
            push: { quantity: 2 },
            trail: { pauseOnStop: true, quantity: 1 },
            repulse: { distance: 140, duration: 0.2 },
          },
        },
        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color: { value: ["#818CF8", "#34D399", "#F472B6", "#22D3EE"] },
          links: {
            enable: true,
            color: "#64748B",
            opacity: 0.25,
            distance: 140,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            drift: 0.2,
            straight: false,
            outModes: { default: "out" },
            random: true,
          },
          opacity: {
            value: 0.45,
            animation: { enable: true, speed: 0.6, minimumValue: 0.15, sync: false },
          },
          size: {
            value: { min: 0.8, max: 2.8 },
            animation: { enable: true, speed: 2, minimumValue: 0.5, sync: false },
          },
          shape: { type: ["circle", "triangle"] },
          shadow: { enable: false },
        },
      }}
    />
  );
}


