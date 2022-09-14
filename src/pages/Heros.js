import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Heros = () => {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    const request = await fetch(`http://localhost:5000/heroes`);
    const response = await request.json();
    setHeroes(response);
  };
  // console.log(heroes);
  return (
    <>
      <Header />
      {heroes.map((hero) => {
        return <Card hero={hero} />
      })}
    </>
  );
};

export default Heros;
