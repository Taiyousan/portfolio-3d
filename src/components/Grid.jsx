// import dependencies

// import components
import { useEffect, useState } from "react";
import Box from "./Box";

export default function Grid() {
  const [clickedBox, setClickedBox] = useState(null);

  const numRows = 10;
  const numCols = 10;

  const positions = [];
  for (let row = numRows * -1; row < numRows; row++) {
    for (let col = numCols * -1; col < numCols; col++) {
      positions.push([row, 0, col]);
    }
  }

  // useEffect(() => {
  //   console.table(positions);
  // }, []);

  return (
    <>
      {positions.map((position, index) => (
        <Box
          key={index}
          position={position}
          color={"pink"}
          id={`Box${index}`}
          clickedBox={clickedBox}
          setClickedBox={setClickedBox}
          isSpecial={(index + 1) % 10 === 0 ? true : false}
        />
      ))}
    </>
  );
}
