import React, { useState } from "react";

const MultipleFormInput = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const InputEvent = (e) => {
    console.log(e.target.value);

    //const value = e.target.value;
    //const name = e.target.name;
    const { value, name } = e.target;

    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };

      //This all below code is in 2 lines see above
      /*if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }*/
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Submn");
  };

  return (
    <React.Fragment>
      <h1>Name: {fullName.lname}</h1>
      <h1>Name Update: {fullName.fname} </h1>
      <h1>Name L Update:</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={InputEvent}
          value={fullName.fname}
          name="fname"
        />
        <input
          type="text"
          onChange={InputEvent}
          value={fullName.lname}
          name="lname"
        />
        <input
          type="email"
          onChange={InputEvent}
          value={fullName.email}
          name="email"
        />
        <input
          type="phone"
          onChange={InputEvent}
          value={fullName.phone}
          name="phone"
        />
        <button type="submit">Click</button>
      </form>
    </React.Fragment>
  );
};
export default MultipleFormInput;
