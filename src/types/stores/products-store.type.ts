import { Product } from "../../generated/prisma/browser";

export type ProductsStore = {
    products: Product[];
    setProducts: (data: Product[]) => void;
};