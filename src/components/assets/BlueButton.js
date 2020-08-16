import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const BlueButton = (props) => {
  return (
    <ColorButton href={props.href} size='large' className='href'>
      <Typography variant='body2' className='title'>
        {props.title}
      </Typography>
    </ColorButton>
  );
};

const ColorButton = withStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    color: theme.palette.getContrastText(blue.A700),
    backgroundColor: blue.A700,
    '&:hover': {
      backgroundColor: blue[800],
    },
  },
}))(Button);

export default BlueButton;
