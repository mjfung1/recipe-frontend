

export const Card = ({ recipe, isRecipeSaved, saveRecipe, route }) => {
  return (
    <div className="card" style={{ width: "28rem", marginBottom: "20px" }}>
      <img
        src={recipe.imageUrl}
        className="card-img-top card-img"
        alt={recipe.name}
      />
      <div className="card-body">
        <div className="card-title-container">
          <h4 className="card-title">{recipe.name}</h4>
          <p className="time">
            <img
              src="/images/timer.png"
              alt="Logo"
              className="d-inline-block align-text-top card-timer-img"
            ></img>
            <span>{recipe.cookingTime} mins</span>
          </p>
        </div>
        <button
          className="btn btn-primary btn-large more-details-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          More Details
        </button>
        
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" style={{ width: "48rem" }}>
            <div className="modal-content">
              <div className="card">
                <img src={recipe.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>{" "}
                  <p className="time">
                    <img
                      src="/images/timer.png"
                      alt="Logo"
                      className="d-inline-block align-text-top card-timer-img"
                    ></img>
                    <span>{recipe.cookingTime} mins</span>
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  {recipe.ingredients.map((ingredient) => {
                    return <li className="list-group-item">{ingredient}</li>;
                  })}
                </ul>
                <div className="card-body">
                  <h6 className="card-text mx-3 my-2">{recipe.instructions}</h6>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {route === "home" && (
          <button
            onClick={() => saveRecipe(recipe._id)}
            disabled={isRecipeSaved(recipe._id)}
            className={
              isRecipeSaved(recipe._id)
                ? "btn btn-secondary btn-large mx-2"
                : "btn btn-danger btn-large mx-2"
            }
          >
            {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
          </button>
        )}
      </div>
    </div>
  );
};

