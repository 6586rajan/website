import tilt from "tilt.js";

export default function initTilt() {
  $(".js-tilt").tilt({
    glare: true,
    maxGlare: 0.5,
    maxTilt: 3,
    scale: 1.1
  });
}
