import React, { useState } from 'react';
import { Typography, Divider } from '@material-ui/core';

// Theme
import { theme } from '../../theme';
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
    textAlign: 'center',
  },
}));

export default function WordDivider({ children, spacing }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <span
        className={classes.content}
        style={{
          width: theme.spacing(spacing),
        }}
      >
        {children}
      </span>
      <div className={classes.border} />
    </div>
  );
}
