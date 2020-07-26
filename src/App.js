import React from 'react';
import Home from './views/Home.js';
import Deleted from './views/Deleted.js';
import About from './views/About.js';

import AppDrawer from '@/layouts/Drawer'
import NavBar from '@/layouts/Toolbar'
import View from '@/layouts/View'

import { makeStyles, useTheme } from '@material-ui/core/styles';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import '@/assets/styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useLocation
} from "react-router-dom";

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";


import { RecoilRoot } from 'recoil';
import './storage';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
}));

// const Home = props => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [drawer, setDrawer] = React.useState(false);

//   const toogleDrawer = (val) => {
//     setOpen(val);
//   };

//   return pug`
//   div(className=classes.root)
//     NavBar(
//       drawer=drawer
//       callOpen=()=>setDrawer(true)
//       drawerWidth=drawerWidth)
//     AppDrawer(
//       closeDrawer=()=>setDrawer(false)
//       drawer=drawer)
//     .container-fluid.pt-5
//       .my-5
//       TaskList
//   `
// }




// function View() {
//   let location = useLocation();
//   return(
//     <TransitionGroup>
//       <CSSTransition  key={location.key} classNames="page" timeout={300} >
//         <Switch location={location}>
//           <Route path="/about" component={About} />
//           <Route path="/deleted" component={Deleted}/>
//           <Route path="/" component={Home}/>
//         </Switch>
//       </CSSTransition>
//     </TransitionGroup>
//   )
// }

// const RView = withRouter(View)
function App() {
  // console.log(location);
  const classes = useStyles();
  const theme = useTheme();
  const [drawer, setDrawer] = React.useState(false);


  return pug`
  div(className=classes.root)
    RecoilRoot
      Router
        NavBar(
          drawer=drawer
          callOpen=()=>setDrawer(true)
          drawerWidth=drawerWidth)
        AppDrawer(
          closeDrawer=()=>setDrawer(false)
          drawer=drawer)
        .container-fluid.pt-5
          .my-5
            View
  `
}

export default App;
