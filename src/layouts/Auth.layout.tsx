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
        <Outlet />
      </Paper>
    </Box>
  )
}
