import { useState, useId } from 'react'

import { UseControllerProps, useController } from 'react-hook-form'

import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

type State = {
  showPassword: boolean
}

interface Props extends UseControllerProps<any> {}

export const PasswordField = (props: Props) => {
  const [showPassword, setShowPassword] = useState<State['showPassword']>(false)

  const {
    field,
    fieldState: { error },
  } = useController(props)

  const passwordInputId = useId()

  const toggleShowPassword = () => setShowPassword(prev => !prev)

  return (
    <FormControl error={Boolean(error?.message)} variant='outlined'>
      <InputLabel htmlFor={passwordInputId}>
        Contraseña
      </InputLabel>

      <OutlinedInput
        {...field}
        id={passwordInputId}
        type={showPassword ? 'text' : 'password'}
        label={'Contraseña'}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              onMouseDown={e => e.preventDefault()}
              onClick={toggleShowPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        }
      />

      {!!error?.message && (
        <FormHelperText sx={{ color: 'red' }}>{error.message}</FormHelperText>
      )}
    </FormControl>
  )
}
