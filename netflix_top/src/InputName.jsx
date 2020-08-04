import React, { useState } from "react";

const InputName = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const [lname, setLName] = useState("");
  const [fullLName, setFullLName] = useState();

  const InputEvent = (e) => {
    setName(e.target.value);
  };
  const InputEvent2 = (e) => {
    setLName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFullName(name);
    setFullLName(lname);
  };

  return (
    <React.Fragment>
      <h1>
        Name: {fullName} {fullLName}
      </h1>
      <h1>Name Update: {name} </h1>
      <h1>Name L Update: {lname} </h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={InputEvent} value={name} />
        <input type="text" onChange={InputEvent2} value={lname} />
        <button type="submit">Click</button>
      </form>
    </React.Fragment>
  );
};
export default InputName;
