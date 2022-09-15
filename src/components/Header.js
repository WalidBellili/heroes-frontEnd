import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/form"}>Formulaire</Link>
      <Link to={"/addHero"}>Add</Link>
    </header>
  );
};

export default Header;
