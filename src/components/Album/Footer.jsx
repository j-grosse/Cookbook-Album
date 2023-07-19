import { Copyright } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#" underline="none">
          Jay, Shelton, Tim
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        <br />
        <br />

        Powered by Contentful

      </Typography>
    );
  }
  return (
    <Box sx={{ bgcolor: 'success.light', background: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))`, p: 6 }} 
    component="footer">
      {/* <Typography variant="h6" align="center" gutterBottom>
      </Typography> */}
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
      </Typography>
      <Copyright />
    </Box>
  );
};

export default Footer;
