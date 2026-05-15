import * as userRepository from "@/repositories/user.repository";
import * as passwordUtil from "@/utils/password.util";
import * as userUtil from "@/utils/user.util";
import { User } from "../../generated/prisma/client";
import { PublicUser } from "@/interfaces/public-user.interface";

export const createUser = async (name: string, email: string, password: string): Promise<PublicUser | null> => {
    const existingUser: User | null = await userRepository.findByEmail(email);

    if (existingUser) {
        return null;
    }

    const hashedPassword: string = await passwordUtil.hashPassword(password);

    const createdUser: User | null = await userRepository.createUser(name, email.toLowerCase().trim(), hashedPassword);

    if (!createdUser) {
        return null;
    }

    return userUtil.toPublicUser(createdUser);
};