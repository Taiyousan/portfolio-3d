// import dependencies
import { Outlines } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Box({ id, clickedBox, setClickedBox, ...props }) {
  const [isClicked, setIsClicked] = useState(false);
  const thisMesh = useRef();

  // Unclick this box if it is not the clicked box
  useEffect(() => {
    if (clickedBox !== id) {
      setIsClicked(false);
      const clickedObject = thisMesh.current;
      gsap.to(clickedObject.position, { y: props.position[1], duration: 0.5 });
      gsap.to(clickedObject.material.color, {
        r: 1,
        g: 0.5271151256969157,
        b: 0.5972017883558645,
        duration: 0.5,
      });
    }
  }, [clickedBox, id]);

  const hoverEnter = (e) => {
    const clickedObject = thisMesh.current;
    if (!isClicked) {
      gsap.to(clickedObject.position, { y: 0.1, duration: 0.5 });
      gsap.to(clickedObject.material.color, {
        r: 1,
        g: 0.247,
        b: 0.4,
        duration: 0.5,
      });
    }
    e.stopPropagation();
  };

  const backToDefault = () => {
    const clickedObject = thisMesh.current;
    gsap.to(clickedObject.position, { y: props.position[1], duration: 0.5 });
    gsap.to(clickedObject.material.color, {
      r: 1,
      g: 0.5271151256969157,
      b: 0.5972017883558645,
      duration: 0.5,
    });
  };

  const hoverLeave = (e) => {
    if (!isClicked) {
      backToDefault();
    }
    e.stopPropagation();
  };

  const clickHandler = (e) => {
    setIsClicked(true);
    setClickedBox(id); // Set this box as the clicked box
    const clickedObject = thisMesh.current;
    gsap.to(clickedObject.material.color, {
      r: 1,
      g: 0,
      b: 0,
      duration: 0.5,
    });
    gsap.to(clickedObject.position, { y: 2, duration: 0.5 });
    e.stopPropagation();
  };

  return (
    <>
      <mesh
        ref={thisMesh}
        position={props.position}
        onPointerEnter={hoverEnter}
        onPointerLeave={hoverLeave}
        onClick={clickHandler}
      >
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={props.color} />
        <Outlines color={"white"} />
      </mesh>
    </>
  );
}
