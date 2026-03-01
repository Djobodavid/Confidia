import z from "zod";

export const contactValidation=z.object({
    nom:z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  sujet: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(1, "Le message est requis"),
})