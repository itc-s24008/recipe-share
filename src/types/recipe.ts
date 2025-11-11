export type Recipe = {
  id: string;
  title: string;
  materials: string;  // ← 配列ではなく文字列
  steps: string;      // ← 同じく文字列
  image?: {
    url: string;
  };
};
