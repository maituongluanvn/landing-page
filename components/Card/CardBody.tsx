import React, { ReactElement } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from '@mui/styles';
// @material-ui/icons

// core components
import styles from '@styles/jss/nextjs-material-kit/components/cardBodyStyle';

const useStyles = makeStyles(styles as any);

export default function CardBody(props: CardBodyProps) {
  const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [`${className}`]: className !== undefined,
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

export interface CardBodyProps {
  className?: string;
  children: ReactElement | ReactElement[];
}
