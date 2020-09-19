import * as Three from "three";

/** Create a renderer */
export function initializeRenderer() {
  const renderer = new Three.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
}

export default initializeRenderer();
