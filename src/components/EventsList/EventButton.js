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
}));

function EventButton({ link, ...props }) {
  const classes = useStyles();

  return (
    <Grid container direction='row' alignItems='center' justify='flex-start'>
      <Grid item>
        <Box className={classes.linkContainer}>
          <h3 className={classes.link}>{`Link: ${link}`}</h3>
        </Box>
      </Grid>
      {/* <Grid item>
        <IconButton
        variant="contained"
        color="secondary"
        component={NavLink}
        to={`/${link}`}
        style={{
          padding:0
        }}
        >
          <SvgIcon viewBox="5 6 13 13" style={{height:"50px", width:"50px"}}>
            <path d="M10 17l5-5-5-5v10z"></path>
          </SvgIcon>
      </IconButton>
    </Grid> */}
    </Grid>
  );
}

export default EventButton;
