"use client";

import { Drawer, DrawerContent, DrawerTitle } from "../ui/drawer";
import { useCart } from "@/stores/cart.store";
import { CartStore } from "@/types/cart-store.type";

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
            <DrawerContent>
                <DrawerTitle>Carrinho</DrawerTitle>
                ...
            </DrawerContent>
        </Drawer>
    );
};