import { useState, useEffect } from "react";

const Heros = () => {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const request = await fetch("http://localhost:5000/heroes/");
    const response = await request.json();
    setHeros(response);
  };
  console.log(heros);
  return (
    <div>
      <h2>Héros</h2>
      {heros.map((hero) => {
        return (
          <div>
            <img src={hero.image} alt="Héros" width={200} height={240} />
            <ul>
              <li>{hero.name}</li>
              <li>{hero.power}</li>
              <li>{hero.isAlive}</li>
              <li>{hero.age}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Heros;
