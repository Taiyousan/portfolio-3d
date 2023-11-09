// imports dependencies
import { CameraControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";

// import components
import Grid from "./Grid";
import Screen from "./Screen";

export default function Scene() {
  return (
    <>
      {/* Performance Monitor */}
      <Perf />

      {/* Post Processing */}
      <EffectComposer>
        <Pixelation granularity={2} />
      </EffectComposer>

      {/* CAMERA */}
      <CameraControls makeDefault />

      {/* Lights */}
      <ambientLight intensity={0.5} />

      {/* Components */}
      <Grid />
      <Screen />
    </>
  );
}
