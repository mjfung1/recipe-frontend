import { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Card } from "./Card";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);

  
  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          "https://recipe-app-vv5z.onrender.com/recipes"
        );

        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `https://recipe-app-vv5z.onrender.com/recipes/savedRecipes/ids/${userID}`
        );

        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
      }
    };


    if (cookies.access_token) {
      fetchSavedRecipe();

    }

    fetchRecipe();
  }, []);


  const saveRecipe = async (recipeID) => {
   
    try {
        const response = await axios.put(
          "https://recipe-app-vv5z.onrender.com/recipes",
          { recipeID, userID },
          { headers: { authorization: cookies.access_token } }
        );

        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
      }
    
  };

  const isRecipeSaved = id => savedRecipes.includes(id);

  return (
    <div>
      <h1 className="text-center mb-4">Recipes</h1>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <Card key={recipe._id} recipe={recipe} isRecipeSaved={isRecipeSaved} saveRecipe={saveRecipe} route="home" />
        ))}
      </div>
    </div>
  );
};
