import { z } from 'zod'

export const loginForm = z.object({
  email: z
    .string({
      required_error: 'Es requerido',
      invalid_type_error: 'Tipo de dato invalido',
    })
    .email('Es correo electrónico es invalido')
    .min(1, 'Es requerido'),
  password: z
    .string({
      required_error: 'Es requerido',
      invalid_type_error: 'Tipo de dato invalido',
    })
    .min(10, 'Mínimo 10 caracteres'),
})
