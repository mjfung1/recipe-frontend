

export const CardDetails = ({name, ingredients, instructions, imageUrl, cookingTime, userOwner}) => {
    return (
        <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{instructions}</p>
            </div>
            <ul className="list-group list-group-flush">
                {/* {ingredients.map(ingredient => {
                    <li className="list-group-item">{ingredient}</li>

                })} */}

            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}