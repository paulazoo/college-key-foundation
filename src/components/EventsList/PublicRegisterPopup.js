import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Dialog,
  Box,
  CardActions,
  TextField,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { postPublicRegister } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({
  eventDialog: {
    padding: theme.spacing(4),
  },
  eventCard: {
    width: '100%',
    position: 'relative',
    height: '100%',
    overflow: 'auto',
  },
  eventActionArea: {
    position: 'relative',
    height: '100%',
  },
  nameText: {},
  cardTitle: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 26,
  },
  cardTime: {
    fontSize: 22,
    fontWeight: 'light',
    color: theme.palette.common.gray,
    margin: 0,
  },
  cardHost: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardKind: {
    fontSize: 18,
  },
  cardDesc: {
    fontSize: 16,
  },
  descContainer: {
    wordBreak: 'break-word',
  },
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

function PublicRegisterPopup({
  event,
  publicRegisterPopupOpen,
  setPublicRegisterPopup,
  ...props
}) {
  const classes = useStyles();

  const [publicName, setPublicName] = useState('');
  const [publicEmail, setPublicEmail] = useState('');

  const handleChangePublicName = (e) => {
    setPublicName(e.target.value);
  };

  const handleChangePublicEmail = (e) => {
    setPublicEmail(e.target.value);
  };

  const handleClosePublicRegisterPopup = () => {
    setPublicRegisterPopup(false);
  };

  const handlePublicRegister = () => {
    // TODO: required validation
    props.postPublicRegister(event.id, {
      public_name: publicName,
      public_email: publicEmail,
    });
    setPublicRegisterPopup(false);
  };

  return (
    <Dialog
      open={publicRegisterPopupOpen}
      onClose={handleClosePublicRegisterPopup}
      className={classes.eventDialog}
    >
      <Card className={classes.eventCard}>
        <CardHeader
          title={(
            <div className={classes.cardTitle}>
              <strong className={classes.nameText}>
                {`Register for ${event.name}`}
              </strong>
            </div>
          )}
          subheader={(
            <div className={classes.cardTime}>
              {event.start_time !== null ? (
                <>
                  {`${moment(event.start_time).format(
                    'ddd, MMMM Do, h:mm A'
                  )} to ${moment(event.end_time).format('h:mm A')}`}
                </>
              ) : (
                <>Always open.</>
              )}
            </div>
          )}
        />
        <CardContent>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            spacing={2}
          >
            <Grid item xs={12}>
              <TextField
                required
                variant='outlined'
                fullWidth
                value={publicName}
                onChange={handleChangePublicName}
                label='Your Name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant='outlined'
                fullWidth
                value={publicEmail}
                onChange={handleChangePublicEmail}
                label='Your Email'
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container direction='row' justify='space-between'>
            <Grid item>
              <Button onClick={handleClosePublicRegisterPopup}>Cancel</Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='secondary'
                onClick={handlePublicRegister}
                type='submit'
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  accounts: state.master.accounts,
});

function mapDispatchToProps(dispatch) {
  return {
    postPublicRegister: (eventId, body) =>
      dispatch(postPublicRegister(eventId, body)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicRegisterPopup);
