import { Link as RouterLink } from 'react-router-dom'

import type { SubmitHandler } from 'react-hook-form'

import type { LoginRequest } from '../../api/auth'

import { useLoginMutation } from '../../libs/fetching/mutations/auth'

import { useLoginForm } from '../../hooks/auth'

import { Box, Button, Link, Typography } from '@mui/material'

import { PasswordField, EmailField } from '../../components/auth'

export function LoginPage() {
  const { mutate: loginMutate, isPending } = useLoginMutation()
  const { control, handleSubmit } = useLoginForm()

  const handleLogin: SubmitHandler<LoginRequest> = credentials =>
    loginMutate(credentials)

  return (
    <>
      <Typography variant={'h4'} fontWeight={500} mb={3} textAlign={'center'}>
        Iniciar sesión
      </Typography>

      <Box
        component={'form'}
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        onSubmit={handleSubmit(handleLogin)}
      >
        <EmailField control={control} name={'email'} />
        <PasswordField control={control} name={'password'} />

        <Button type={'submit'} variant={'contained'} disabled={isPending}>
          Ingresar
        </Button>

        <Typography
          variant='body1'
          align='center'
          sx={{ textUnderlineOffset: 3 }}
        >
          No tienes una cuenta? Puedes registrarte{' '}
          <Link component={RouterLink} to={'/auth/register'}>
            AQUI
          </Link>
        </Typography>
      </Box>
    </>
  )
}
