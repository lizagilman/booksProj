import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { noImgUrl, titlieze, selectImg } from '../../helpers';

const BookCard = (props) => {
  const {
    classes, bookData, openEditBookModal, openDeleteBookModal,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea style={{ width: '100%' }} s>
        <CardMedia
          component="image"
          className={classes.media}
          title={bookData.title}
          image={bookData.thumbnail || selectImg() || noImgUrl}
          onClick={(e) => {
            openEditBookModal(e);
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {titlieze(bookData.title.replace(/\W/g, ' '))}
          </Typography>
          <Typography component="p">
            {bookData.description.length > 100 ? (
              `${bookData.description.substring(0, 100)}...`
            ) : (
              bookData.description
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={(e) => {
            openEditBookModal(e);
          }}
        >
          Edit
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={(e) => {
            openDeleteBookModal(e);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
