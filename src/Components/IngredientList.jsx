import React from "react";

const IngredientList = ({ ingredients }) => {
  return (
    <section>
      <h2 className="ingredients-title">Ingredients on hand:</h2>
      <ul className="ingredients-list">
        {ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              {ingredient}
            </li>
          ))
        ) : (
          <p className="no-ingredients">No ingredients added yet.</p>
        )}
      </ul>
    </section>
  );
};

export default IngredientList;
