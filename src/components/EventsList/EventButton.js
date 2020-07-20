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
}));

function EventButton({ link, ...props }) {
  const classes = useStyles();

  return (
    <a
      rel='noreferrer'
      target='_blank'
      href={link}
      className={classes.linkText}
    >
      <Box className={classes.linkContainer}>
        <Button variant='contained' color='secondary'>
          <h3 className={classes.link}>{`Join: ${link}`}</h3>
        </Button>
      </Box>
    </a>
  );
}

export default EventButton;
