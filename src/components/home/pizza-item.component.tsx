"use client";

import Image from "next/image";
import { Product } from "../../../generated/prisma/client";
import { Button } from "../ui/button";
import { decimalToMoney } from "@/utils/convert.util";
import { useCart } from "@/stores/cart.store";
import { CartStore } from "@/types/cart-store.type";

type Props = {
    data: Product;
}

export const PizzaItem: React.FC<Props> = ({ data }) => {
    const { id, image, name, price, ingredients } = data;
    const cart: CartStore = useCart();

    const handleAddToCart = (): void => {
        cart.addItem({
            productId: id,
            quantity: 1
        });
        cart.setOpen(true);
    };

    return (
        <div className="text-sm bg-secondary p-4 rounded-md">
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="w-full mb-3"
            />
            <div className="text-lg font-bold">{name}</div>
            <div>{decimalToMoney(price)}</div>
            <div className="truncate mb-3">{ingredients}</div>
            <div className="text-center">
                <Button onClick={handleAddToCart}>
                    Adicionar ao carrinho
                </Button>
            </div>
        </div>
    );
};