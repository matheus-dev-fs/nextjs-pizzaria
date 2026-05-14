import { CartItem } from "@/interfaces/cart-item.interface";

export type CartStore = {
    open: boolean;
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (productId: number) => void;
    setOpen: (open: boolean) => void;
};