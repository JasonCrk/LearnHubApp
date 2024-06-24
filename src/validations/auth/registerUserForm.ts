import { z } from 'zod'

export const registerUserForm = z
  .object({
    email: z
      .string({
        required_error: 'Es requerido',
        invalid_type_error: 'Tipo de dato invalido',
      })
      .email('Es correo electrónico es invalido')
      .trim()
      .min(1, 'Es requerido'),
    password: z
      .string({
        required_error: 'Es requerido',
        invalid_type_error: 'Tipo de dato invalido',
      })
      .trim()
      .min(10, 'Mínimo 10 caracteres'),
    firstName: z
      .string({
        required_error: 'Es requerido',
        invalid_type_error: 'Tipo de dato invalido',
      })
      .trim()
      .min(3, 'Mínimo 3 caracteres'),
    lastName: z
      .string({
        required_error: 'Es requerido',
        invalid_type_error: 'Tipo de dato invalido',
      })
      .trim()
      .min(3, 'Mínimo 3 caracteres'),
    confirmPassword: z.string({
      required_error: 'Es requerido',
      invalid_type_error: 'Tipo de dato invalido',
    }),
  })
  .refine(
    ({ password, confirmPassword }) => {
      return password == confirmPassword
    },
    {
      message: 'Las contraseña debe de ser igual',
      path: ['confirmPassword'],
    },
  )

export type RegisterUserFormFields = z.infer<typeof registerUserForm>
