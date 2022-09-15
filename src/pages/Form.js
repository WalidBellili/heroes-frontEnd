import React from "react";
import { useState } from "react";

const Form = () => {
  const [nameValue, setNameValue] = useState("");
  const [image, setImage] = useState("");
  const [power, setPower] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [isAlive, setIsAlive] = useState(false);

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleChangePower = (e) => {
    setPower(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };
  const handleChangeAliveValue = (e) => {
    setIsAlive(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameValue);
    console.log(image);
    console.log(power);
    console.log(age);
    console.log(color);
    console.log(isAlive);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={nameValue}
        onChange={handleChangeName}
      />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={handleImageChange}
      />
      <label htmlFor="power">Power</label>
      <input
        type="text"
        id="power"
        value={power}
        onChange={handleChangePower}
      />
      <label htmlFor="age">Age</label>
      <input type="number" id="age" value={age} onChange={handleChangeAge} />
      <label htmlFor="color">Color</label>
      <input
        type="text"
        id="color"
        value={color}
        onChange={handleChangeColor}
      />
      <input
        type="checkbox"
        checked={isAlive}
        id="isAlive"
        onChange={handleChangeAliveValue}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
