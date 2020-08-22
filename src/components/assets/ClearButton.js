import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const ClearButton = (props) => {
  return (
    <ColorButton
      type={props.type}
      href={props.href}
      size='large'
      className='href'
      color='inherit'
      onClick={props.click}
    >
      <Typography variant='caption' className='title'>
        {props.title}
      </Typography>
    </ColorButton>
  );
};

const ColorButton = withStyles((theme) => ({
  root: {
    paddingLeft: 5,
    paddingRight: 5,
    textTransform: 'none',
  },
}))(Button);

export default ClearButton;
