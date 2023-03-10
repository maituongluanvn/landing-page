/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui core components
import { List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

import styles from '@styles/jss/nextjs-material-kit/components/footerStyle';

const useStyles = makeStyles(styles as any);

export default function Footer(props: FooterProps) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.linkedin.com/in/mai-luan-40523a16b/" className={classes.block} target="_blank">
                Linkedin
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.linkedin.com/in/mai-luan-40523a16b/" className={classes.block} target="_blank">
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.linkedin.com/in/mai-luan-40523a16b/" className={classes.block} target="_blank">
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.linkedin.com/in/mai-luan-40523a16b/" className={classes.block} target="_blank">
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          {/* &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} /> by{' '} */}
          <a href="https://www.linkedin.com/in/mai-luan-40523a16b/" className={aClasses} target="_blank">
            Mai Luan
          </a>{' '}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

export interface FooterProps {
  whiteFont?: boolean;
}
