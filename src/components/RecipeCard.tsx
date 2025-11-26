import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../types/recipe";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`} className={styles.card}>
      {recipe.image && (
        <Image
          src={recipe.image.url}
          alt={recipe.title}
          width={400}
          height={250}
          className={styles.thumbnail}
        />
      )}

      <h3 className={styles.title}>{recipe.title}</h3>


    </Link>
  );
}
