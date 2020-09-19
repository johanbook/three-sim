import * as Three from "three";

/** Create a camera */
export function initializeCamera() {
  const camera = new Three.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;
  return camera;
}
export default initializeCamera();
