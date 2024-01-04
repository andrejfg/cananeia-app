import { z } from 'zod'

/**
 * Defines the schema for validating email login data.
 * @returns {z.ZodObject} - The schema object for email login data.
 */
export const emailLoginSchema = z.object({
  usuario: z.string().min(1, 'Usuário é obrigatório'),
  senha: z.string().min(1, 'Senha é obrigatório'),
})

/**
 * Represents the inferred type of the `emailLoginSchema` object.
 * @type {emailLoginSchemaType}
 */
export type emailLoginSchemaType = z.infer<typeof emailLoginSchema>
