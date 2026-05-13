import { Prisma } from "../../generated/prisma/client";

export const decimalToMoney = (price: string | number | Prisma.Decimal) => {
    return parseFloat(price.toString())
        .toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
};