import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const RedButton = (props) => {
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
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[300],
    },
  },
}))(Button);

export default RedButton;
