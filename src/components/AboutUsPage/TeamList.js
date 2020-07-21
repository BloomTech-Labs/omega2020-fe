import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TeamCard from './TeamCard';
import { TeamV1, TeamV2 } from './seeds';

const TeamVersion1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Version 1 Team</Typography>
      <div data-testid='member' className={classes.team}>
        {TeamV1.map((member) => (
          <TeamCard data-testid='members' member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamVersion2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography>Version 2 Team</Typography> */}
      <Typography>Active Team</Typography>
      <div className={classes.team}>
        {TeamV2.map((member) => (
          <TeamCard member={member} />
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  team: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
}));

export { TeamVersion1, TeamVersion2 };
