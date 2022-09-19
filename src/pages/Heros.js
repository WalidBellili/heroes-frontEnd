import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Heros = () => {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}heroes`);
    const response = await request.json();
    setHeroes(response);
  };

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
