import React, { useState } from 'react';
import { Typography, Divider } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux

// Custom Components

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  border: {
    borderBottom: '1px solid gray',
    width: '100%',
  },
  content: {
    padding: '0 5px 0 5px',
    width: theme.spacing(280),
    textAlign: 'center',
  },
}));

export default function WordDivider({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <span className={classes.content}>{children}</span>
      <div className={classes.border} />
    </div>
  );
}
