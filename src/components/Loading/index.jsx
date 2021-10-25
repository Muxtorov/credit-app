import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '85%',
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
