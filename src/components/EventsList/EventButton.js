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
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import moment from 'moment';

// Redux

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

function EventButton({
  link,
  fullLink = false,
  registered = false,
  showJoin,
  ...props
}) {
  const classes = useStyles();

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
            rel='noreferrer'
            target='_blank'
            href={link}
          >
            {registered ? (
              <h3 className={classes.link}>
                {fullLink ? `Link To Unregister: ${link}` : 'Unregister'}
              </h3>
            ) : (
              <h3 className={classes.link}>
                {fullLink ? `Link To Register: ${link}` : 'Register'}
              </h3>
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

export default EventButton;
