import { TokenPayload } from "@/types/token-payload.type";
import jwt from "jsonwebtoken";

export const createToken = (userId: number): string => {
    const token: string = jwt.sign({ userId }, process.env.JWT_SECRET_KEY as string, {
        expiresIn: "15m",
    });
    return token;
}

export const verifyToken = (token: string): number | null => {
    try {
        const decoded: TokenPayload = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as TokenPayload;
        return decoded.userId;
    } catch (error) {
        return null;
    }
}