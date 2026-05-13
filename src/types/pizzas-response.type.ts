import { Product } from "../../generated/prisma/client"

export type PizzasResponse = {
    pizzas: Product[];
}