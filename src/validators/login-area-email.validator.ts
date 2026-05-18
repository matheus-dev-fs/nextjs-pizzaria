import z from 'zod';

export const LoginAreaEmailSchema = z.object({
    email: z.string({required_error: "Email é obrigatório"}).email({ message: "Email inválido" }),
});