import React from "react";

const Card = ({ hero }) => {
  console.log(hero);
  return (
    <article className="card">
      <img src={hero.image} alt={hero.name} />
      <p>{hero.name}</p>
      <p>{hero.age}</p>

      {hero.power.map((p) => {
        return <li>{p}</li>;
      })}
    </article>
  );
};

export default Card;
