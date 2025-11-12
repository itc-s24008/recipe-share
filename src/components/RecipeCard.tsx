import Link from "next/link";
import styles from "./RecipeCard.module.css";
import { Recipe } from "../types/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const materialsArray = recipe.materials?.split("\n") || [];

  return (
    <Link href={`/recipes/${recipe.id}`} className={styles.card}>
      {recipe.image && (
        <img
          src={recipe.image.url}
          alt={recipe.title}
          className={styles.image}
        />
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{recipe.title}</h3>
        <p className={styles.materials}>
          {materialsArray.slice(0, 3).join("、")}
        </p>
      </div>
    </Link>
  );
}
