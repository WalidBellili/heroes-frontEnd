import Heros from "./pages/Heros";
import Form from "./pages/Form";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SingleHeros from "./pages/SingleHeros";
import AddHero from "./pages/AddHero";
import "./assets/styles/index.css";
// import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header */}
      <Link to={"/"}>Home</Link>
      <Link to={"/form"}>Formulaire</Link>
      <Link to={"/addHero"}>Add</Link>

      <Routes>
        <Route path="/" element={<Heros />} />
        <Route path="/form" element={<Form />} />
        <Route path="/singleHeros/:slug" element={<SingleHeros />} />
        <Route path="/addHero" element={<AddHero />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
