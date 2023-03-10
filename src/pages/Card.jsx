




export const Card = ({ recipe, isRecipeSaved, saveRecipe, route }) => {
  return (
    <div className="card" style={{ width: "28rem", marginBottom: "20px" }}>
      <img
        src={recipe.imageUrl}
        className="card-img-top card-img"
        alt={recipe.name}
      />
      <div className="card-body">
        <>
          <h4 className="card-title">{recipe.name}</h4>
          <p className="time">
            <img
              src="/images/timer.png"
              alt="Logo"
              className="d-inline-block align-text-top card-timer-img"
            ></img>
            <span>{recipe.cookingTime} mins</span>
          </p>
        </>
        {route === "home" && (
          <button
            onClick={() => saveRecipe(recipe._id)}
            disabled={isRecipeSaved(recipe._id)}
            className={
              isRecipeSaved(recipe._id)
                ? "btn btn-secondary btn-large"
                : "btn btn-danger btn-large"
            }
          >
            {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
          </button>
        )}
      </div>
    </div>
  );
};

