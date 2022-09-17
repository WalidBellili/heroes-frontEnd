import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/form"}>Formulaire</Link>
    </header>
  );
};

export default Header;
