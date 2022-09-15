import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleHeros = () => {
  const [hero, setHero] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    fetchAHero();
  }, []);

  const fetchAHero = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}`);
    const response = await request.json();
    setHero(response);
  };
  console.log(hero);
  return (
    <section className="card-container">
      <article className="card">
        <img src={hero.image} alt={hero.name} />
        <div className="txt">
          <p>{hero.name}</p>

          <p>{hero.age}</p>
        </div>
      </article>
    </section>
  );
};

export default SingleHeros;
