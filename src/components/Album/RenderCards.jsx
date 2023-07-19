import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import MealCard from './MealCard';

const RenderCards = ({ apiData, setSelectedCard }) => {
  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {/* {cards.map((card) => ( */}
          {/* <Grid item key={card} xs={12} sm={6} md={4}> */}
          {apiData  &&
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
    </div>
  );
};

export default RenderCards;
