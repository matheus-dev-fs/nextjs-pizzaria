"use client";

import { CartItem } from "@/interfaces/cart-item.interface";
import { useProducts } from "@/stores/products.store";
import { ProductsStore } from "@/types/products-store.type";
import { Product } from "../../../generated/prisma/client";
import Image from "next/image";
import { decimalToMoney } from "@/utils/convert.util";
import { Button } from "../ui/button";
import { CartStore } from "@/types/cart-store.type";
import { useCart } from "@/stores/cart.store";

type Props = {
    data: CartItem;
}

export const CartProduct: React.FC<Props> = ({ data }) => {
    const cart: CartStore = useCart();
    const products: ProductsStore = useProducts();
    const product: Product | undefined = products.products.find((item: Product): boolean => item.id === data.productId);

    if (!product) {
        return null;
    }

    const handleQuantityChange = (type: 'increase' | 'decrease'): void => {
        switch (type) {
            case 'increase':
                cart.addItem({ productId: data.productId, quantity: 1 });
                break;
            case 'decrease':
                 if ((data.quantity - 1) <= 0) {
                    cart.removeItem(data.productId);
                    return;
                }

                cart.addItem({ productId: data.productId, quantity: -1 });
                break;
        }
    };

    const handleIncrease = (): void => {
        handleQuantityChange('increase');
    };

    const handleDecrease = (): void => {
        handleQuantityChange('decrease');
    };


    return (
        <div className="flex items-center gap-3">
            <div className="w-10">
                <Image 
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-full"
                />
            </div>
            <div className="flex-1">
                <div>{product.name}</div>
                <div className="text-sm">{decimalToMoney(product.price)}</div>
            </div>
            <div className="flex items-center bg-secondary p-2 rounded-md">
                <Button size="sm" variant="ghost" onClick={handleDecrease}>-</Button>
                <div className="mx-3">{data.quantity}</div>
                <Button size="sm" variant="ghost" onClick={handleIncrease}>+</Button>
            </div>
        </div>
    );
};