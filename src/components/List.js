import React from 'react';
import { 
  Card, Toolbar, AppBar, Button,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Zoom,
  TextField,
  FormControl,
  ListItemSecondaryAction,
  
  
} from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import  { toDoList, deletedList } from '@/storage'
import Recoil  from 'recoil';


const TaskList = ({starters, list}) => {
  
  const [tasks, setTasks] = Recoil.useRecoilState(toDoList)
  const [deleted, setDeleted] = Recoil.useRecoilState(deletedList)

  const [newt, setNewt] = React.useState('')
  let isMain = list === "main"
  let showTasks = isMain ? tasks : deleted

  let lastId = showTasks.length === 0 ? 1 : [...showTasks ].pop().id
  const [nextid, setNextid] = React.useState(lastId+1)

  // Methods
  const deleteTask = id =>{
    let deletedTask = tasks.filter(i=>i.id == id)[0]
    setDeleted( [ ...deleted, deletedTask ])
    setTasks( tasks.filter(i=>i.id != id) )
  } 
  const restoreTask = id => {
    let deletedTask = deleted.filter(i=>i.id == id)[0]
    setTasks( [ ...tasks, deletedTask ])
    setDeleted( deleted.filter(i=>i.id != id) )
  }
  const removeForever = id => setDeleted( deleted.filter(i=>i.id != id) )
  const addTask = txt => {
    if (txt==='') return
    let new_task={id:nextid, content:txt,status:false}
    setTasks([...tasks,new_task]) 
    setNewt('')
    setNextid(nextid+1)
  }
  const toggleAcomplishment = id => setTasks( tasks.map(t=>{
    if(t.id != id) return t;
    t.status = !t.status
    return t
    }))
  const editable = id =>{
    let isEmpty = null
    setTasks( tasks.map(t=>{
      if(t.id != id) return t;
      if(t.content === '') isEmpty = t.id
      if(t.editing){
        delete t.editing
      }else{
        t.editing=true
      }
      return t
    }))
    if(isEmpty) deleteTask(isEmpty)
  } 
    const editTask = (id,txt) => setTasks( tasks.map(t=>{
      if(t.id != id) return t
      t.content = txt
      return t
    }))


  // Template
  return pug`
  Card
    Toolbar.MuiAppBar-colorPrimary.mb-3.justify-content-between
      if isMain
        h3 #{showTasks.length} tareas por realizar
      else
        h3 #{showTasks.length} tareas borradas
    .container-fluid
      if isMain
        .row.px-3
          .col-10
            TextField(
              onChange=e=>setNewt(e.target.value)
              onKeyUp=(ev)=>{ if (ev.key === 'Enter') addTask(ev.target.value) }
              fullWidth
              value=newt 
              label="Agregar Tarea")
          .col-2
            Button.btn.btn-dark(onClick=()=>addTask(newt)) Agregar

      List
        if showTasks.length == 0
          ListItem(role="listitem" button)
            .justify-content-center
              if isMain
                h2 No tienes tareas programadas
              else
                h2 No tienes tareas eliminadas

        each item in showTasks 
          ListItem(key=item.id role="listitem" button)
            ListItemIcon
              if isMain
                Checkbox(
                onClick=()=>toggleAcomplishment(item.id)
                checked=item.status
                tabIndex=-1
                disableRipple)
            ListItemText
              if item.editing
                TextField(
                  onChange=e=>editTask(item.id,e.target.value)
                  onBlur=()=>editable(item.id)
                  onKeyUp=(ev)=>{ if (ev.key === 'Enter') editable(item.id) }
                  fullWidth value=item.content
                  )
              else
                | #{item.content}
            ListItemSecondaryAction
              if isMain
                Button.btn.btn-dark(onClick=()=>editable(item.id)) 
                  i.material-icons edit
                Button.btn.btn-dark(onClick=()=>deleteTask(item.id)) 
                  i.material-icons delete
              else
                Button.btn.btn-dark(onClick=()=>restoreTask(item.id)) 
                  RestoreFromTrashIcon              
                Button.btn.btn-dark(onClick=()=>removeForever(item.id)) 
                  DeleteForeverIcon
  `
}

export default TaskList