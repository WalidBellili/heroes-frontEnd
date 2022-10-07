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
      <div className="title">
        <article>
          <h1>Heroes</h1>
        </article>
      </div>
      <section className="card-container">
        <div>
          {heroes.map((hero) => {
            return <Card hero={hero} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Heros;
