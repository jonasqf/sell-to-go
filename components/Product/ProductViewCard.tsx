import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

interface ProductViewCardProps {
  data :  {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
  };
}

export default function ProductViewCard(props: ProductViewCardProps) {
  const { data } = props;

  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={data.title}
        subheader={data.price}
      />
      <CardMedia
        component="img"
        height="400"
        image={data.image}
        alt={data.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Demonstrar interesse">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Compartilhar">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}
