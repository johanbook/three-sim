import * as Three from "three";

import scene from "./scene";

const material = new Three.MeshNormalMaterial();

export function addCube() {
  const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
  const mesh = new Three.Mesh(geometry, material);
  scene.add(mesh);
  return mesh;
}

export function addSphere() {
  const geometry = new Three.SphereGeometry(0.2, 0.2, 0.2);
  const mesh = new Three.Mesh(geometry, material);
  scene.add(mesh);
  return mesh;
}
