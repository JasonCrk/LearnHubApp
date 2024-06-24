import { Link as RouterLink } from 'react-router-dom'

import type { SubmitHandler } from 'react-hook-form'

import { useRegisterUserForm, useRegisterUserMutation } from '../../hooks/auth'

import type { RegisterUserFormFields } from '../../validations/auth'

import { Box, Button, Link, TextField, Typography } from '@mui/material'

import { PasswordField, EmailField } from '../../components/auth'

export function RegisterPage() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useRegisterUserForm()
  const { mutate: registerUserMutate, isPending } = useRegisterUserMutation()

  // http://localhost:8000/activate/Mg/c93brr-d25b2bf6b7e1f29aaf4984003704a89b

  const handleRegisterUser: SubmitHandler<RegisterUserFormFields> = data =>
    registerUserMutate({
      first_name: data.firstName,
      last_name: data.lastName,
      re_password: data.confirmPassword,
      ...data,
    })

  return (
    <>
      <Typography variant={'h4'} fontWeight={500} mb={3} textAlign={'center'}>
        Crear cuenta
      </Typography>

      <Box
        component={'form'}
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        onSubmit={handleSubmit(handleRegisterUser)}
      >
        <TextField
          fullWidth
          label={'Nombre'}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
          {...register('firstName')}
        />

        <TextField
          fullWidth
          label={'Apellidos'}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
          {...register('lastName')}
        />

        <EmailField control={control} name={'email'} />

        <PasswordField control={control} name={'password'} />

        <PasswordField control={control} name={'confirmPassword'} />

        <Button
          type={'submit'}
          variant={'contained'}
          color={'secondary'}
          disabled={isPending}
        >
          Registrarse
        </Button>

        <Typography
          variant='body1'
          align='center'
          sx={{ textUnderlineOffset: 3 }}
        >
          ¿Ya tienes una cuenta? Puedes iniciar sesión{' '}
          <Link component={RouterLink} to={'/auth/login'}>
            AQUI
          </Link>
        </Typography>
      </Box>
    </>
  )
}
