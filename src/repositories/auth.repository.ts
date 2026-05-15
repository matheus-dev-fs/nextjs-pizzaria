import { prisma } from "@/lib/prisma";
import { User } from "../../generated/prisma/client";

export const hasEmail = async (email: string): Promise<boolean> => {
    const user: User | null = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    return !!user;
};

export const login = async (email: string, password: string): Promise<User | null> => {
    const user: User | null = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    return user;
}