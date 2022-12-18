/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { ReactNode } from 'react';
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import makeStyles from '@mui/styles/makeStyles';
import { Button } from '@mui/material';

// core components

import buttonStyle from '@styles/jss/nextjs-material-kit/components/buttonStyle';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle,
}));

// eslint-disable-next-line react/display-name
const RegularButton = React.forwardRef((props: any, ref: any) => {
  const { color, round, children, fullWidth, disabled, simple, size, block, link, justIcon, className, ...rest } =
    props;

  const classes: any = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  return (
    <Button {...rest} ref={ref} classes={{ root: btnClasses }}>
      {children}
    </Button>
  );
});

export interface RegularButtonProp {
  color:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose'
    | 'white'
    | 'facebook'
    | 'twitter'
    | 'google'
    | 'github'
    | 'transparent';
  size?: 'sm' | 'lg';
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  children: ReactNode;
  className?: string;
}

export default RegularButton;
