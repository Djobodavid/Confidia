import z from "zod";

export const getZodFieldsErrors=(error: z.core.$ZodError<any>)=>{
  return z.treeifyError(error)
}

export const contactValidation=z.object({
    nom:z.string().min(1, "Le nom est requis"),
  email: z.email("Email invalide"),
  sujet: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(1, "Le message est requis"),
})