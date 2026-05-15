import { JwtPayload } from "jsonwebtoken";

export type TokenPayload = JwtPayload & {
    userId: number;
}