import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const TeamCard = (props) => {
  const classes = useStyles();

  const { name, image, title, linkedin, github } = props.member;

  return (
    <Box className={classes.root} boxShadow={3}>
      <Box>
        <img alt={name} src={image} className={classes.img} />
      </Box>
      <Box className={classes.rightContainer}>
        <Typography variant={'h5'}>{name}</Typography>
        <Typography>{title}</Typography>
        <Box className={classes.icons}>
          <IconButton href={github}>
            <GitHubIcon style={{ fontSize: 25, color: blueGrey[300] }} />
          </IconButton>
          <IconButton href={linkedin}>
            <LinkedInIcon style={{ fontSize: 25, color: blueGrey[300] }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // background: '#FFFFFF',
    padding: 20,
    margin: 20,
  },
  img: {
    width: '100px',
    borderRadius: '50%',
  },
  icons: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContainer: {
    width: '300px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    alignContent: 'center',
    textAlign: 'left',
    margin: 20,
  },
}));

export default TeamCard;
