import styles from "./page.module.css";
import { client } from "../lib/client";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../types/recipe";

export default async function Home() {
  const data = await client.get({
    endpoint: "recipes",
    queries: { limit: 3 },
  });
  const recipes: Recipe[] = data.contents;

  return (
    <section className={styles.container}>
      <h2>レシピ一覧</h2>
      <div className={styles.grid}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

