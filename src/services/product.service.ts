import { Product } from "../../generated/prisma/client";
import * as productRepository from "@/repositories/product.repository";
import * as productUtil from "@/utils/product.util";

export const getAllProducts = async (): Promise<Product[]> => {
    const products: Product[] = await productRepository.getAllProducts();
    return productUtil.formatProductsImageUrl(products);
};