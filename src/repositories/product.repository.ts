import { prisma } from "@/lib/prisma";
import { Product } from "../../generated/prisma/client";

export const getAllProducts = async (): Promise<Product[]> => {
    const products: Product[] = await prisma.product.findMany();
    return products;
};