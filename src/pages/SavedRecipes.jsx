import { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Card } from "./Card";
import { Loading } from "./Loading";

export const SavedRecipes = ({ recipe, isRecipeSaved, saveRecipe, route }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `https://recipe-app-vv5z.onrender.com/recipes/savedRecipes/${userID}`
        );

        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSavedRecipe();
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4">Saved Recipes</h2>
      <div className="recipes-container">
        {savedRecipes.length ? (savedRecipes.map((recipe) => (
          <Card
            key={recipe._id}
            recipe={recipe}
            isRecipeSaved={isRecipeSaved}
            saveRecipe={saveRecipe}
            route="savedRecipes"
          />
        ))) : (<Loading />)}
      </div>
    </div>
  );
};
