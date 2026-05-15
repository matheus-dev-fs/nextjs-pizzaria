import { NextResponse } from "next/server";
import * as authService from "@/services/auth.service";

export const POST = async (request: Request) => {
    const { email }: { email: string } = await request.json();

    if (!email) {
        return NextResponse.json({ exists: false }, { status: 200 });
    }

    const emailExists: boolean = await authService.hasEmail(email);

    return NextResponse.json({ exists: emailExists }, { status: 200 });
};