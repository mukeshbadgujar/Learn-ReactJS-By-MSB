import React from "react";

const SlotMachine = (e) => {
  let x = e.x;
  let y = e.y;
  let z = e.z;

  if (x === y && y === z) {
    return (
      <React.Fragment>
        <div>
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h2>This is matching </h2>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div>
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h2>This is Not matching </h2>
        </div>
      </React.Fragment>
    );
  }
};

export default SlotMachine;
