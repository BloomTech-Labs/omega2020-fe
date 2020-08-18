import React, { useContext } from 'react';
import { GridContext } from '../../../store/contexts/GridContext';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { blue, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const KeyPad = (props) => {
  const [gridState, setGridState] = useContext(GridContext);

  // Todo connect KeyPadNumber to gridState.gridlength value
  let KeyPadNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.Items}>
          <Box className={classes.doubleItemBlue}>
            <Typography variant='body2'>Normal</Typography>
          </Box>
          <Box className={classes.doubleItemGrey}>
            <Typography variant='body2'>Notes</Typography>
          </Box>
        </Box>

        <Box className={classes.Items}>
          {KeyPadNumber.map((value) => (
            <Box item xs={1} className={classes.squareItem}>
              <Typography variant='body2'>{value}</Typography>
            </Box>
          ))}
        </Box>

        <Box className={classes.Items}>
          <Box className={classes.tripleItemGrey} onClick={props.onVerifyClick}>
            <HelpOutlineIcon />
            <Typography variant='body2'>Hint</Typography>
          </Box>
          <Box className={classes.tripleItemGrey} onClick={props.onUndoClick}>
            <ReplayIcon />
            <Typography variant='body2'>Undo</Typography>
          </Box>
          <Box className={classes.tripleItemGrey} onClick={props.onSaveClick}>
            <SaveAltIcon />
            <Typography variant='body2'>Save</Typography>
          </Box>
        </Box>

        <Box className={classes.singleItemBlue}>
          <Typography variant='body2'>NEW GAME</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '320px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  },
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
    '& > *': {
      margin: theme.spacing(0.7),
    },
  },
  Items: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  },
  singleItemBlue: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    color: theme.palette.getContrastText(blue.A700),
    backgroundColor: blue.A700,
    '&:hover': {
      backgroundColor: blue[800],
    },
  },
  doubleItemBlue: {
    width: '50%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    color: theme.palette.getContrastText(blue.A700),
    backgroundColor: blue.A700,
    '&:hover': {
      backgroundColor: blue[800],
    },
  },
  doubleItemGrey: {
    width: '50%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 9,
    paddingBottom: 9,
    color: grey[500],
    backgroundColor: grey[50],
    '&:hover': {
      backgroundColor: grey[300],
    },
    border: '1px solid grey',
  },
  tripleItemGrey: {
    width: '33%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 9,
    paddingBottom: 9,
    color: grey[500],
    backgroundColor: grey[50],
    '&:hover': {
      backgroundColor: grey[300],
    },
    border: '1px solid grey',
  },
  squareItem: {
    width: '30%',
    margin: 5,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    color: grey[50],
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[800],
    },
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default KeyPad;
