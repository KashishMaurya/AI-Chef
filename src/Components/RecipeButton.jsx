import React from "react";

const RecipeButton = ({ ingredients, getRecipe }) => {
  return (
    <>
      {ingredients.length < 3 && (
        <p className="min-ingredients-note">
          Add at least 3 ingredients to get a recipe.
        </p>
      )}

      {ingredients.length >= 3 && (
        <div className="recipe-box">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe} className="recipe-button">
            Get a recipe
          </button>
        </div>
      )}
    </>
  );
};

export default RecipeButton;
