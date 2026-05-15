import { v4 } from "uuid";
import { RefreshToken } from "../../generated/prisma/client";

export const createRefreshToken = (): string => {
    const token: string = v4();
    return token;
};

export const isTokenExpired = (token: RefreshToken): boolean => {
    const dateNow: Date = new Date();
    const tokenAge: number = (dateNow.getTime() - token.createdAt.getTime()) / 1000;
    return tokenAge > 7 * 24 * 60 * 60;
}