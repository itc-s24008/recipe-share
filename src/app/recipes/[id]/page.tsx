import { client } from "../../../lib/client";
import { Recipe } from "../../../types/recipe";

export default async function RecipeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const recipe: Recipe = await client.get({
    endpoint: "recipes",
    contentId: id,
  });

  return (
    <article>
      <h1>{recipe.title}</h1>
      {recipe.image && <img src={recipe.image.url} alt={recipe.title} />}
      <section>
        <h2>材料</h2>
        <div dangerouslySetInnerHTML={{ __html: recipe.materials }} />
      </section>
      <section>
        <h2>手順</h2>
        <div dangerouslySetInnerHTML={{ __html: recipe.steps }} />
      </section>
    </article>
  );
}
