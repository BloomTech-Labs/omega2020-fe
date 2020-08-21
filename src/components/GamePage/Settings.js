import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { grey } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const SettingsModal = (props) => {
  const classes = useStyles();

  // Checkbox button state and handler
  const [state, setState] = React.useState({
    mode: true,
    highlights: false,
    timer: false,
  });

  const handleCheckboxChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { mode, highlights, timer } = state;
  const error = [mode, highlights, timer].filter((v) => v).length !== 2;

  // Rado button state and handler
  const [value, setValue] = React.useState('Difficulty');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <Typography variant={'h4'}>Settings</Typography>
      <br />
      <br />

      <FormControl component='fieldset' className={classes.formControl}>
        <FormLabel component='legend' className={classes.title}>
          General Settings
        </FormLabel>
        <br />

        <RadioGroup
          aria-label='mode'
          name='mode'
          value={value}
          onChange={props.toggleTheme}
        >
          <FormControlLabel
            value='theme'
            control={<Radio />}
            label={`${props.theme} mode`}
          />
        </RadioGroup>

        <FormGroup>
          <FormControlLabel
            control={
              <GreyCheckbox
                checked={highlights}
                onChange={handleCheckboxChange}
                name='highlights'
                color='inherit'
              />
            }
            label='Highlights'
          />
          <FormControlLabel
            control={
              <GreyCheckbox
                checked={timer}
                onChange={handleCheckboxChange}
                name='timer'
              />
            }
            label='Show timer'
          />
        </FormGroup>
      </FormControl>
      <br />
      <br />

      <FormControl component='fieldset'>
        <FormLabel component='legend' className={classes.title}>
          Difficulty Levels
        </FormLabel>
        <br />
        <RadioGroup
          aria-label='Difficulty'
          name='Difficulty'
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value='Easy' control={<Radio />} label='Easy' />
          <FormControlLabel value='Medium' control={<Radio />} label='Medium' />
          <FormControlLabel value='Hard' control={<Radio />} label='Hard' />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'left',
    alignItems: 'left',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
    color: grey[500],
  },
}));

const GreyCheckbox = withStyles({
  root: {
    color: grey[500],
    '&$checked': {
      color: grey[500],
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

export default SettingsModal;
