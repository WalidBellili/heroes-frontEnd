import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Heros = () => {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetchHeroes();
    // eslint-disable-next-line
  }, []);

  const fetchHeroes = async () => {
    const request = await fetch(`http://localhost:5000/heroes`);
    const response = await request.json();
    setHeroes(response);
  };
  console.log(heroes);

  return (
    <>
      <h1>All Heroes</h1>
      <section className="card-container">
        {heroes.map((hero) => {
          return <Card hero={hero} />;
        })}
      </section>
    </>
  );
};

export default Heros;
