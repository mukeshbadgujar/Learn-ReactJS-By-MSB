import React, { useState } from "react";

const InputName = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();

  const InputEvent = (e) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    setFullName(name);
  };

  return (
    <React.Fragment>
      <h1>Name: {fullName} </h1>
      <h1>Name Update: {name} </h1>
      <input type="text" onChange={InputEvent} value={name} />
      <button onClick={onSubmit}>Click</button>
    </React.Fragment>
  );
};
export default InputName;
