import { Outlet } from 'react-router-dom'

import { Box, Paper } from '@mui/material'

export function AuthLayout() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '25px',
          borderRadius: '15px',
          maxWidth: '450px',
          width: '100%',
        }}
      >
        <Box
          component={'img'}
          src={'/logo.png'}
          sx={{
            width: '100%',
            height: '56px',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />

        <Outlet />
      </Paper>
    </Box>
  )
}
