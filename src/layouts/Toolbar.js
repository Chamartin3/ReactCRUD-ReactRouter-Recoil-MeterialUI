import React from 'react';
import clsx from 'clsx';

import {
  AppBar,
  Toolbar,
  Icon,
  IconButton,
  Typography
  } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
  

const NavBar = props => {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: props.drawerWidth,
      width: `calc(100% - ${props.drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
  }))
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const openDrawer = ()=> props.callOpen(true)
  const classes = useStyles();
  return pug`
  AppBar(
    position="fixed"
    className=clsx(classes.appBar, {
      [classes.appBarShift]: props.drawer,
    })
    )
    Toolbar()
      IconButton(
        color="inherit"
        aria-label="open drawer"
        onClick=openDrawer
        edge="start"
        className=clsx(classes.menuButton, {
          [classes.hide]: props.drawer,
        })
        )
        i.material-icons menu
      Typography(variant="h6" noWrap) Crud de lista de tareas
  `
}

  export default NavBar