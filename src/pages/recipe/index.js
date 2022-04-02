import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import StyledRecipe from "./Recipe.style";

function Recipe() {
  let { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <StyledRecipe>
      {error && <p>{error}</p>}
      {isPending && <p>loading</p>}
      {recipe && (
        <>
          <h2>{recipe.title}</h2>
          <p className="time">takes {recipe.cookingTime}</p>
          <p className="method">{recipe.method}</p>
          <div className="ingredients">
            <h4 className="ingredients-title">ingredients</h4>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </StyledRecipe>
  );
}

export default Recipe;
