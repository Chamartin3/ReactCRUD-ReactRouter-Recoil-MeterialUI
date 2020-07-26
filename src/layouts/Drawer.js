import React from 'react';
import clsx from 'clsx';
import { 
  Typography,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
  Button,
  SvgIcon
} from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  }
  
}))


const LINKS =[
  {name:'Tareas', icon:'list', path:'/'},
  {name:'Borradas', icon:'delete', path:'/deleted'},
  {name:'Acerca', icon:'info', path:'/about'},
]

const AppDrawer = props => {
  const classes = useStyles();
  const theme = useTheme();
  return pug`
  Drawer(
    variant="permanent"
    className=clsx(classes.drawer, {
      [classes.drawerOpen]: props.drawer,
      [classes.drawerClose]: !props.drawer,
    })
    classes={
      paper: clsx({
        [classes.drawerOpen]: props.drawer,
        [classes.drawerClose]: !props.drawer,
      }),
    })
    div(className=classes.toolbar)
    Button(onClick=()=>props.closeDrawer())
      ArrowBackRoundedIcon
      Typography Ejemplo Pedro
    Divider
    List
    each link,index in LINKS
      Link(key=index to=link.path)
        ListItem(button)
          ListItemIcon
            i.material-icons #{link.icon}
          ListItemText #{link.name}
    .mt-2
  `
}



export default AppDrawer