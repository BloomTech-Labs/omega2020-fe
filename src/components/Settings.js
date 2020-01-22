import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
    color: 'white',
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

const Settings = () => { 
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
  
    const handleChange = event => {
      setValue(event.target.value);
    };  

    return (
        <div className={classes.main}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.title}>Themes</FormLabel>
                <RadioGroup className={classes.group} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="darkMode" label="Dark Mode" control={<Radio />} />
                    <FormControlLabel value="defaultTheme" label="Default Theme" control={<Radio />} />
                    <FormControlLabel value="natureTheme" label="Nature Theme" disabled control={<Radio />} />
                    <FormControlLabel value="cityTheme" label="City Theme" disabled control={<Radio />} />
                    <FormControlLabel value="skyTheme" label="Sky Theme" disabled control={<Radio />} />
                </RadioGroup>
            </FormControl>
        </div>
    )

}

export default Settings