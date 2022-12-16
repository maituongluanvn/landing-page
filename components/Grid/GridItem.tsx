import React from 'react';
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const styles = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
};

const useStyles = makeStyles(styles as any);

export interface GridItemProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}
export default function GridItem(props: any) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}
