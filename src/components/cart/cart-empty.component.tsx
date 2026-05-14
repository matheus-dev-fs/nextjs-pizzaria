"use client";

import { useCart } from "@/stores/cart.store";
import { Button } from "../ui/button";

export const CartEmpty: React.FC = () => {
    const { setOpen } = useCart();

    const handleClose = (): void => {
        setOpen(false);
    }

    return (
        <div className="my text-center">
            <p className="mb-4">Carrinho vazio.</p>
            <Button onClick={handleClose}>Fechar</Button>
        </div>
    );
};