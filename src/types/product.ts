interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

export type { IProduct };
