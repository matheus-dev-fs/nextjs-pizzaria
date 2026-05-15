import { prisma } from "@/lib/prisma";
import { User } from "../../generated/prisma/client";

export const createUser = async (user: string, email: string, password: string): Promise<User | null> => {
    try {
        const createdUser: User = await prisma.user.create({
            data: {
                name: user,
                email,
                password,
            },
        });

        return createdUser;
    } catch (error) {
        return null;
    }
};

export const findByEmail = async (email: string): Promise<User | null> => {
    const user: User | null = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    return user;
}