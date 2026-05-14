"use client";

import { Drawer, DrawerContent, DrawerTitle } from "../ui/drawer";
import { useCart } from "@/stores/cart.store";
import { CartStore } from "@/types/cart-store.type";
import { CartEmpty } from "./cart-empty.component";
import { CartList } from "./cart-list.component";

export const Cart: React.FC = () => {
    const cart: CartStore = useCart();
  
    const handleOpenChange = (open: boolean): void => {
        cart.setOpen(open);
    };

    return (
        <Drawer
            direction="right"
            open={cart.open}
            onOpenChange={handleOpenChange}
        >
            <DrawerContent className="p-4">
                <DrawerTitle>Carrinho</DrawerTitle>
                {cart.items.length <= 0 && <CartEmpty />}
                {cart.items.length > 0 && <CartList />}
            </DrawerContent>
        </Drawer>
    );
};