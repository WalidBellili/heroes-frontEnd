import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heros from "./Heros";

const SingleHeros = () => {
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const params = useParams();

  const fetchData = async () => {
    const request = await fetch(`http://localhost:5000/heroes/${params.slug}`);
    const response = await request.json();
    setHeros(response);
  };
  console.log(heros);

  return (
    <div>
      {
        <>
          <img src={heros.image} alt="héro" />
          <p>{heros.slug}</p>
          <p>{heros.power}</p>
        </>
      }
    </div>
  );
};

export default SingleHeros;
