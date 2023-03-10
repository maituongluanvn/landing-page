/* eslint-disable import/extensions */
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from '@mui/styles';
import { MenuItem, Popper, MenuList, ClickAwayListener, Paper, Grow, Divider, Icon } from '@mui/material';

// core components
import styles from '@styles/jss/nextjs-material-kit/components/customDropdownStyle';
import Button from '../CustomButtons/Button';

const useStyles = makeStyles(styles as any);

export default function CustomDropdown(props: CustomDropdownProps) {
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const handleClick = (event: any) => {
    if (anchorEl && anchorEl?.contains(event?.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event?.currentTarget);
    }
  };
  const handleClose = (param: any) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = (event: any) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  const classes = useStyles();
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding,
    navDropdown,
  } = props;
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive,
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[`${hoverColor || 'primary'}Hover`]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive,
  });
  let icon: JSX.Element | null = null;
  if (buttonIcon) {
    if (typeof buttonIcon === 'string') {
      icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
    } else {
      icon = <props.buttonIcon className={classes.buttonIcon} />;
    }
  }
  return (
    <div>
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? 'menu-list' : null}
          aria-haspopup="true"
          {...buttonProps}
          onClick={handleClick}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        // eslint-disable-next-line no-nested-ternary
        placement={dropup ? (left ? 'top-start' : 'top') : left ? 'bottom-start' : 'bottom'}
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true,
          [classes.pooperNav]: Boolean(anchorEl) && navDropdown,
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            id="menu-list"
            style={dropup ? { transformOrigin: '0 100% 0' } : { transformOrigin: '0 0 0' }}
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className={classes.menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem onClick={() => handleClose(dropdownHeader)} className={classes.dropdownHeader}>
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList.map((prop, key) => {
                    if (prop.divider) {
                      return (
                        <Divider
                          // eslint-disable-next-line react/no-array-index-key
                          key={key}
                          onClick={() => handleClose('divider')}
                          className={classes.dropdownDividerItem}
                        />
                      );
                    }
                    return (
                      // eslint-disable-next-line react/no-array-index-key
                      <MenuItem key={key} onClick={() => handleClose(prop)} className={dropdownItem}>
                        {prop}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export interface CustomDropdownProps {
  hoverColor?: 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose';
  buttonText?: string;
  buttonIcon?: string | any;
  dropdownList: any[];
  buttonProps?: any;
  dropup?: boolean;
  dropdownHeader?: string;
  rtlActive?: boolean;
  caret?: boolean;
  left?: boolean;
  noLiPadding?: boolean;
  navDropdown?: boolean;
  // function that retuns the selected item
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function;
}
