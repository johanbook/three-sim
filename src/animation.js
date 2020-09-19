import camera from "./camera";
import renderer from "./renderer";
import scene from "./scene";

const objects = [];

export function registerObject(obj) {
  objects.push(obj);
}

/** Main loop */
export function startAnimation() {
  requestAnimationFrame(startAnimation);

  for (const mesh of objects) {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
  }

  renderer.render(scene, camera);
}
