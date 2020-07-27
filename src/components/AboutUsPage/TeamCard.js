import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

const TeamCard = (props) => {
  const classes = useStyles();

  const { name, image, title, linkedin, github } = props.member || {};

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (

    <Box className={classes.root}>
      <Avatar
        alt={name}
        src={image}
        className={classes.large}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        style={{ cursor: 'pointer' }}
      />
      <br />
      <Box>
        <Popper
          placement='center'
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{ zIndex: 1 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-end' ? 'bottom-end' : 'bottom-end',
              }}
            >
              <Box className={classes.info}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList 
                    autoFocusItem={open}
                    id='menu-list-grow'
                    onKeyDown={handleListKeyDown}
                    data-testid='container'
                  >
                    <Typography variant='subtitle2' data-testid='name'>{name}</Typography>
                    <Typography variant='caption' data-testid='title'>{title}</Typography>
                    <Box className={classes.icons}>
                      <IconButton href={github} data-testid='github'>
                        <GitHubIcon
                          style={{ fontSize: 25, color: blueGrey[300] }}
                        />
                      </IconButton>
                      <IconButton href={linkedin} data-testid='linkedin'>
                        <LinkedInIcon
                          style={{ fontSize: 25, color: blueGrey[300] }}
                        />
                      </IconButton>
                    </Box>
                  </MenuList>
                </ClickAwayListener>
              </Box>
            </Grow>
          )}
        </Popper>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  info: {
    padding: 20,
  },
}));

export default TeamCard;
