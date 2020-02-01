import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import useDarkMode from './useDarkMode';
import useCityMode from './useCityMode';
import useSkyMode from './useSkyMode';
import useNatureMode from './useNatureMode';
import '../Sudoku.css';

const useStyles = makeStyles(theme => ({
  main: {
    textAlign: 'center',
    },
  formControl: {
    margin: theme.spacing(4,0,4,0),
    padding: theme.spacing(2,0,0,0),
    width:'50%',
    height:'10%',
    background: 'silver',
    borderRadius:'10px',
    color:'black',
    opacity:'80%',
  },
  group: {
    margin: theme.spacing(1,3,3,3),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width:'100%',
    height:'90%',
  },
 
}));

const Settings = (theme) => { 
    const classes = useStyles();
    const [value] = React.useState();

    const [darkMode, setDarkMode] = useDarkMode('darktheme');
    const [natureMode, setNatureMode] = useNatureMode('naturetheme');
    const [cityMode, setCityMode] = useCityMode('citytheme');
    const [skyMode, setSkyMode] = useSkyMode('skytheme');

    const toggleDarkOn = e => {
    e.preventDefault()
    setSkyMode(false);
    setCityMode(false);
    setNatureMode(false);
    setDarkMode(true);
  }

    const toggleNatureOn = e => {
    e.preventDefault()
    setSkyMode(false);
    setCityMode(false);
    setDarkMode(false);
    setNatureMode(true);
  }

  const toggleCityOn = e => {
    e.preventDefault()
    setSkyMode(false);
    setDarkMode(false);
    setNatureMode(false);
    setCityMode(true);
  }

  const toggleSkyOn = e => {
    e.preventDefault()
    setCityMode(false);
    setDarkMode(false);
    setNatureMode(false);
    setSkyMode(true);
  }

    const toggleOff = e => {
    e.preventDefault()
    setDarkMode(false);
    setNatureMode(false);
    setSkyMode(false);
    setCityMode(false);
  }

    return (
        <div className={classes.main}>
            <FormControl className={classes.formControl}>Themes
                <RadioGroup className={classes.group} aria-label="themes" name="themes" value={value}>
                    <FormControlLabel value="defaultTheme" label="Default Theme" onClick={toggleOff} checked={!darkMode && !natureMode && !skyMode && !cityMode ? true:false} control={<Radio color="primary" />} />
                    <FormControlLabel value="darkMode" label="Dark Mode" onClick={toggleDarkOn} checked={darkMode ? true:false} className={darkMode ? 'toggle toggled' : 'toggle'} control={<Radio color="primary" />} />
                    <FormControlLabel value="natureMode" label="Nature Theme" onClick={toggleNatureOn} checked={natureMode ? true:false} className={natureMode ? 'toggle toggled' : 'toggle'} control={<Radio color="primary" />} />
                    <FormControlLabel value="cityTheme" label="City Theme" onClick={toggleCityOn} checked={cityMode ? true:false} className={cityMode ? 'toggle toggled' : 'toggle'} control={<Radio color="primary" />} />
                    <FormControlLabel value="skyTheme" label="Sky Theme" onClick={toggleSkyOn} checked={skyMode ? true:false} className={skyMode ? 'toggle toggled' : 'toggle'} control={<Radio color="primary" />} />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Settings