import React, { useEffect } from 'react';
import { Divider, Card, Typography, Box, Grid, Paper } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { theme } from '../../theme';
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import WordDivider from '../Shared/WordDivider';

const useStyles = makeStyles((theme) => ({
  googleButton: {
    paddingLeft: '22px',
  },
  prefix: {
    paddingLeft: '8px',
    color: '#005086',
    fontSize: '200%',
  },
  suffix: {
    color: '#61CCD7',
    fontSize: '200%',
  },
  description: {
    paddingLeft: '8px',
    color: '#777272',
  },
  navleft: {
    color: '#005086',
  },
  navright: {
    color: '#005086',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(25),
    },
  },
  title: {
    paddingLeft: '8px',
  },
  more: {
    marginTop: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgResponsive: {
    height: 'auto',
    width: 'auto',
    maxHeight: '40px',
    maxWidth: '250px',
  },
  img: {
    width: '30vh',
    borderRadius: '50%',
  },
  headText: {
    fontWeight: 'bold',
    color: theme.palette.common.black,
    fontSize: 32,
  },
  headTextContainer: {
    textAlign: 'center',
  },
  teamCard: {
    backgroundColor: theme.palette.secondary.light,
    margin: 0,
    marginRight: theme.spacing(20),
    marginLeft: theme.spacing(20),
    marginBottom: theme.spacing(10),
  },
  memberItem: {
    backgroundColor: theme.palette.common.white,
    margin: theme.spacing(4),
  },
  totalGrid: {
    padding: theme.spacing(6),
  },
}));

function Team(props) {
  const classes = useStyles();

  const teamMembersLeft = [
    {
      name: 'Paula Zhu',
      position: 'Co-Director',
      text: 'some text',
      image: '',
    },
    {
      name: 'Paula Zhu',
      position: 'Co-Director',
      text: 'some text',
    },
  ];

  const teamMembersRight = [
    {
      name: 'Paula Zhu',
      position: 'Co-Director',
      text: 'some text',
    },
    {
      name: 'Paula Zhu',
      position: 'Co-Director',
      text: 'some text',
    },
  ];

  return (
    <Card className={classes.teamCard}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} height='100%' width='80%'>
          <Grid
            container
            justify='space-between'
            alignItems='center'
            direction='row'
            spacing={6}
            className={classes.totalGrid}
          >
            <Grid item xs={12} className={classes.headTextContainer}>
              <Typography className={classes.headText}>OUR TEAM</Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='column'>
                {teamMembersLeft.map((member) => (
                  <Grid item className={classes.memberItem}>
                    <Grid
                      container
                      justify='center'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid item xs={5}>
                        <img>image</img>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography className={classes.memberName}>
                          {member.name}
                        </Typography>
                        <Typography className={classes.memberPosition}>
                          {member.position}
                        </Typography>
                        <Typography className={classes.memberText}>
                          {member.text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='column'>
                {teamMembersRight.map((member) => (
                  <Grid item className={classes.memberItem}>
                    <Grid
                      container
                      justify='center'
                      alignItems='center'
                      direction='column'
                      p={10}
                    >
                      <Grid item xs={5}>
                        <img>image</img>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography className={classes.memberName}>
                          {member.name}
                        </Typography>
                        <Typography className={classes.memberPosition}>
                          {member.position}
                        </Typography>
                        <Typography className={classes.memberText}>
                          {member.text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Team;
