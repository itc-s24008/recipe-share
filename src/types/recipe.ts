export type Recipe = {
  id: string;
  title: string;
  materials: string;  
  steps: string;  
  image?: {
    url: string;
  } | null;  
};
