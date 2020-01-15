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
    padding: theme.spacing(8, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  buttonGrid: {
    textAlign: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    display:'flex',
    justifyContent:'space-around',
    paddingRight: theme.spacing(13.5),

  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(15),


  },
  image: {
    width:'100%',
    height:'100%'
  },
  card: {
    width:'80%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    
    
  },
  // cardMedia: {
  //   paddingTop: '56.25%', // 16:9
  // },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    width:'80%',
    backgroundColor:'#608cff',
    color:'white'
  },
  icons: {
    textAlign: 'center',
    padding: theme.spacing(5, 15, 5, 10),
  },
}));

var myImage1 = 'src\images\Vector.png';

var myImage2 = new Image(100, 200);
myImage2.src = require("../images/sudoku 1.png");

var myImage3 = new Image(100, 200);
myImage3.src = require("../images/solve.PNG");
// document.body.appendChild(myImage3);

const cards = [
    {
        id:1,
        title:'Learn',
        description:'Read our tutorials and learn the best practices for solving almost any sudoku puzzle (coming soon).',
        imgFile:myImage1
    },
    {
        id:2,
        title:'Play',
        description:'Create an account and enjoy different play modes. Guest play is also welcomed! (coming soon).',
        imgFile: '../images/sudoku 1.png'
    },
    {
        id:3,
        title:'Solve',
        description:'Complete every puzzle you begin with our "Solve Square" option. Everyone is a winner! (coming soon).',
        imgFile:"../images/solve.PNG"
    }
];

const Landing = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
          <Container maxWidth="lg">
          <img className={classes.image} src={require("../images/omega2.PNG")}  width="400" height="400" alt="Omega2020 logo" />
        
            </Container>
            <Container className={classes.buttonGrid} maxWidth='lg'>
            </Container>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid xs={12} sm={6} md={4}>
              <Container className={classes.buttonGrid} maxWidth='lg'>
                <Button variant="contained" color="primary" disableElevation className={classes.button} href="/register">Create Account</Button>
              </Container>
                <Card className={classes.card}>
                <img className={classes.icons} src={require("../images/Vector.png")} width="150" height="150" alt="Omega2020 logo" />
                  <CardMedia
                    className={classes.cardMedia}
                
                    title="Image title"
                  >
                    {/* <img>{card.imgFile}</img> */}
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Solve
                    </Typography>
                    <Typography>
                    Complete every puzzle you begin with our "Solve Square" option. Everyone is a winner! (coming soon).
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={6} md={4}>
                <Container className={classes.buttonGrid} maxWidth='lg'>
                  <Button variant="contained" color="primary" disableElevation className={classes.button} href="/puzzle">Guest Login</Button>
                </Container>
                <Card className={classes.card}>
                <img className={classes.icons} src={require("../images/sudoku 1.png")}  width="150" height="150" alt="Omega2020 logo" />
                  <CardMedia
                    className={classes.cardMedia}
                
                    title="Image title"
                  >
                    {/* <img>{card.imgFile}</img> */}
                   
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Play
                    </Typography>
                    <Typography>
                    Create an account and enjoy different play modes. Guest play is also welcomed! (coming soon).
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={6} md={4}>
                <Container className={classes.buttonGrid} maxWidth='lg'>
                  <Button variant="contained" color="primary" disableElevation className={classes.button} href="/login">Sign in</Button>
                </Container>
                <Card className={classes.card}>
                <img className={classes.icons} src={require("../images/solve.PNG")} width="150" height="150" alt="Omega2020 logo" />
                  <CardMedia
                    className={classes.cardMedia}
                
                    title="Image title"
                  >
                    {/* <img>{card.imgFile}</img> */}
                   
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Learn
                    </Typography>
                    <Typography>
                    Read our tutorials and learn the best practices for solving almost any sudoku puzzle (coming soon).
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Landing