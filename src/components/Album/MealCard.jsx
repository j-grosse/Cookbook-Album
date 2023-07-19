import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import theme from './CustomColorTheme';

export default function MealCard({
  id,
  title,
  author,
  imgUrl,
  recipeText,
  setSelectedCard,
}) {
  return (
    <div key={id}>
      <Card 
        sx={{
          background: theme.palette.secondary.main,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
        }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={imgUrl}
        />
        {console.log(imgUrl)}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="h7" component="h2">
            by {author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() =>
              setSelectedCard({ id, title, author, imgUrl, recipeText })
            }
          >
            View
          </Button>

          {/* loggedIn && 
          Link href="https://contentful.com/login"
          <Button size="small">Edit</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}
