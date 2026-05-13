"use client";

import { PizzasResponse } from "@/types/pizzas-response.type";
import { Product } from "../../../generated/prisma/client";
import { JSX, useEffect } from "react";
import { PizzaItem } from "./pizza-item.component";
import { useProducts } from "@/stores/products.store";
import { ProductsStore } from "@/types/products-store.type";

type Props = {
    pizzas: Product[];
}

export const PizzaList: React.FC<Props> = ({ pizzas }) => {
    const products: ProductsStore = useProducts();

    useEffect((): void => {
        products.setProducts(pizzas);
    }, []);

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {pizzas.map((pizza: Product): JSX.Element => (
                <PizzaItem
                    key={pizza.id}
                    data={pizza}
                />
            ))}
        </div>
    );
};