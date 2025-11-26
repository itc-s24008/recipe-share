import Link from "next/link";
import Image from "next/image";
import styles from "./RecipeCard.module.css";
import { Recipe } from "../types/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const materialsArray = recipe.materials?.split("\n") || [];

  return (
    <Link href={`/recipes/${recipe.id}`} className={styles.card}>
      {recipe.image?.url && (
        <Image
          src={recipe.image.url}
          alt={recipe.title}
          width={400}     
          height={300}    
          className={styles.image}
        />
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{recipe.title}</h3>

        <p className={styles.materials}>
          {materialsArray.length > 0
            ? materialsArray.slice(0, 3).join("、")
            : "材料情報なし"}
        </p>
      </div>
    </Link>
  );
}
