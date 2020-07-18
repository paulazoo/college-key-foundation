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
import {
  executiveTeam,
  outreachTeam,
  recruitmentDirectors,
  programTeam,
  graphicsMarketingTeam,
  curriculumTeam,
  technicalTeam,
} from './teamMembers';

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
    margin: 0,
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  memberItemContainer: {},
  memberItem: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(4),
  },
  totalGrid: {
    padding: theme.spacing(10),
  },
  memberName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  memberPosition: {
    fontSize: 18,
    color: theme.palette.primary.main,
  },
  memberText: {
    color: theme.palette.common.gray,
    fontSize: 12,
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
    fontSize: 64,
    color: theme.palette.common.white,
  },
}));

function Team(props) {
  const classes = useStyles();

  const renderTeam = (team, teamName, color = 'green') => {
    return (
      <Card
        className={classes.teamCard}
        style={{
          backgroundColor: color,
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} height='100%' width='80%'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={10}
              className={classes.totalGrid}
            >
              <Grid item xs={12}>
                <Grid container direction='row' justify='center'>
                  <Grid item>
                    <Typography className={classes.teamName}>
                      {teamName}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {team.map((member) => (
                <Grid item xs={6} className={classes.memberItemContainer}>
                  <Grid
                    container
                    justify='center'
                    alignItems='center'
                    direction='row'
                    className={classes.memberItem}
                  >
                    <Grid item xs={5}>
                      <Button
                        color='primary'
                        edge='end'
                        size='small'
                        style={{
                          height: 128,
                          width: 128,
                          placeSelf: 'center',
                        }}
                      >
                        <img
                          style={{
                            height: 128,
                            width: 128,
                            borderRadius: '50%',
                            padding: 0,

                            borderColor: 'red',
                            borderWidth: 5,
                          }}
                          src={require(`../../assets/TeamMembers/${member.name}.JPG`)}
                          alt={member.name}
                        />
                      </Button>
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
      </Card>
    );
  };

  return (
    <>
      <WordDivider spacing={125}>
        <Typography variant='h3' className={classes.wordDivider}>
          Meet The Team
        </Typography>
      </WordDivider>
      {renderTeam(
        graphicsMarketingTeam,
        'Graphics and Marketing Team',
        'green'
      )}
    </>
  );
}

export default Team;
