import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home";
import Create from "./pages/create";
import Recipe from "./pages/recipe";

import GlobalStyle from "./styles/GlobalStyles";

function App() {
  const [term, setTerm] = useState("");

  return (
    <div className="App">
      <GlobalStyle />
      <Header setTerm={setTerm} />
      <Routes>
        <Route exact path="/" element={<Home term={term} />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/recipes/:id" element={<Recipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
