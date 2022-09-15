import { Link } from "react-router-dom";

const Card = ({ hero }) => {
  console.log(hero);
  return (
    <article className="card">
      <img src={hero.image} alt={hero.name} />
      <div className="txt">
        <Link to={`/${hero.slug}`}>
          <p>{hero.name}</p>
        </Link>
        <p>{hero.age}</p>

        {hero.power.map((p) => {
          return <li>{p}</li>;
        })}
      </div>
    </article>
  );
};

export default Card;
