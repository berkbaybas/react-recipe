import { Link } from "react-router-dom";
import StyledRecipeList from "./RecipeList.style";

function RecipeList({ recipes }) {
  return (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe">
          <h2 className="recipe-title">{recipe.title}</h2>
          <p className="recipe-time">{recipe.cookingTime} to make.</p>
          <p className="recipe-method">{recipe.method.substring(0, 100)}</p>
          <p className="recipe-ingredients">{recipe.ingredients}</p>
          <Link to={`recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </StyledRecipeList>
  );
}

export default RecipeList;
