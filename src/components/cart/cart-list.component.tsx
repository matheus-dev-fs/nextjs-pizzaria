"use client";

import { useCart } from "@/stores/cart.store";
import { Button } from "../ui/button";
import { CartStore } from "@/types/cart-store.type";
import { ProductsStore } from "@/types/products-store.type";
import { useProducts } from "@/stores/products.store";
import { Dispatch, SetStateAction, useState } from "react";

export const CartList: React.FC = () => {
    const cart: CartStore = useCart();
    const products: ProductsStore = useProducts();

    const [subTotal, setSubTotal]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);
    const [shippingCost, setShippingCost]: [number, Dispatch<SetStateAction<number>>] = useState<number>(10);

    return (
        <>
            <div className="flex flex-col gap-3 my-5">
                ...
            </div>
            <div>
                <div>Sub-total: </div>
                <div>Frete:</div>
                <div>Total:</div>
            </div>

            <Button>Finalizar compra</Button>
        </>
    );
}