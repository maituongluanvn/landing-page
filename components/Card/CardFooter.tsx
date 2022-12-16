import React, { ReactNode } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from '@mui/styles';
// @material-ui/icons

// core components
import styles from '@styles/jss/nextjs-material-kit/components/cardFooterStyle';

const useStyles = makeStyles(styles as any);

export default function CardFooter(props: CardFooterProps) {
  const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [`${className}`]: className !== undefined,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

export interface CardFooterProps {
  className?: string;
  children: ReactNode;
}
