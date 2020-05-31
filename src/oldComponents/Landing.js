import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    paddingBottom: theme.spacing(1),
    display:'flex',
    justifyContent:'space-around',

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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    
    
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    width:'80%',
    backgroundColor:'#608cff',
    color:'white',
    margin: theme.spacing(3),
  },
  icons: {
    textAlign: 'center',
    padding: theme.spacing(5, 15, 5, 10),
  },
  textDiv: {
    margin: theme.spacing(5, 0, 5, 10),
  },
  topTextDiv: {
    margin: theme.spacing(5, 0, 5, 0),
  },
  bottomTextDiv: {
  },
  topTitle: {
    margin: theme.spacing(5, 0, 5, 0),
    fontSize:'40px'
  },
  bottomTitle: {
  },
  topText: {
    margin: theme.spacing(5, 0, 5, 5),
    fontWeight: 'bold;'
    
  },
  bottomText: {
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
            <img className={classes.image} src={require("../images/Landing-page.png")}  width="400" height="400" alt="Omega2020 logo" />
            <Container className={classes.buttonGrid} maxWidth='lg'>
                <Button variant="contained" color="primary" disableElevation className={classes.button} href="/register">Create Account</Button>
                <Button variant="contained" color="primary" disableElevation className={classes.button} href="/login">Sign in</Button>
                <Button variant="contained" color="primary" disableElevation className={classes.button} href="/random">Play as Guest</Button>
              </Container>
            <div className={classes.textDiv} width="400" height="400">
              <div className={classes.topTextDiv}>
                <div classname={classes.topTitle} className="h3" >
                    <Typography variant="h3" >
                          Customize your gameplay!
                    </Typography>
                </div>
                  <Container classname={classes.topText}>
                    <Typography variant="h5">
                          Choose one of four difficulty levels.
                    </Typography>
                    <Typography variant="h5">
                          Try a dark mode puzzle or any of our other various themes.
                    </Typography>
                  </Container>
              </div>  
                  <div classname={classes.bottomTitle}>
                    <Typography variant="h3">
                          Upload your puzzle for online play!
                    </Typography>
                  </div>
              <div className={classes.bottomTextDiv}>
                  <Container classname={classes.bottomText}>
                  <Typography variant="h5">
                          Snap a photo of your puzzle and enjoy it with all of our features.
                    </Typography>
                    <Typography variant="h5">
                          Save and continue your puzzle when you have time. 
                    </Typography>
                  </Container>
              </div>
            </div>
            </Container>
            <Container className={classes.buttonGrid} maxWidth='lg'>
            </Container>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid xs={12} sm={6} md={4}>

                <Card className={classes.card}>
                <img className={classes.icons} src={require("../images/solvelarge.PNG")} width="150" height="150" alt="Omega2020 logo" />
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
                    Complete every puzzle you begin with our "Solve Square" option. Everyone is a winner.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={6} md={4}>
                 
                <Card className={classes.card}>
                <img className={classes.icons} src={require("../images/sudokularge.PNG")}  width="150" height="150" alt="Omega2020 logo" />
                  <CardMedia
                    className={classes.cardMedia}
                
                    title="Image title"
                  >
  
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Play
                    </Typography>
                    <Typography>
                    Create an account and enjoy different play modes. Guest play is also welcomed.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={6} md={4}>
       
                <Card className={classes.card}>
                <img className={classes.icons} src={require("../images/learnlarge.PNG")} width="150" height="150" alt="Omega2020 logo" />
                  <CardMedia
                    className={classes.cardMedia}
                
                    title="Image title"
                  >
                   
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Learn
                    </Typography>
                    <Typography>
                    Read our tutorials and learn the best practices for solving almost any Sudoku puzzle (coming soon).
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Landing;