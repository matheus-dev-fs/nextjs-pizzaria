"use client";

import { PizzasResponse } from "@/types/pizzas-response.type";

type Props = {
    pizzas: PizzasResponse;
}

export const PizzaList: React.FC<Props> = ({ pizzas }) => {
    return (
        <div>
            total: { pizzas.pizzas.length} pizzas disponíveis
        </div>
    );
};