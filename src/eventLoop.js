import camera from "./camera";
import renderer from "./renderer";
import scene from "./scene";

const queue = {};

/** Register update function to event loop */
export function register(fn, key) {
  if (key in queue) {
    console.error(`[three-sim] Key '${key}'x already registered in event loop`);
  }
  queue[key] = fn;
  return key;
}

/** Unregister function from event loop */
export function unregister(key) {
  queue[key] = null;
}

// for (const mesh of objects) {
//   mesh.rotation.x += 0.01;
//   mesh.rotation.y += 0.02;
// }

/** Start event loop */
export function start() {
  requestAnimationFrame(start);
  Object.values(queue).forEach((fn) => fn());
  renderer.render(scene, camera);
}
