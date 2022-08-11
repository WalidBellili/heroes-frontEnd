import { useEffect, useState } from "react";

const AddHero = () => {
  useEffect(() => {
    setValue();
  }, []);

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getValueFromInput = (e) => {
    setValue(e.target.value);
    const newObj = {
      slug: value,
      name: 
    };
  };
  return (
    <div>
      <h2>Add</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Slug" onChange={getValueFromInput} />
        <input type="text" placeholder="Name" onChange={getValueFromInput} />
        <input type="text" placeholder="" onChange={getValueFromInput} />
        <input type="text" placeholder="" onChange={getValueFromInput} />
        <input type="text" placeholder="" onChange={getValueFromInput} />
      </form>
    </div>
  );
};

export default AddHero;
