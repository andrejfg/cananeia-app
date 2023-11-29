import { z } from 'zod'

export const emailLoginSchema = z.object({
  email: z.string().min(1, 'Email é obrigatório'),
  senha: z.string().min(1, 'Senha é obrigatório'),
})

export type emailLoginSchemaType = z.infer<typeof emailLoginSchema>
