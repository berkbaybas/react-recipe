import { Link } from "react-router-dom";

import { StyledHeader } from "./Header.style";

function Header() {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">Cooking</Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;
