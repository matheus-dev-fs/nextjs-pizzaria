import { AuthStore } from "@/types/stores/auth-store.type";
import { create, StoreApi, UseBoundStore } from "zustand";
import { setCookie, deleteCookie } from "cookies-next/client"; 

export const useAuth: UseBoundStore<StoreApi<AuthStore>> = create<AuthStore>((set): AuthStore => ({
    token: null,
    open: false,
    setOpen: (open: boolean): void => set((state: AuthStore): AuthStore => ({...state, open })),
    setToken: (token: string | null): void => set((state: AuthStore): AuthStore => {
        if (token) {
            setCookie("token", token);
        } else {
            deleteCookie("token");
        }

        return {
            ...state,
            token
        };
    })
}));