import { Link } from "react-router-dom";

const Card = ({ hero }) => {
  console.log(hero);
  return (
    <article className="card">
      <p>{hero.name}</p>
      <Link to={`/${hero.slug}`}>
        <img src={hero.image} alt={hero.name} />
        <div className="txt">
          {hero.power.map((p) => {
            return <p>{p}</p>;
          })}
        </div>
      </Link>
    </article>
  );
};

export default Card;
