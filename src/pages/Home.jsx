import { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { useCookies } from "react-cookie";

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
          `https://recipe-app-vv5z.onrender.com/savedRecipes/ids/${userID}`
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
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
                <h2>{recipe.name}</h2>
                <button 
                    onClick={() => saveRecipe(recipe._id)}
                    disabled={isRecipeSaved(recipe._id)}
                >
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
                </button>
            </div>
            <div className="instructionsgh">
                <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
