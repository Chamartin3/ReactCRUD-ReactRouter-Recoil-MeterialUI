import React from 'react';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";


import Home from '@/views/Home.js';
import Deleted from '@/views/Deleted.js';
import About from '@/views/About.js';



export default function View() {
  let location = useLocation();
  return pug`
  TransitionGroup
    CSSTransition(key=location.key classNames="page" timeout=300 )
      Switch(location=location)
        Route(path="/about" component=About)
        Route(path="/deleted" component=Deleted)
        Route(path="/" component=Home)
  `
}