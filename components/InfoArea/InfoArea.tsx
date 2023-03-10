import React from 'react';
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@mui/styles';

import styles from '@styles/jss/nextjs-material-kit/components/infoStyle';

const useStyles = makeStyles(styles as any);

export interface InfoAreaProps {
  icon: any;
  title: any;
  description: string;
  iconColor?: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose' | 'gray';
  vertical: boolean;
}

export default function InfoArea(props: InfoAreaProps) {
  const classes = useStyles();
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor || 'gray']]: true,
    [classes.iconWrapperVertical]: vertical,
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}
