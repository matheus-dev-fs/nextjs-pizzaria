export type AuthStore = {
    accessToken: string | null;
    refreshToken: string | null;
    open: boolean;
    setOpen: (open: boolean) => void;
    setToken: (token: string | null, type: TokenType) => void;
};

export type TokenType = 'access' | 'refresh';