import { NextResponse } from "next/server";
import * as authService from "@/services/auth.service";
import * as refreshTokenService from "@/services/refresh-token.service";

export const POST = async (request: Request) => {
    const { email, password }: { email: string; password: string } = await request.json();

    if (!email || !password) {
        return NextResponse.json({ error: "Os campos são obrigatórios" }, { status: 400 });
    }

    const user = await authService.login(email, password);

    if (!user) {
        return NextResponse.json({ error: "Email ou senha inválidos" }, { status: 401 });
    }

    const accessToken: string = authService.generateToken(user.id);
    const refreshToken: string = await refreshTokenService.createRefreshToken(user.id);

    return NextResponse.json({ user, accessToken, refreshToken }, { status: 200 });
}