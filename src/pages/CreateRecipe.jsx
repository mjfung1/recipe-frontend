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
    ingredients: [""],
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
    console.log(recipe.ingredients);
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://recipe-app-vv5z.onrender.com/recipes", recipe, {
        headers: { authorization: cookies.access_token },
      });
      alert("recipe created");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="registration-form w-100">
      <h2 className="text-center mb-4">Create Recipe</h2>
      <form className="rounded" onSubmit={handleSubmit} autoComplete="none">
        <div className="form-icon">
          <span>
            <img
              src="/favicon/grandma-512x512.png"
              alt="Logo"
              className="d-inline-block align-text-top"
            ></img>
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="name" className="text-white">
            Name:{" "}
          </label>
          <input
            type="text"
            className="form-control item"
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ingredients" className="text-white">
            Ingredients:{" "}
          </label>
          {recipe.ingredients.map((ingredient, idx) => (
            <input
              key={idx}
              type="text"
              className="form-control item"
              name="ingredients"
              id="ingredients"
              value={ingredient}
              autoFocus
              onChange={(e) => handleIngredientsChange(e, idx)}
            />
          ))}
          <button
            className="btn create-account"
            type="button"
            onClick={addIngredient}
          >
            Add Ingredient
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="instructions" className="text-white">
            Instructions:{" "}
          </label>
          <textarea
            rows={4}
            className="form-control item"
            id="instructions"
            name="instructions"
            onChange={handleChange}
            placeholder="Instructions"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl" className="text-white">
            Image Url:{" "}
          </label>
          <input
            type="text"
            className="form-control item"
            id="iimageUrl"
            name="imageUrl"
            onChange={handleChange}
            placeholder="Image Url"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cookingTime" className="text-white">
            Cooking Time:{" "}
          </label>
          <input
            type="number"
            className="form-control item"
            id="cookingTime"
            name="cookingTime"
            onChange={handleChange}
            placeholder="cookingTime"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-block create-account">
            Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
};
