"use client";

import { useCart } from "@/stores/cart.store";
import { Button } from "../ui/button";
import { CartStore } from "@/types/cart-store.type";

export const CartButton: React.FC = () => {
    const cart: CartStore = useCart();

    const handleOpenCart = (): void => {
        cart.setOpen(true);
    };

    return (
        <Button onClick={handleOpenCart}>
            Carrinho
        </Button>
    );
};