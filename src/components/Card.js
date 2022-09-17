import { Link } from "react-router-dom";

const Card = ({ hero }) => {
  console.log(hero);
  return (
    <article className="card">
      <Link to={`/${hero.slug}`}>
        <img src={hero.image} alt={hero.name} />
        <div className="txt">
          <p>{hero.name}</p>
          <p>{hero.age}</p>

          {hero.power.map((p) => {
            return <li>{p}</li>;
          })}
        </div>
      </Link>
    </article>
  );
};

export default Card;
