import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  buttonGrid: {
    textAlign: 'center',
    paddingTop: theme.spacing(8),
    display:'flex',
    justifyContent:'space-around'

  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  image: {
    width:'100%',
    height:'100%'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    justifyContent:'space-evenly'
  },
}));

const cards = [
    {
        id:1,
        title:'Learn',
        description:'Read our tutorials and learn the best practices for solving almost any sudoku puzzle (coming soon).'
    },
    {
        id:2,
        title:'Play',
        description:'Create an account and enjoy different play modes. Guest play is also welcomed! (coming soon).'
    },
    {
        id:3,
        title:'Solve',
        description:'Complete every puzzle you begin with our "Solve Square" option. Everyone is a winner! (coming soon).'
    }
];

const Landing = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
          <Container maxWidth="md">
          <img className={classes.image} src={require("../images/omega2.PNG")}  width="400" height="400" alt="Omega2020 logo" />
        
            </Container>
            <Container className={classes.buttonGrid} maxWidth='md'>

                <Button className={classes.button} href="/register">Create Account</Button>
                <Button href="/puzzle">Guest Login</Button>
                <Button href="/login">Sign in</Button>
            </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Landing