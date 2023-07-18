import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchAppBar from './SearchAppBar';

// import MediaCover from './MediaCover';
import MealCard from './MealCard';
import ViewCardContent from './ViewCardContent';
import { useState, useEffect } from 'react';
import client from '../../util/Client'; // contentful client
// import heroImage from '../../assets/laap.jpg';

// //////////////////////////////////////////////////////////////// //

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

// /////////////////////////////////////////////////////////////// //

export default function Album(apiDataProp) {
  const [apiData, setApiData] = useState([]); // items from contentful
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => setApiData(response.items))
      .catch(console.error);
  }, [selectedCard]);

  // /////////////////////////////////////////////////////////////// //

  return !selectedCard ? (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <MediaCover /> */}
      <SearchAppBar />

      <main>
        {/* Hero unit */}
        <Box
          className="hero-image"
          sx={{
            bgcolor: 'background.paper',
            // backgroundImage: `url(${heroImage})`,
            // backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >
              {/* color="text.primary" */}
              Our Meal Log
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Our community Meal Log for documenting what we eat.
              <br />
              So we won&apos;t forget what we could cook today.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}

        {/* Cards */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
            {/* <Grid item key={card} xs={12} sm={6} md={4}> */}
            {apiData &&
              apiData.map((entry, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <MealCard
                    id={index}
                    title={entry.fields.title}
                    author={entry.fields.author}
                    imgUrl={entry.fields.image.fields.file.url}
                    recipeText={entry.fields.article}
                    setSelectedCard={setSelectedCard}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      {/* <MediaCover /> */}

      <SearchAppBar />

      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            My Meal Log
          </Typography>
        </Toolbar>
      </AppBar> */}

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            {selectedCard && (
              <ViewCardContent
                id={selectedCard.id}
                title={selectedCard.title}
                author={selectedCard.author}
                imgUrl={selectedCard.imgUrl}
                recipeText={selectedCard.recipeText}
              />
            )}
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
            {/* <Grid item key={card} xs={12} sm={6} md={4}> */}
            {apiData &&
              apiData.map((entry, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <MealCard
                    id={index}
                    title={entry.fields.title}
                    author={entry.fields.author}
                    imgUrl={entry.fields.image.fields.file.url}
                    recipeText={entry.fields.article}
                    setSelectedCard={setSelectedCard}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
