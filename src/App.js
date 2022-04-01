import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home";
import Create from "./pages/create";
import Search from "./pages/search";
import Recipe from "./pages/recipe";

import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/recipes/:id" element={<Recipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
