import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RichText from './RichText'; // contentful richText lib
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
const ViewCardContent = ({ id, title, author, imgUrl, recipeText }) => {
  window.scrollTo({ top: 0, behavior: undefined });

  return (
    <>
        <Container maxWidth="md">
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
              padding: '2rem',
              wordWrap: 'break-word',
            }}
          >
            {title}
            <br />
            by {author}
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: '56.25%',
              borderRadius: '10px',

              }}
              image={imgUrl}
            />
            {console.log(imgUrl)}
            <pre style={{ textAlign: 'left', color: 'black' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  <RichText document={recipeText} />
                </Typography>
              </CardContent>
            </pre>
          </Card>
        </Container>
    </>
  );
};

export default ViewCardContent;
