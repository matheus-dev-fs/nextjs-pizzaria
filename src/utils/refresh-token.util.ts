import { v4 } from "uuid";

export const createRefreshToken = (): string => {
    const token: string = v4();
    return token;
};