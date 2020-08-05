import React from "react";
import { DataOne } from "./App";
const C = () => {
  return (
    <React.Fragment>
      <DataOne.Consumer>
        {(fname) => {
          return <h1>MSB is {fname}</h1>;
        }}
      </DataOne.Consumer>
    </React.Fragment>
  );
};
export default C;
