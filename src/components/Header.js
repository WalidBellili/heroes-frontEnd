import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>HOME</Link>
        <Link to={"/form"}>ADD ONE</Link>
      </nav>
    </header>
  );
};

export default Header;
