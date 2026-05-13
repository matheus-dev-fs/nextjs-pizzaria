import { ProductsStore } from "@/types/products-store.type";
import { create, StoreApi, UseBoundStore } from "zustand";
import { Product } from "../../generated/prisma/browser";

export const useProducts: UseBoundStore<StoreApi<ProductsStore>> = create<ProductsStore>((set) => ({
    products: [],
    setProducts: (data: Product[]): void => set({ products: data }),
}));