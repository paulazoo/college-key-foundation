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
import { postPublicRegister, postPublicJoin } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/styles';

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

function PublicEventButton({
  eventId,
  publicLink,
  fullLink = false,
  showJoin,
  showRegister,
  handlePublicRegisterPopup,
  ...props
}) {
  const classes = useStyles();

  const handleJoin = () => {
    props.postPublicJoin(eventId);
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
            onClick={handlePublicRegisterPopup}
            // disabled={!showRegister}
          >
            <h3 className={classes.link}>Register</h3>
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
            href={publicLink}
            onClick={handleJoin}
          >
            <h3 className={classes.link}>
              {fullLink ? `Link To Join: ${publicLink}` : 'Join!'}
            </h3>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  postPublicJoin: (eventId) => dispatch(postPublicJoin(eventId)),
  postPublicRegister: (eventId, body) =>
    dispatch(postPublicRegister(eventId, body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicEventButton);
