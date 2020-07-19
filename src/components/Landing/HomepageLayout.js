import React from 'react';
import Container from '@material-ui/core/Container';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '80vh',
    minHeight: 500,
    [theme.breakpoints.down('sm')]: {
      height: '40vh',
      minHeight: 250,
    },
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
}));

function HomepageLayout({ backgroundClassName, children, ...props }) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {children}
      <div className={classes.backdrop} />
      <div className={`${classes.background} ${backgroundClassName}`} />
    </section>
  );
}

export default HomepageLayout;
