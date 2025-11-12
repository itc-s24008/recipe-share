// src/app/page.tsx
import { client } from "../lib/client";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../types/recipe";
import styles from "./page.module.css";

export default async function Home() {
  const data = await client.get({
    endpoint: "recipes",
    queries: { limit: 50 },
  });
  const recipes: Recipe[] = data.contents;

  return (
    <section className={styles.container}>
      <h2>レシピ一覧</h2>
      <div className={styles.grid}>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard recipe={recipe} />
            {recipe.image && (
              <p className={styles.imageNote}>※画像はイメージです</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
