import { AuthStore, TokenType } from "@/types/stores/auth-store.type";
import { create, StoreApi, UseBoundStore } from "zustand";
import { setCookie, deleteCookie } from "cookies-next/client"; 

export const useAuth: UseBoundStore<StoreApi<AuthStore>> = create<AuthStore>((set): AuthStore => ({
    accessToken: null,
    refreshToken: null,
    open: false,
    setOpen: (open: boolean): void => set((state: AuthStore): AuthStore => ({...state, open })),
    setToken: (token: string | null, type: TokenType): void => set((state: AuthStore): AuthStore => {
        if (token) {
            setCookie(`${type}_token`, token);
        } else {
            deleteCookie(`${type}_token`);
        }

        return {
            ...state,
            accessToken: token
        };
    })
}));