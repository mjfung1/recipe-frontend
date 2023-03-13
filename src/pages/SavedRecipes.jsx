import { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Card } from "./Card";
import { Loading } from "./Loading";

export const SavedRecipes = ({ recipe, isRecipeSaved, saveRecipe, route }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `https://recipe-app-vv5z.onrender.com/recipes/savedRecipes/${userID}`
        );

        setSavedRecipes(response.data.savedRecipes);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSavedRecipe();0.
    0
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4">Saved Recipes</h2>
      <div className="recipes-container">
        {!isLoading ? (savedRecipes.map((recipe) => {
          
          if (savedRecipes.length) {
          return <Card
                    key={recipe._id}
                    recipe={recipe}
                    isRecipeSaved={isRecipeSaved}
                    saveRecipe={saveRecipe}
                    route="savedRecipes"
                  />

          } else {
            return (<h1>No Saved Recipes</h1>)
          }
        })) : (<Loading />)}
      </div>
    </div>
  );
};
