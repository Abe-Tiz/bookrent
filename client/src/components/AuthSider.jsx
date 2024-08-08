import { Box } from '@mui/material';
import React from 'react'
import { FaBookOpen } from 'react-icons/fa';

const AuthSider = () => {
  return (
    <Box
      sx={{
        width: "full",
        backgroundColor: "#171B36",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        padding: 20,
              height: "full",
              position:"relative",
        left:"10px"
      }}
    >
      <FaBookOpen color="white" size={150} />
    </Box>
  );
}

export default AuthSider
