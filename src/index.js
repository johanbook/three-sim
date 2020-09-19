import init from "./init";
import { addCube, addSphere } from "./object";
import { registerObject, startAnimation } from "./animation";

init();
const cube = addSphere();
registerObject(cube);
startAnimation();
