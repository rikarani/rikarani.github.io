import type { ISourceOptions } from "tsparticles-engine";

export const nightSky: ISourceOptions = {
  name: "React Night Sky",
  particles: {
    color: {
      value: "#FFF",
    },
    links: {
      blink: false,
      color: {
        value: "#FFF",
      },
      consent: false,
      distance: 150,
      enable: true,
      opacity: 0.02,
      shadow: {
        blur: 5,
        color: {
          value: "lime",
        },
        enable: false,
      },
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      direction: "right",
      enable: true,
      outModes: "bounce",
      speed: 0.05,
    },
    collisions: {
      enable: true,
    },
    number: {
      density: {
        enable: false,
      },
      limit: -1,
      value: 90,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: {
        min: 0.05,
        max: 0.5,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 1.5,
    },
  },
  pauseOnBlur: true,
  background: {
    color: "#000",
  },
};
