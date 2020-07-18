import React, { useEffect } from 'react';
import {
  Divider,
  Card,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from '@material-ui/core';

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
  memberItemContainer: {},
  memberItem: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  totalGrid: {
    padding: theme.spacing(4),
  },
  memberName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  memberTeamName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.palette.primary.main,
  },
  memberPosition: {
    fontSize: 16,
    color: theme.palette.primary.main,
  },
  memberText: {
    color: theme.palette.common.gray,
    fontSize: 14,
  },
  memberTextContainer: {
    textAlign: 'left',
  },
  wordDivider: {
    fontWeight: 'bold',
    color: theme.palette.common.gray,
  },
  teamName: {
    fontWeight: 'bold',
    fontSize: 32,
    color: theme.palette.common.white,
    padding: 0,
  },
  teamNameContainer: {
    padding: '0 !important',
  },
}));

function OurStory(props) {
  const classes = useStyles();

  return (
    <>
      <WordDivider spacing={125}>
        <Typography variant='h3' className={classes.wordDivider}>
          Our Story
        </Typography>
      </WordDivider>
      <Card
        style={{
          margin: 0,
          marginRight: theme.spacing(6),
          marginLeft: theme.spacing(6),
          marginBottom: theme.spacing(6),
          backgroundColor: theme.palette.common.teamBlue,
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} height='100%' width='80%'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={4}
              className={classes.totalGrid}
            >
              <Grid item xs={12} className={classes.teamNameContainer}>
                <Grid
                  container
                  direction='row'
                  justify='center'
                  className={classes.teamNameContainer}
                >
                  {/* <Grid item className={classes.teamNameContainer}>
                    <Typography className={classes.teamName}>
                      {'ou rtory '}
                    </Typography>
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.memberItemContainer}>
                <Grid
                  container
                  justify='center'
                  alignItems='center'
                  direction='row'
                  className={classes.memberItem}
                >
                  <Typography>
                    <p>
                      The founders of the College Key Foundation, Jacky Huang
                      (Harvard ’24) and Lucas Leanza (Stanford ’23), are both
                      FGLI students who met through Questbridge, a college match
                      program for high achieving low-income students. They not
                      only formed a mentor-mentee relationship, but also a
                      friendship that helped with the college application
                      process and inspired the mentorship model for their
                      organization. For many first generation students, having
                      this kind of peer support while navigating the many
                      aspects in the college application process can make the
                      process feel less stressful.
                    </p>
                    <p>
                      Thus, Jacky Huang, founder and president of the
                      organization, realized that individualized support was a
                      key factor missing from existing guidance programs.
                    </p>
                    <p>
                      His hopes are that the College Key Foundation’s
                      combination of one-on-one mentorship in addition to
                      traditional information sessions will help support
                      students in all aspects of the college application
                      process.
                    </p>
                    <p>
                      The extra hurdles facing FGLI students and those from
                      other disadvantaged backgrounds in the college admissions
                      process are too often overlooked, and the current economic
                      crisis exacerbates these difficulties. But just as the
                      COVID-19 pandemic has forced the nation’s education model
                      to change, the growing inequalities in our education
                      system has caused the College Key Foundation to reimagine
                      the way college prep is delivered to students of
                      disadvantaged backgrounds.
                    </p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default OurStory;
