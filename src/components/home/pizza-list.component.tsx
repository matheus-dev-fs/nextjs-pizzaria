"use client";

import { PizzasResponse } from "@/types/pizzas-response.type";
import { Product } from "../../../generated/prisma/client";
import { JSX } from "react";
import { PizzaItem } from "./pizza-item.component";

type Props = {
    pizzas: PizzasResponse;
}

export const PizzaList: React.FC<Props> = ({ pizzas }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {pizzas.pizzas.map((pizza: Product): JSX.Element => (
                <PizzaItem
                    key={pizza.id}
                    data={pizza}
                />
            ))}
        </div>
    );
};