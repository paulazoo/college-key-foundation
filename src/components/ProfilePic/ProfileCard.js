import React, { useState } from 'react';
import {
  Typography,
  Button,
  Icon,
  IconButton,
  Popover,
  Grid,
  Box,
  Card,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import SchoolIcon from '@material-ui/icons/School';

// Redux
import { connect } from 'react-redux';
import {} from '../../store/actions/index';

// Theme
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Custom Components
import GmailSvg from '../../assets/SocialMedia/Gmail.svg';

const useStyles = makeStyles((theme) => ({
  welcomeName: {
    color: theme.palette.majorText,
    fontWeight: 'medium',
    fontSize: 30,
    letterSpacing: 0.3,
  },
  copyButton: {
    padding: 0,
    margin: 0,
    marginLeft: 5 * theme.singleSpacing,
  },
  link: {
    color: theme.palette.common.gray,
    textDecoration: 'none',
  },
  popoverBox: { padding: '1.5rem' },
}));
function ProfileCard({ account, ...props }) {
  const classes = useStyles();

  return (
    <Card>
      <Box className={classes.popoverBox}>
        <Grid container direction='column' spacing={2} alignItems='baseline'>
          <Grid item>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='flex-start'
              spacing={2}
            >
              <Grid item>
                <img
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: '50%',
                    padding: 0,

                    borderColor: 'red',
                    borderWidth: 5,
                  }}
                  src={account.image_url}
                  alt={account.name}
                />
              </Grid>
              <Grid item>
                <Grid container direction='column'>
                  <Grid item>
                    <Typography className={classes.welcomeName}>
                      {account.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction='row'
                      spacing={1}
                      alignItems='center'
                    >
                      <Grid item>
                        <IconButton
                          size='small'
                          target='_blank'
                          href={`mailto:${account.email}`}
                        >
                          <Icon>
                            <img
                              src={GmailSvg}
                              alt='Gmail'
                              width={24}
                              height={24}
                            />
                          </Icon>
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <Typography>
                          <a
                            href={`mailto:${account.email}`}
                            target='_blank'
                            className={classes.link}
                          >
                            {account.email}
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* If account user has entered their phone number */}
                  {typeof account.phone !== 'undefined' &&
                    account.phone !== null &&
                    account.phone !== '' && (
                      <Grid item>
                        <Grid
                          container
                          direction='row'
                          spacing={1}
                          alignItems='center'
                        >
                          <Grid item>
                            <IconButton size='small'>
                              <PhoneIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <Typography>
                              <a className={classes.link}>
                                {`${account.phone}`}
                              </a>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  {typeof account.school !== 'undefined' &&
                    account.school !== null &&
                    account.school !== '' && (
                      <Grid item>
                        <Grid
                          container
                          direction='row'
                          spacing={1}
                          alignItems='center'
                        >
                          <Grid item>
                            <IconButton size='small'>
                              <SchoolIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <Typography>
                              <a className={classes.link}>
                                {account.grad_year
                                  ? `${account.school} (${account.grad_year})`
                                  : `${account.school}`}
                              </a>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* If user does not have a bio */}
          {typeof account.bio !== 'undefined' &&
            account.bio !== null &&
            account.bio !== '' && (
              <Grid item>
                <Typography>
                  <b>Bio: </b>
                  {account.bio}
                </Typography>
              </Grid>
            )}
        </Grid>
      </Box>
    </Card>
  );
}

export default ProfileCard;
