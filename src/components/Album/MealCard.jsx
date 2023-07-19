import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles'; // Theme hook

export default function MealCard({
  id,
  title,
  author,
  imgUrl,
  recipeText,
  setSelectedCard,
}) {
  const theme = useTheme();

  return (
    <div key={id}>
      <Card
        sx={{
          background: theme.palette.background.paper,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
          bgcolor: 'whitesmoke',
          ':hover': {bgcolor: 'white'},
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
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            by {author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ color: 'primary.main', bgcolor: 'whitesmoke', ':hover': {bgcolor: 'white'}, 
            }}
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
