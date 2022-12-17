import React from 'react';
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const styles = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
};

export interface GridContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const useStyles = makeStyles(styles as any);

export default function GridContainer(props: any) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container className={classes.grid + ' ' + className} {...rest}>
      {children}
    </Grid>
  );
}
