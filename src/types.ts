export interface Packs {
  count: number;
  price: number;
}

export interface Product {
  name: string;
  code: string;
  packagingOptions: [Packs];
}
