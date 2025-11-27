import { client } from "../lib/client";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../types/recipe";
import styles from "./page.module.css";
import SearchForm from "../components/SearchForm";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams; 
  const q = params.q || "";

  const data = await client.get({
    endpoint: "recipes",
    queries: {
      limit: 50,
      q,
    },
  });

  const recipes: Recipe[] = data.contents;

  return (
    <section className={styles.container}>
      <h2>レシピ一覧</h2>

      <SearchForm defaultValue={q} />

      {q && <p>検索ワード: 「{q}」 / {recipes.length}件</p>}

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

      {recipes.length === 0 && <p>該当するレシピがありませんでした。</p>}
    </section>
  );
}
//ホームページのレシピ一覧と検索機能を実装してる