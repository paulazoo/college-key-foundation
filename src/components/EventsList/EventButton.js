import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Grid,
  SvgIcon,
  Box,
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/styles';
import {
  postRegister,
  postUnregister,
  postJoin,
} from '../../store/actions/api';

// Custom Components

const useStyles = makeStyles((theme) => ({
  link: {
    margin: 0,
    textTransform: 'none',
  },
  linkContainer: { wordBreak: 'break-word' },
  linkText: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
  buttonContainer: {
    padding: '10px !important',
  },
}));

function EventButton({
  eventId,
  link,
  fullLink = false,
  accountRegistration = { registered: false, joined: false },
  showJoin,
  showRegister,
  ...props
}) {
  const classes = useStyles();

  const handleToggleRegister = () => {
    if (
      accountRegistration.registered ||
      accountRegistration.registered === false
    ) {
      props.postRegister(eventId);
    } else if (accountRegistration.registered === true) {
      props.postUnregister(eventId);
    }
  };

  const handleJoin = () => {
    props.postJoin(eventId);
  };

  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      justify='center'
      className={classes.buttonContainer}
      spacing={2}
    >
      <Grid item>
        <Box className={classes.linkContainer}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleToggleRegister}
            // disabled={!showRegister}
          >
            {accountRegistration !== null &&
            accountRegistration.registered === true ? (
              <h3 className={classes.link}>Unregister</h3>
            ) : (
              <h3 className={classes.link}>Register</h3>
            )}
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.linkContainer}>
          <Button
            variant='contained'
            color='secondary'
            disabled={!showJoin}
            rel='noreferrer'
            target='_blank'
            href={link}
            onClick={handleJoin}
          >
            <h3 className={classes.link}>
              {fullLink ? `Link To Join: ${link}` : 'Join!'}
            </h3>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  postRegister: (eventId) => dispatch(postRegister(eventId)),
  postUnregister: (eventId) => dispatch(postUnregister(eventId)),
  postJoin: (eventId) => dispatch(postJoin(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventButton);
