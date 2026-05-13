import { Product } from "../../generated/prisma/browser";

export const formatProductsImageUrl = (products: Product[]): Product[] => {
    return products.map((product: Product): Product => (
        {
            ...product,
            image: `/pizzas/${product.image}`,
        }
    ));
}
