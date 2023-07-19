import React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import heroImage from '/src/assets/laap.jpg';

const Hero = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: 'background.paper',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Card
            sx={{
              bgcolor: 'primary.main',
              background: `linear-gradient(rgba(100, 200, 0, 0.5), rgba(126, 68, 68, 0.4))`,
              borderRadius: '30px',
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >
            </Typography>
            <Typography variant="h3" align="center" color="white" paragraph>
              CookLog
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Get daily inspiration <br />
              by your friends' meals
              
            </Typography>
            <Stack
              sx={{ pt: 4, mb: 5, }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link
                color="inherit"
                href="https://app.contentful.com/spaces/c3jom1kz3zge/entries"
                underline="none"
              >
                <Button
                  variant="contained"
                  sx={{ borderRadius: '10px', bgcolor: 'primary.main', ':hover': {bgcolor: 'secondary.light'}, }}
                >
                  Add Recipe
                </Button>
                {/* <Button variant="outlined">Secondary action</Button> */}
              </Link>
            </Stack>
          </Card>
        </Container>
      </Box>
    </div>
  );
};

export default Hero;
