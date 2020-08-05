import React from "react";
import A from "./A";
import { createContext } from "react";

const DataOne = createContext();

const App = () => {
  return (
    <React.Fragment>
      <DataOne.Provider value={"Raju"}>
        <A />
      </DataOne.Provider>
    </React.Fragment>
  );
};

export default App;
export { DataOne };
