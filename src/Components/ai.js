import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN); // ✅ Corrected

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await hf.textGeneration({
      model: "mistralai/Mistral-7B-Instruct-v0.1",
      inputs: `### System:
${SYSTEM_PROMPT}

### User:
I have ${ingredientsString}. Please give me a recipe you'd recommend I make!

### Assistant:`,
      parameters: {
        max_new_tokens: 200,
        temperature: 0.7,
        top_p: 0.9,
      },
    });

    return response.generated_text;
  } catch (err) {
    console.error("Error fetching recipe:", err);
    return "Sorry, I couldn't generate a recipe at the moment.";
  }
}
