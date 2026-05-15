import { CartItem } from "@/interfaces/cart-item.interface";
import { CartStore } from "@/types/stores/cart-store.type";

import { create, StoreApi, UseBoundStore } from "zustand";

export const useCart: UseBoundStore<StoreApi<CartStore>> = create<CartStore>((set): CartStore => ({
    open: false,
    items: [],
    addItem: (item: CartItem): void => set((state: CartStore): CartStore => {
        const clonedItems: CartItem[] = [...state.items];
        const existingItem: CartItem | undefined = clonedItems.find((i: CartItem): boolean => i.productId === item.productId);

        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            clonedItems.push(item);
        }

        return { ...state, items: clonedItems };
    }),
    removeItem: (productId: number): void => set((state: CartStore): CartStore => ({
        ...state,
        items: state.items.filter((item: CartItem): boolean => item.productId !== productId)
    })),
    setOpen: (open: boolean): void => set((state: CartStore): CartStore => ({ 
        ...state, 
        open 
    }))
}));