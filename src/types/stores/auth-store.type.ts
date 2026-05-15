export type AuthStore = {
    token: string | null;
    open: boolean;
    setOpen: (open: boolean) => void;
    setToken: (token: string | null) => void;
};