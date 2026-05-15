import * as refreshTokenUtil from "@/utils/refresh-token.util";
import * as refreshTokenRepository from "@/repositories/refresh-token.repository";
import { RefreshToken } from "../../generated/prisma/browser";

export const createRefreshToken = async (userId: number): Promise<string> => {
    const token: string = refreshTokenUtil.createRefreshToken();
    const refreshToken: RefreshToken = await refreshTokenRepository.createRefreshToken(userId, token);
    return refreshToken.token;
};