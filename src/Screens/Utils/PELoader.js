import React from "react";
import { RotatingLines } from "react-loader-spinner";

function PELoader() {
  return (
    <div className="pe-loader">
      {" "}
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </div>
  );
}

export default PELoader;
