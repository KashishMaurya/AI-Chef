import "../style/Input.css";
import ReactMarkdown from "react-markdown";
import React from "react";

const Recipe = (props) => {
  // Extract only the recipe section from the AI response
  const cleanRecipe =
    props.recipe.split("### Assistant:")[1]?.trim() || "No recipe available.";

  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <br />
      <h2>AI Chef Recommends:</h2>
      <hr></hr>
      <br />
      <ReactMarkdown>{cleanRecipe}</ReactMarkdown>
    </section>
  );
};

export default Recipe;
