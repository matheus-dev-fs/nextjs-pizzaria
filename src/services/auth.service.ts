import * as authRepository from "@/repositories/auth.repository";
import * as passwordUtil from "@/utils/password.util";
import * as userUtil from "@/utils/user.util";
import * as tokenUtil from "@/utils/token.util";
import * as refreshTokenUtil from "@/utils/refresh-token.util";
import { User } from "../../generated/prisma/browser";
import { PublicUser } from "@/interfaces/public-user.interface";
import { RefreshToken } from "../../generated/prisma/client";

export const hasEmail = async (email: string): Promise<boolean> => {
    return await authRepository.hasEmail(email);
};

export const login = async (email: string, password: string): Promise<PublicUser | null> => {
    const user: User | null = await authRepository.login(email, password);

    if (!user) {
        return null;
    }

    const passwordMatch: boolean = await passwordUtil.comparePassword(password, user.password);

    if (!passwordMatch) {
        return null;
    }

    return userUtil.toPublicUser(user);
};

export const generateToken = (userId: number): string => {
    return tokenUtil.createToken(userId);
};

export const refresh = async (refreshToken: string): Promise<string | null> => {
    const token: RefreshToken | null = await authRepository.findRefreshToken(refreshToken);

    if (!token) {
        return null;
    }

    const isTokenValid: boolean = refreshTokenUtil.isTokenExpired(token);

    if (isTokenValid) {
        return null;
    }

    const newToken: string = tokenUtil.createToken(token.userId);
    return newToken;
};