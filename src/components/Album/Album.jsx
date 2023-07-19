import * as React from 'react';
import { useState, useEffect } from 'react';
import client from '../../util/Client'; // contentful client

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SearchAppBar from './SearchAppBar';
import Hero from './Hero';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from './Footer';

import RenderCards from './RenderCards';
import RenderRecipe from './RenderRecipe';
import theme from './ColorTheme';

// component diagram:
// App
// Album apiData
// Album < RenderCards < MealCard < RichText

const defaultTheme = theme;

export default function Album() {
  const [apiData, setApiData] = useState([]); // items from contentful
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    client
      .getEntries()
      .then((res) => setApiData(res.items)) // typescript type error res.items
      .catch(console.error);
  }, [selectedCard]);

  return !selectedCard ? (
    ///////////// Home page //////////////

    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <SearchAppBar />
      <main>
        <Hero />
        <RenderCards apiData={apiData} setSelectedCard={setSelectedCard} />
      </main>
      <Footer />
    </ThemeProvider>
  ) : (
    ///////////// Details page //////////////
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <SearchAppBar />
      <main>
        <Box
          sx={{
            bgcolor: 'secondary.main',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            {selectedCard && (
              <RenderRecipe
                id={selectedCard.id}
                title={selectedCard.title}
                author={selectedCard.author}
                imgUrl={selectedCard.imgUrl}
                recipeText={selectedCard.recipeText}
              />
            )}
          </Container>
        </Box>
        <RenderCards apiData={apiData} setSelectedCard={setSelectedCard} />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
