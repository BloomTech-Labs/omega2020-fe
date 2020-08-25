import React, { useState } from 'react';
import axios from 'axios';
import axiosLoginAuth from '../../utils/axiosLoginAuth';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { blue, grey } from '@material-ui/core/colors';
import {
  makeStyles,
  withStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import BlueButton from '../assets/BlueButton';

const RegisterForm = (props) => {
  const [user, setUser] = useState({ email: '', password: '' });

  const changeHandler = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://omega2020.herokuapp.com/auth/register', user)
      .then((result) => {
        setUser({ email: user.email, password: user.password, id: user.id });

        axiosLoginAuth()
          .post('/auth/login', user)
          .then((result) => {
            localStorage.setItem('token', result.data.token);
            props.onChange();
            localStorage.removeItem('token');
            props.history.push('/login');
          })
          .catch((error) => {
            alert('Email already exists please login to continue', error);
          });
      });
  };

  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.mainContainer}>
        <Box className={classes.Container}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.title} width={300} height={100} />
              ) : (
                <Box>
                  <Typography variant='h5' className={classes.header}>
                    Create your account
                  </Typography>
                  <br />
                  <Typography variant='h6'>
                    Create an account to view and manage your game stats.
                  </Typography>
                </Box>
              )
            }
          />
        </Box>
        <Box className={classes.Container}>
          <CardHeader
            title={
              loading ? (
                <Skeleton className={classes.title} width={400} height={100} />
              ) : (
                <Box>
                  <form
                    onSubmit={handleSubmit}
                    className={classes.form}
                    autoComplete='off'
                  >
                    <Typography variant='subtitle2'>Email</Typography>
                    <CssTextField
                      variant='outlined'
                      required
                      id='email'
                      name='email'
                      type='email'
                      InputProps={{
                        className: classes.textColor,
                      }}
                      onChange={changeHandler}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br />
                    {/* <Typography variant='subtitle2'>Username</Typography>
                    <CssTextField
                      id='username'
                      variant='outlined'
                      required
                      type='n/a'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br /> */}
                    <Typography variant='subtitle2'>Password</Typography>
                    <CssTextField
                      variant='outlined'
                      required
                      id='password'
                      name='password'
                      type='password'
                      InputProps={{
                        className: classes.textColor,
                      }}
                      onChange={changeHandler}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br />

                    <BlueButton title={'Create your account'} type='submit' />
                    <br />
                    <Typography variant='caption'>
                      By creating an account you agree to our Terms of Service
                      and Privacy Policy.
                    </Typography>
                  </form>
                </Box>
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton width={400} height={400} />
              ) : (
                <ThemeProvider theme={theme}>
                  <hr />
                  <Box className={classes.row}>
                    <Typography variant='body2'>
                      Already have an account?{' '}
                    </Typography>
                    <Button color='primary' href='/login'>
                      <Typography variant='body2'>Log in.</Typography>
                    </Button>
                  </Box>
                </ThemeProvider>
              )
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

// Add from validation - Formik?

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 100,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  },
  mainContainer: {
    width: '450px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  Container: {
    width: '100%',
    textAlign: 'center',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  textColor: {
    color: grey[600],
  },
  header: {
    fontWeight: 700,
  },
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: blue.A100,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: blue.A100,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: 'default',
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: blue.A100,
      },
      '&.Mui-focused fieldset': {
        borderColor: blue.A100,
      },
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export default RegisterForm;
