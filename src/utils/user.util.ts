import { PublicUser } from "@/interfaces/public-user.interface";
import { User } from "../../generated/prisma/client";

export const toPublicUser = (user: User): PublicUser => {
    const { id, name, email } = user;
    return { id, name, email };
};