import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const toDoList = atom({
  key: 'toDoList',
  default:  [
    {  
      id:1,
      content:'Comprobar que Omar sabe de  desarrollo Web',
      status:false
    },  
    {  
      id:2,
      content:'Tener una reunión para planificar el desarrollo',
      status:false
    },  
    {  
      id:3,
      content:'Hacer la planificaoón de las iteraciones de desarrollo',
      status:false
    },
  
  ],
});

const deletedList = atom({
  key: 'deletedList',
  default: [],
});

export {
  toDoList,
  deletedList

}