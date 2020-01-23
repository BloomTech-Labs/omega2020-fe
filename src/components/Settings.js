import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import useDarkMode from './themes/useDarkMode';
import useForestMode from './themes/useForestMode';

import './Sudoku.css'
import '../App.css';
import './themes/themes.css'

const useStyles = makeStyles(theme => ({
  main: {
    height: '90vh',
    textAlign: 'center',
    },
  formControl: {
    margin: theme.spacing(3),
    background: 'white',
    width:'15%',
    height:'35%',
  },
  title: {
    background: '#608CFF',
    color: 'white !important',
    textAlign: 'center',
    fontSize: '24px',
    width: '100%',
    height: '15%',
    paddingTop:'15px',
    fontWeight: 'bold'
  },
  group: {
    padding: '10%',
    color: 'black !important'
  },
}));

const Settings = (theme) => { 
    const classes = useStyles();
    const [value] = React.useState();

    const [darkMode, setDarkMode] = useDarkMode('darktheme');
    const [forestMode, setForestMode] = useForestMode('naturetheme');

    const toggleDarkOn = e => {
    e.preventDefault()
    setDarkMode(true);
    setForestMode(false);
  }

    const toggleForestOn = e => {
    e.preventDefault()
    setDarkMode(false);
    setForestMode(true);
  }

    const toggleOff = e => {
    e.preventDefault()
    setDarkMode(false);
    setForestMode(false);
  }

    return (
        <div className={classes.main}>
            <FormControl className={classes.formControl}>
                <FormLabel className={classes.title}>Themes</FormLabel>
                <RadioGroup className={classes.group} aria-label="themes" name="themes" value={value}>
                    <FormControlLabel value="defaultTheme" label="Default Theme" onClick={toggleOff} control={<Radio color="primary" />} />
                    <FormControlLabel value="darkMode" label="Dark Mode" onClick={toggleDarkOn} className={darkMode ? 'toggle toggled' : 'toggle'} control={<Radio color="primary" />} />
                    <FormControlLabel value="forestMode" label="Nature Theme" onClick={toggleForestOn} className={forestMode ? 'toggle toggled' : 'toggle'} control={<Radio color="primary" />} />
                    <FormControlLabel value="cityTheme" label="City Theme" disabled control={<Radio color="primary" />} />
                    <FormControlLabel value="skyTheme" label="Sky Theme" disabled control={<Radio color="primary" />} />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Settings