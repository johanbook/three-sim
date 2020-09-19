import init from "./init";
import { addCube } from "./object";
import { registerObject, startAnimation } from "./animation";

init();
const cube = addCube();
registerObject(cube);
startAnimation();
