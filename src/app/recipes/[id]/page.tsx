import { client } from "../../../lib/client";
import { Recipe } from "../../../types/recipe";
import Image from "next/image";

export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe: Recipe = await client.get({
    endpoint: "recipes",
    contentId: id,
  });

  return (
    <article>
      <h1>{recipe.title}</h1>

      {recipe.image && (
        <Image
          src={recipe.image.url}
          alt={recipe.title}
          width={800}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      )}

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
