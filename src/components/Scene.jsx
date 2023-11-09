// imports dependencies
import { CameraControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

// import components
import Grid from "./Grid";

export default function Scene() {
  return (
    <>
      {/* Performance Monitor */}
      <Perf />

      {/* CAMERA */}
      <CameraControls />

      {/* Lights */}
      <ambientLight intensity={0.5} />

      {/* Components */}
      <Grid />
    </>
  );
}
