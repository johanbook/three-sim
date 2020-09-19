import * as Three from "three";

import scene from "./scene";

export function addCube() {
  const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
  const material = new Three.MeshNormalMaterial();
  const mesh = new Three.Mesh(geometry, material);
  scene.add(mesh);
  return mesh;
}
