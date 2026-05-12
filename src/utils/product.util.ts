import { Product } from "../../generated/prisma/browser";

export const formatProductsImageUrl = (products: Product[]): Product[] => {
    return products.map((product: Product): Product => (
        {
            ...product,
            image: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzas/${product.image}`,
        }
    ));
};