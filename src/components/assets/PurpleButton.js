import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const PurpleButton = (props) => {
  return (
    <ColorButton
      type={props.type}
      href={props.href}
      size='large'
      onClick={props.click}
    >
      <Typography variant='caption'>{props.title}</Typography>
    </ColorButton>
  );
};

const ColorButton = withStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    textTransform: 'none',
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[300],
    },
  },
}))(Button);

export default PurpleButton;
