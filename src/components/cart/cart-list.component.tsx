"use client";

import { useCart } from "@/stores/cart.store";
import { Button } from "../ui/button";
import { CartStore } from "@/types/cart-store.type";
import { ProductsStore } from "@/types/products-store.type";
import { useProducts } from "@/stores/products.store";
import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react";
import { CartProduct } from "./cart-product.component";
import { CartItem } from "@/interfaces/cart-item.interface";
import { Product } from "../../../generated/prisma/client";
import { decimalToMoney } from "@/utils/convert.util";

export const CartList: React.FC = () => {
    const cart: CartStore = useCart();
    const products: ProductsStore = useProducts();

    const [subTotal, setSubTotal]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);
    const [shippingCost, setShippingCost]: [number, Dispatch<SetStateAction<number>>] = useState<number>(10);

    const calculateSubTotal = (): void => {
        const subTotal: number = cart.items.reduce((total: number, item: CartItem): number => {
            const product: Product | undefined = products.products.find(
                (p: Product): boolean => p.id === item.productId
            );
            
            if (product) {
                return total + (parseFloat(product.price.toString()) * item.quantity);
            }
            
            return total;
        }, 0);

        setSubTotal(subTotal);
    };

    useEffect(calculateSubTotal, [cart]);

    return (
        <>
            <div className="flex flex-col gap-3 my-5">
                {cart.items.map((item: CartItem): JSX.Element =>
                    <CartProduct
                        key={item.productId}
                        data={item}
                    />
                )}
            </div>
            <div className="my-4 text-right">
                <div>Sub-total: {decimalToMoney(subTotal)}</div>
                <div>Frete: {decimalToMoney(shippingCost)}</div>
                <div className="font-bold">Total: {decimalToMoney(subTotal + shippingCost)}</div>
            </div>

            <Button>Finalizar compra</Button>
        </>
    );
}