import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project imports
import { MENU_OPEN, SET_MENU } from '@store-ts/actions';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import HomeIcon from '@mui/icons-material/Home';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = (props: any) => {
  const { item, level } = props;
  const theme: any = useTheme();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const customization = useSelector((state: any) => state.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  // const Icon = HomeIcon;
  const itemIcon = item?.icon ? (
    <HomeIcon />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: customization.isOpen.findIndex((id: any) => id === item?.id) > -1 ? 8 : 6,
        height: customization.isOpen.findIndex((id: any) => id === item?.id) > -1 ? 8 : 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  // let itemTarget = '_self';
  // if (item.target) {
  //   itemTarget = '_blank';
  // }

  // let listItemProps = {
  //     component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
  // };
  // if (item?.external) {
  //     listItemProps = { component: 'a', href: item.url, target: itemTarget };
  // }

  const itemHandler = (id: any) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch({ type: MENU_OPEN, id: item.id });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ListItemButton
      // {...listItemProps}
      disabled={item?.disabled}
      sx={{
        borderRadius: `${customization.borderRadius}px`,
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      selected={customization.isOpen.findIndex((id: any) => id === item.id) > -1}
      onClick={() => itemHandler(item.id)}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant={customization.isOpen.findIndex((id: any) => id === item.id) > -1 ? 'h5' : 'body1'}
            color="inherit"
          >
            {item?.title}
          </Typography>
        }
        secondary={
          item?.caption && (
            <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
              {item?.caption}
            </Typography>
          )
        }
      />
      {item?.chip && (
        <Chip
          color={item?.chip.color}
          variant={item?.chip.variant}
          size={item?.chip.size}
          label={item?.chip.label}
          avatar={item?.chip.avatar && <Avatar>{item?.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default NavItem;
