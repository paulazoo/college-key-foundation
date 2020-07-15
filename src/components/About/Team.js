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
    padding: theme.spacing(4),
  },
  totalGrid: {
    padding: theme.spacing(6),
  },
  memberName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  memberPosition: {
    fontSize: 18,
    color: theme.palette.primary.dark,
  },
  memberText: {
    color: theme.palette.common.gray,
    fontSize: 16,
  },
  memberTextContainer: {
    textAlign: 'left',
  },
}));

function Team(props) {
  const classes = useStyles();

  const teamMembersLeft = [
    {
      name: 'Jacky Huang',
      position: 'President',
      text:
        "Jacky, part of Harvard's Class of 2024, was inspired by his mentorship with Lucas to model a one-on-one system to help underrepresented students. He comes from an comprehensive marketing and outreach background and is in charge of the broad logistical aspects of the organization.",
      image: '',
    },
    {
      name: 'Nalani Santos',
      position: 'Program Director',
      text:
        "Nalani, part of Stanford's Class of 2024, is in charge of the logistics of the month-long fellowship program, including lectures and workshops as well as coordinating with admission officers, other organizations and scholarship representatives.",
      image: '',
    },
    {
      name: 'Natalie Winter',
      position: 'Co-Director Hawaii Branch',
      text:
        "Natalie, part of Tufts' Class of 2023, is  in charge of high school outreach in Hawaii. She is also proactively working with organizations in Hawaii to maximize the breadth and positive impact of the College Key Foundation.",
      image: '',
    },
    {
      name: 'Sahir Qureshi',
      position: 'Co-Director, Western Region',
      text:
        "Sahir, part of Stanford's Class of 2024, coordinates outreach to the Northern California region for the organization and is excited about helping underserved students in his area get the resources they need to succeed.",
      image: '',
    },
    {
      name: 'Luis Rubio',
      position: 'Co-Director, Mid Western Region',
      text:
        "Luis, part of Johns Hopkin's Class of 2024, communicates with students across the Mid Western United States and is eager to ease the college application process for many driven and talented students.",
      image: '',
    },
    {
      name: 'Melissa Meng',
      position: 'Outreach Co-Director',
      text:
        "Melissa, part of Harvard's Class of 2024, helps to manage the creative aspects and design of College Key, and is excited to take part in reaching out to students, regardless of socio-economic background, to help them succeed with their career-oriented goals. ",
      image: '',
    },
  ];

  const teamMembersRight = [
    {
      name: 'Lucas Leanza',
      position: 'Vice-President',
      text:
        "Lucas, part of Stanford's Class of 2023, is in charge of the organization's broad logistical, outreach, coding and optimization aspects. With a background in educational non-profits, Lucas worked with Jacky last year to create the groundwork for the foundation.",
      image: '',
    },
    {
      name: 'Rina Nagashima',
      position: 'Co-Director Hawaii Branch',
      text:
        "Rina, a transfer student from Wellesley to Scripps' Class of 2023, is in charge of mentor outreach and organizational partnership at the Hawaii branch. Having gone through the application process twice, she is enthusiastic in her outreach and mission to Hawaii's rising seniors and their unique situations.",
      image: '',
    },
    {
      name: 'Linda Lin',
      position: 'Program Co-Director/Finance Director',
      text:
        "Linda, part of Harvard's Class of 2024, is in charge of  partnerships, panels, as well as  financial aspects of the organization, including setting up donation systems, applying to grants, and ensuring donor payment processing.",
      image: '',
    },
    {
      name: 'Kobi Khong',
      position: 'Co-Director, Western Region',
      text:
        "Kobi, part of Johns Hopkin's Class of 2024, liaises with schools and organizations throughout the Southern California region for College Key in order to ensure equal opportunities for students who strive their goals and for their education, regardless of socio-economic status.",
      image: '',
    },
    {
      name: 'Iandra Ramos',
      position: 'Outreach Co-Director, Northeastern Region',
      text:
        "Iandra, part of Harvard's Class of 2024, helps to coordinate partnerships with other organizations that have similar goals as College Key, and is dedicated to providing unique  academic opportunities to underprivileged students.",
      image: '',
    },
    {
      name: 'Paula Zhu',
      position: 'hello',
      text: 'whaddup i coded this website',
      image: '',
    },
    // {
    //   name: 'Nalani Santos',
    //   position: 'Program Director',
    //   text: "hi'",
    //   image: '',
    // },
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
              <Grid container direction='column' justify='space-between'>
                {teamMembersLeft.map((member) => (
                  <Grid item className={classes.memberItem}>
                    <Grid
                      container
                      justify='center'
                      alignItems='center'
                      direction='row'
                    >
                      <Grid item xs={5}>
                        image
                      </Grid>
                      <Grid item xs={7} className={classes.memberTextContainer}>
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
              <Grid container direction='column' justify='space-between'>
                {teamMembersRight.map((member) => (
                  <Grid item className={classes.memberItem}>
                    <Grid
                      container
                      justify='center'
                      alignItems='center'
                      direction='row'
                      p={10}
                    >
                      <Grid item xs={5}>
                        image
                      </Grid>
                      <Grid item xs={7} className={classes.memberTextContainer}>
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
