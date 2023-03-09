import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CreateRecipe = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientsChange = (e, idx) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post("https://recipe-app-vv5z.onrender.com/recipes", recipe, {
        headers: { authorization: cookies.access_token },
      });
      alert("recipe created");
      navigate("/")
    } catch (err) {
      console.error(err);
    }


  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, idx) => (
          <input
            key={idx}
            type="text"
            name="ingredients"
            id="ingredients"
            value={ingredient}
            autoFocus
            onChange={(e) => handleIngredientsChange(e, idx)}
          />
        ))}
        <button type="button" onClick={addIngredient}>Add Ingredient</button>
        <label htmlFor="instructions">Instructions</label>
        <input
          type="text"
          id="instructions"
          name="instructions"
          onChange={handleChange}
        />
        <label htmlFor="imageUrl">imageUrl</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">cookingTime</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
        />

        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};
