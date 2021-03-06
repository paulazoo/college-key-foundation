import React, { useState } from 'react';
import { Typography, Divider } from '@material-ui/core';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

// Redux

// Custom Components

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
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
  const theme = useTheme();

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
