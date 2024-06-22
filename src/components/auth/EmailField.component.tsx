import { UseControllerProps, useController } from 'react-hook-form'

import { TextField } from '@mui/material'

interface Props extends UseControllerProps<any> {}

export const EmailField = (props: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController(props)

  return (
    <TextField
      {...field}
      fullWidth
      label={'Correo electrónico'}
      type={'email'}
      error={Boolean(error?.message)}
      helperText={error?.message}
    />
  )
}
