import React, { useState } from "react";
import "../style/Input.css";
import IngredientList from "./IngredientList";
import RecipeButton from "./RecipeButton";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "./ai";

const Input = () => {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkdown);
    } catch (err) {
      console.error("Error fetching recipe:", err);
    }
  }

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient").trim();

    if (newIngredient) {
      setIngredients((prev) => [...prev, newIngredient]);
      event.currentTarget.reset();
    }
  }

  async function getRecipe() {
    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      console.log(recipeMarkdown);
      setRecipe(recipeMarkdown); // Store the fetched recipe
      // setRecipeShown(true); // Show the Recipe component
    } catch (err) {
      console.error("Error fetching recipe:", err);
    }
  }

  return (
    <div className="input-container">
      <form onSubmit={addIngredient} className="ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
          className="ingredient-input"
        />
        <button type="submit" className="add-button">
          + Add ingredient
        </button>
      </form>

      <IngredientList ingredients={ingredients} />
      <RecipeButton ingredients={ingredients} getRecipe={getRecipe} />

      {recipe && <Recipe recipe={recipe} />}
    </div>
  );
};

export default Input;
