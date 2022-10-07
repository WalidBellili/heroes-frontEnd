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
    const request = await fetch(`http://localhost:5000/heroes/${slug}`);
    const response = await request.json();
    setHero(response);
  };
  const handleDeleteClick = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${slug}`, {
      method: "DELETE",
    });
    console.log(request);
    navigate("/");
  };
  
  return (
    <section className="card-container">
      <article className="card">
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
