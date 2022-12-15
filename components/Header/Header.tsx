import React, { ReactElement } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Button, Hidden, Drawer, Menu } from '@mui/material';

// const useStyles: any = makeStyles(styles as any);

export default function Header(props: HeaderProps) {
  // const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" color="inherit" component="div">
          Photos
        </Typography>
      </Toolbar>
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
