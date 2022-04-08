import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";

import { StyledHeader } from "./Header.style";

function Header({ setTerm }) {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <StyledHeader>
      <nav>
        <Link to="/">Cooking</Link>
        {pathname === "/" && <SearchBar setTerm={setTerm} />}
        <Link to="/create">Create Recipe</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;
