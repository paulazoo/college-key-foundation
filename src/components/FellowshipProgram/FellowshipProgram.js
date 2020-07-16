import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Card,
  Typography,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import WordDivider from '../Shared/WordDivider';
import ReadyApply from './ReadyApply';

// Custom Components

const useStyles = makeStyles((theme) => ({
  underline: {
    textDecoration: 'underline',
  },
  fellowshipCard: {
    backgroundColor: theme.palette.common.white,
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(10),
    padding: theme.spacing(5),
  },
  wordDivider: {
    fontWeight: 'bold',
    color: theme.palette.common.gray,
  },
}));

function FellowshipProgram(props) {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <WordDivider spacing={175}>
        <Typography variant='h3' className={classes.wordDivider}>
          Fellowship Program
        </Typography>
      </WordDivider>
      <Card className={classes.fellowshipCard}>
        <p>
          <strong>
            <span className={classes.underline}>
              GENERAL INFORMATION ABOUT THE PROGRAM:
            </span>
          </strong>
        </p>
        <p>
          The College Key Foundation's summer fellowship is a 4-week FREE
          program where fellows attend two virtual workshops (over zoom) each
          week to learn about the college application process, get paired with a
          college mentor (from Harvard, Yale, Princeton, MIT, and other
          colleges) and will also receive additional resources during the 4-week
          programming to learn.
        </p>
        <p>
          <strong>
            <span className={classes.underline}>PROGRAM STRUCTURE:</span>
          </strong>
        </p>
        <p>week 1: Standardized testing (SAT/ACT)</p>
        <p>
          week 2: College essays (workshops led by Harvard, Stanford, Hopkins
          students, and more!)
        </p>
        <p>
          week 3: Learning about colleges and building your college list (get
          the opportunity to meet and speak with admissions officers
        </p>
        <p>week 4: Career panel</p>
        <p>
          <strong>
            <span className={classes.underline}>FELLOWS ELIGIBILITY:</span>
          </strong>
        </p>
        <p>
          This program is open to ONLY rising high school seniors from
          marginalized backgrounds (ex: traditionally underrepresent minorities,
          first-generation and/or low-income, LGBTQ+, undocumented students,
          immigrants, women in STEAM, etc.)
        </p>
        <p>
          <strong>
            <span className={classes.underline}>FELLOWS COMMITMENT:</span>
          </strong>
        </p>
        <p>
          Fellows MUST commit to attending the virtual workshops over zoom.
          However, we will be extremely flexible and accommodating because of
          the current circumstances.
        </p>
        <p>
          DEADLINE TO SUBMIT YOUR APPLICATION: June 30 @ 11:59 pm (eastern daily
          time)
        </p>
        <ReadyApply />
      </Card>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FellowshipProgram);
