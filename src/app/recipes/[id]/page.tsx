import { client } from "../../../lib/client";
import { Recipe } from "../../../types/recipe";

export default async function RecipeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const recipe: Recipe = await client.get({
    endpoint: "recipes",
    contentId: id,
  });

  const materialsArray: string[] = recipe.materials?.split("\n") || [];
  const stepsArray: string[] = recipe.steps?.split("\n") || [];

  return (
    <article style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>{recipe.title}</h1>

      {recipe.image && (
        <img
          src={recipe.image.url}
          alt={recipe.title}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        />
      )}

      <section style={{ marginBottom: "1rem" }}>
        <h2>材料</h2>
        <ul>
          {materialsArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

<section>
  <h2>手順</h2>
  <div
    dangerouslySetInnerHTML={{
      __html: recipe.steps,
    }}
  />
</section>
    </article>
  );
}
