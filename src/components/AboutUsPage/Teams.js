import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { TeamVersion1, TeamVersion2 } from './TeamList';
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Teams = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.itemBar}>
        <CardHeader
          title={
            loading ? (
              <Skeleton width='100%' />
            ) : (
              <Box className={classes.mainContainer}>
                <AppBar position='static' color='default'>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    aria-label='simple tabs example'
                  >
                    <Tab label='Active Core Team' {...a11yProps(0)} />
                    <Tab label='V.1 Production Team' {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <Box className={classes.tab}>
                    <ColorType variant={'h5'}>
                      Lambda Labs PT11 - In Production from May 09, 2020 to DATE
                    </ColorType>
                    <Box className={classes.teamInfo}>
                      <TeamVersion2 />
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Box className={classes.tab}>
                    <ColorType variant={'h5'}>
                      Lambda Labs 19 - In Production from December 09, 2019 to
                      DATE
                    </ColorType>
                    <Box className={classes.teamInfo}>
                      <TeamVersion1 />
                    </Box>
                  </Box>
                </TabPanel>
              </Box>
            )
          }
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    background: '#FFFFFF',
  },
  mainContainer: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  teamInfo: {
    width: '80%',
  },
}));

const ColorType = withStyles(() => ({
  root: {
    color: blue[400],
    fontWeight: 600,
  },
}))(Typography);

export default Teams;
