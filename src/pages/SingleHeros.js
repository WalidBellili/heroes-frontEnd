import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PutForm from "./PutForm";

const SingleHeros = () => {
  const [hero, setHero] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    fetchAHero();
    // eslint-disable-next-line
  }, [slug]);

  const fetchAHero = async () => {
    const request = await fetch(
      `${process.env.REACT_APP_ADRESS}heroes/${slug}`
    );
    const response = await request.json();
    setHero(response);
  };
  console.log(hero);
  const handleDeleteClick = async () => {
    const request = await fetch(
      `https://new-hero-konexio.herokuapp.com/heroes/${slug}`,
      {
        method: "DELETE",
      }
    );
    console.log(request);
    navigate("/");
  };

  return (
    <section className="card-hero">
      <article className="card single">
        <img src={hero.image} alt={hero.name} />
        <div className="txt">
          <p>{hero.name}</p>
          <p>{hero.age}</p>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </article>
      <PutForm hero={hero} />
    </section>
  );
};

export default SingleHeros;
