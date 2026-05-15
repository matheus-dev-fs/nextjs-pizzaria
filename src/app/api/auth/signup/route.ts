import { NextResponse } from "next/server";
import * as authService from "@/services/auth.service";
import * as userService from "@/services/user.service";
import * as refreshTokenService from "@/services/refresh-token.service";
import { PublicUser } from "@/interfaces/public-user.interface";

export const POST = async (request: Request) => {
    const { name, email, password }: { name: string; email: string; password: string } = await request.json();

    if (!name || !email || !password) {
        return NextResponse.json({ error: "Os campos são obrigatórios" }, { status: 400 });
    }

    const createdUser: PublicUser | null = await userService.createUser(name, email, password);

    if (!createdUser) {
        return NextResponse.json({ error: "Email já está em uso" }, { status: 409 });
    }

    const refreshToken: string = await refreshTokenService.createRefreshToken(createdUser.id);
    const accessToken: string = authService.generateToken(createdUser.id);

    return NextResponse.json({ user: createdUser, accessToken, refreshToken }, { status: 201 });
};