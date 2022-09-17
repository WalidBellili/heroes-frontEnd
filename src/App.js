import Heros from "./pages/Heros";
import Form from "./pages/Form";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleHeros from "./pages/SingleHeros";

import "./assets/styles/index.css";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Heros />} />
        <Route path="/form" element={<Form />} />
        <Route path="/:slug" element={<SingleHeros />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
