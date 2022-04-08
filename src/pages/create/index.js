import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import StyledCreate from "./Create.style";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredients, setCurrentIngredients] = useState("");
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  //redirect user when data response
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [navigate, data]);

  const handleCreateRecipe = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime, ingredients);
    postData({
      title,
      method,
      ingredients,
      cookingTime: cookingTime + " minutes",
    });
  };

  const handleIngredients = () => {
    if (
      currentIngredients.trim() === "" ||
      ingredients.includes(currentIngredients)
    ) {
      return;
    }

    setIngredients((prevState) => [...prevState, currentIngredients]);
    setCurrentIngredients("");
    ingredientInput.current.focus();
  };

  return (
    <StyledCreate>
      <h2>Add a new recipe</h2>
      <form onSubmit={handleCreateRecipe}>
        <label>
          <span>Recipe title</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients</span>
          <div>
            <input
              value={currentIngredients}
              onChange={(e) => setCurrentIngredients(e.target.value)}
              type="text"
              ref={ingredientInput}
            />
            {ingredients}
            <button type="button" onClick={handleIngredients}>
              Add
            </button>
          </div>
        </label>
        <label>
          <span>Recipe method</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time (in minutes)</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button type="submit">Create</button>
      </form>
    </StyledCreate>
  );
}

export default Create;
