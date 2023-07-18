import React from 'react';
import Typography from '@mui/material/Typography';
import RichText from './RichText'; // contentful richText lib
import CardMedia from '@mui/material/CardMedia';

const ViewCardContent = ({ id, title, author, imgUrl, recipeText }) => {
  return (
    <>
      {title}
      <br />
      by {author}
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image={imgUrl}
      />
      {console.log(imgUrl)}
      <Typography>
        <pre style={{ textAlign: 'left', color: 'black' }}>
          <RichText document={recipeText} />
        </pre>
      </Typography>
    </>
  );
};

export default ViewCardContent;
