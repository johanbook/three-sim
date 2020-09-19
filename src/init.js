import camera from "./camera";
import scene from "./scene";
import renderer from "./renderer";

export default function init() {
  document.body.appendChild(renderer.domElement);
  return { camera, renderer, scene };
}
