import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { blue } from '@material-ui/core/colors';
import {
  makeStyles,
  withStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import BlueButton from '../assets/BlueButton';

const LoginForm = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  const [user, setUser] = useState({ email: '', password: '' });

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
                    Welcome back!
                  </Typography>
                  <br />
                  <Typography variant='h6'>
                    Log in to access your dashboard, settings, archive and
                    leaderboard.
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
                  <form className={classes.form} noValidate autoComplete='off'>
                    <Typography variant='subtitle2'>Email Address</Typography>
                    <CssTextField
                      id='email'
                      variant='outlined'
                      required
                      type='email'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br />
                    <Typography variant='subtitle2'>Password</Typography>
                    <CssTextField
                      id='password'
                      variant='outlined'
                      required
                      type='password'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br />
                    <BlueButton title={'Log In'} />
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
                    <Typography variant='body2'>New to Omega 2020? </Typography>
                    <Button color='primary' href='/register'>
                      <Typography variant='body2'>
                        Create an account.
                      </Typography>
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
    height: '90vh',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    background: '#FFFFFF',
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
        borderColor: 'default',
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

export default LoginForm;
