import { useEffect, useState } from "react";

const AddHero = () => {
  const [slugValue, setSlugValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [power, setPower] = useState([]);
  const [colorValue, setColorValue] = useState("");
  const [aliveValue, setAliveValue] = useState("");
  const [ageValue, SetAgeValue] = useState("");

  //   useEffect(() => {
  //     getValueFromInput();

  //   }, []);

  const getValueFromInputSlug = (e) => {
    setSlugValue(e.target.value);
  };

  const getValueFromInputName = (e) => {
    setNameValue(e.target.value);
  };

  const getValueFromPowerInput = (e) => {
    const clonedPower = [...power, e.target.value];
    setPower(clonedPower);
  };

  const getColorValueFromInput = (e) => {
    setColorValue(e.target.value);
  };

  const getAliveValueFromInput = (e) => {
    setAliveValue(e.target.value);
  };

  const getAgeValueFromInput = (e) => {
    SetAgeValue(e.target.value);
  };
  console.log(slugValue, nameValue, colorValue, aliveValue, ageValue, power);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newObj = {
      slug: slugValue,
      name: nameValue,
      power: power,
      color: colorValue,
      isAlive: aliveValue,
      age: ageValue,
      image:
        "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg",
    };

    const request = await fetch(`http://localhost:5000/heroes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    });

    const response = await request.json();
  };

  return (
    <div>
      <h2>Add</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Slug"
          onChange={getValueFromInputSlug}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={getValueFromInputName}
        />
        <input
          type="text"
          placeholder="power"
          onChange={getValueFromPowerInput}
        />
        <input
          type="text"
          placeholder="color"
          onChange={getColorValueFromInput}
        />
        <input
          type="text"
          placeholder="isAlive"
          onChange={getAliveValueFromInput}
        />
        <input type="text" placeholder="age" onChange={getAgeValueFromInput} />
        <button type="submit">btn</button>
      </form>
    </div>
  );
};

export default AddHero;
