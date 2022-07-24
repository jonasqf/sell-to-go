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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface ProductViewCardProps {
  data :  {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
  };
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductViewCard(props: ProductViewCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const { data } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <IconButton aria-label="Demonstrar enteresse">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Compartilhar">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
