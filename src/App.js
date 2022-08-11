import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const request = await fetch("http://localhost:5000/heroes/");
    const response = await request.json();
  };
  console.log();
  return <div></div>;
};

export default App;
