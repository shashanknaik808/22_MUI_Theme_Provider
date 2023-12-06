import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Test from './Test';

function App() {
  const theme = useTheme();
  console.log(theme);

  return (
    <Box>
      <Typography variant='h1' color="primary">
        Hello World
      </Typography>
      <Test />
    </Box>
  );
}

export default App;