import * as productService from "@/services/product.service";
import { Product } from "../../../../generated/prisma/client";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse<{ pizzas: Product[] }>> => {
    const pizzas: Product[] = await productService.getAllProducts();
    return NextResponse.json({ pizzas });
};