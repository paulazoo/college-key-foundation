import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Link,
  IconButton,
  Icon,
} from '@material-ui/core';

// Redux

// Theme
import { makeStyles } from '@material-ui/core/styles';
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';

// Custom Components

import WhiteInstagramSvg from '../../assets/whiteInstagram.svg';
import WhiteLinkedinSvg from '../../assets/whiteLinkedin.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    height: theme.spacing(8),
    display: 'flex',
    padding: 0,
    paddingRight: theme.spacing(8),
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.common.white,
  },
  socialMediaContainer: {
    textAlign: 'center',
  },
}));

function FooterSocialMedia() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.socialMediaContainer}>
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item>
          <IconButton
            size='small'
            target='_blank'
            href='https://www.instagram.com/collegekeyfoundation/'
          >
            <Icon>
              <img src={WhiteInstagramSvg} width={24} height={24} />
            </Icon>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size='small'
            target='_blank'
            href='https://www.google.com'
          >
            <Icon>
              <img src={WhiteLinkedinSvg} width={24} height={24} />
            </Icon>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FooterSocialMedia;
