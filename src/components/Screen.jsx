// import dependencies
import { Float, Html } from "@react-three/drei";
// import components

export default function Screen() {
  const width = 60;
  const height = (width * 9) / 16;

  return (
    <>
      {/* <mesh position={[0, 5, -30]} rotation={[0, 0, 0]}>
                <planeGeometry args={[20, 10]} />
                <meshStandardMaterial color={"pink"} />
            </mesh> */}
      {/* <Float floatIntensity={10} rotationIntensity={1}  */}
      <Html
        style={{ userSelect: "none", pointerEvents: "all" }}
        castShadow
        receiveShadow
        occlude={"blending"}
        transform
        position={[0, 5, -12]}
      >
        <iframe
          title="embed"
          width={width * 25}
          height={height * 25}
          src="https://digital.okan3d.com/ENSIIE/P_9216-WAYFINDER/app/"
          frameBorder={0}
        />
      </Html>
      {/* </Float> */}
    </>
  );
}
