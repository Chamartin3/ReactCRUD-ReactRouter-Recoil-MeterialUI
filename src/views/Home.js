import React from 'react';
import TaskList from '@/components/List'

import {atom, selector, useRecoilState} from 'recoil';

const Home = props => {


  return pug`
    h1 Tareas
    TaskList( list="main")

  `
}
export default Home;