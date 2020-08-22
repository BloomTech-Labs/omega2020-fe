import React, { useContext } from 'react';
import { GridContext } from '../../store/contexts/GridContext';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import ClearButton from '../assets/ClearButton';
import Timer from './Timer';
import HelpModal from './Help';
import SettingsModal from './Settings';

const GameMenu = (props) => {
  const { gridState, setGridState } = useContext(GridContext);

  let grid = `${gridState.gridlength}x${gridState.gridlength}`;
  let level = gridState.level;

  const classes = useStyles();

  // Modal functionailty
  const [openHelp, setOpenHelp] = React.useState(false);
  const [openSettings, setOpenSettings] = React.useState(false);

  const handleOpenHelpModal = () => {
    setOpenHelp(true);
  };

  const handleCloseHelpModal = () => {
    setOpenHelp(false);
  };

  const handleOpenSettingsModal = () => {
    setOpenSettings(true);
  };

  const handleCloseSettingsModal = () => {
    setOpenSettings(false);
  };

  let ModalType = 'open';
  if (openSettings === true) {
    ModalType = 'openSettings';
  }

  // MediaQuery functionality
  let viewPort = false;
  const md = useMediaQuery('(min-width: 1050px)');
  if (viewPort === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  console.log(`handlePrint from game menu: ${props.handlePrint}`);

  return (
    <Box>
      {(() => {
        switch (viewPort) {
          case true:
            return (
              <Box className={classes.root}>
                <Box className={classes.leftContainer}>
                  <ClearButton title={grid} />
                  <ClearButton title={level} />
                </Box>

                <Box className={classes.centerContainer}>
                  <Timer />
                </Box>
              </Box>
            );
          default:
            return (
              <Box className={classes.root}>
                <Box className={classes.leftContainer}>
                  <ClearButton title={grid} />
                  <ClearButton title={level} />
                </Box>

                <Box className={classes.centerContainer}>
                  <Timer />
                </Box>

                <Box className={classes.rightContainer}>
                  <ClearButton title={'Print'} click={props.handlePrint} />
                  <ClearButton title={'Help'} click={handleOpenHelpModal} />
                  <ClearButton
                    title={'Settings'}
                    click={handleOpenSettingsModal}
                  />
                </Box>
              </Box>
            );
        }
      })()}

      {(() => {
        switch (ModalType) {
          case 'openSettings':
            return (
              <Box>
                {/* Settings Modal --------------------------------- */}

                <Modal
                  aria-labelledby='transition-modal-title'
                  aria-describedby='Setting Modal'
                  className={classes.modal}
                  open={openSettings}
                  onClose={handleCloseSettingsModal}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openSettings}>
                    <Box className={classes.paper}>
                      <SettingsModal />
                    </Box>
                  </Fade>
                </Modal>
              </Box>
            );
          default:
            return (
              <Box>
                {/* Help Modal --------------------------------- */}

                <Modal
                  aria-labelledby='transition-modal-title'
                  aria-describedby='Help Modal'
                  className={classes.modal}
                  open={openHelp}
                  onClose={handleCloseHelpModal}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openHelp}>
                    <Box className={classes.paper}>
                      <HelpModal />
                    </Box>
                  </Fade>
                </Modal>
              </Box>
            );
        }
      })()}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
  leftContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
    marginLeft: '10px',
  },
  centerContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
  },
  rightContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '10px',
  },
  links: {
    width: '75%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icons: {
    width: '25%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  disabled: {
    color: 'red',
  },
  modal: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  paper: {
    width: '30%',
    opacity: '0.5',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default GameMenu;
