export type Recipe = {
  id: string;
  title: string;
  materials: string;  
  steps: string;  
  image?: {
    url: string;
  } | null;  
};
//TypeScriptの型定義してる