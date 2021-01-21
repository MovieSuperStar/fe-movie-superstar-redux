import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <TopBar whereAt="About" />
    </>
  );
}
