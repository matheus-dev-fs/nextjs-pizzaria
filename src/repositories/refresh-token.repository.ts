import { prisma } from "@/lib/prisma";
import { RefreshToken } from "../../generated/prisma/client";

export const createRefreshToken = async (userId: number, token: string): Promise<RefreshToken> => {
    const refreshToken: RefreshToken = await prisma.refreshToken.create({
        data: {
            userId,
            token,
        },
    });
    return refreshToken;
};