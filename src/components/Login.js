import React, {useState} from 'react';
import axiosLoginAuth from '../utils/axiosLoginAuth';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Omega2020
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '90vh',
    width: '80vw',
    justifyContent: "center",
    margin: theme.spacing(8, 10, 8, 20),
  },
  main: {
    height:'60%',
  },
  image: {
    marginLeft:'5%',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  },
  paper: {
    margin: theme.spacing(8, 8, 8),
    display: 'flex',
    flexDirection: 'column',
    height:'200px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
    const [user, setUser] = useState({ email: '', password: ''})


    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }
     const handleSubmit = event => {
         event.preventDefault();
         console.log(user);
         axiosLoginAuth()
            .post("/auth/login", user)
            .then(result => {
            console.log(result)
            localStorage.setItem("token", result.data.token);    
            setUser({ email: '', password: ''})
              props.history.push("/puzzle")
        })
        .catch(error => {
          console.log(error)
          alert("Email and/or Passwrod not recognized, please try again", error)
      })
    
    }

  const classes = useStyles();

  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid className={classes.main} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in and Start Solving!
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              onChange={changeHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Lets Play!
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <img className={classes.image} src={require("../images/Mask Group (1).png")} alt="Omega2020 theme" />
    </Grid>
  );
}

export default Login
