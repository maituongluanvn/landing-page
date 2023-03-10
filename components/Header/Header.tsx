import React, { ReactElement } from 'react';
import Link from 'next/link';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Button, Hidden, Drawer } from '@mui/material';
// @material-ui/icons
import Menu from '@mui/icons-material/Menu';
// core components
import styles from '@styles/jss/nextjs-material-kit/components/headerStyle';

const useStyles = makeStyles(styles as any);

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (changeColorOnScroll) {
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body.getElementsByTagName('header')[0].classList.remove(classes[color || 'primary']);
        document.body.getElementsByTagName('header')[0].classList.add(classes[changeColorOnScroll.color]);
      } else {
        document.body.getElementsByTagName('header')[0].classList.add(classes[color || 'primary']);
        document.body.getElementsByTagName('header')[0].classList.remove(classes[changeColorOnScroll.color]);
      }
    }
  };

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color || 'primary']]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const brandComponent = (
    <Link href="/" as="/">
      <Button className={classes.title}>{brand}</Button>
    </Link>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

export interface HeaderProps {
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'transparent' | 'white' | 'rose' | 'dark';
  rightLinks?: ReactElement;
  leftLinks?: ReactElement;
  brand: string;
  fixed?: boolean;
  absolute?: boolean;
  changeColorOnScroll?: {
    height: number;
    color: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'transparent' | 'white' | 'rose' | 'dark';
  };
}
