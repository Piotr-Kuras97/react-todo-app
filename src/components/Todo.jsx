import React, { useReducer, useState, useEffect } from "react";
import '../styles/main.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faCheckCircle, faFile } from "@fortawesome/free-solid-svg-icons";

import { reducer } from "../reducer/reducer";

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import SortingOptions from "./SortingOptios";

function Todo() {

  const [state, dispatch] = useReducer(reducer, {
    activeTasks: [],
    completedTasks: [],
  })

  const [sortAZ, setSortAZ] = useState(false)
  const [sortPriority, setSortPriority] = useState(false)

  const [darkMode, setDarkMode] = useState(false)

  const sortingAZ = () => {
    setSortAZ(true)
    setSortPriority(false)
  }
  const sortingNewest = () => {
    setSortAZ(false)
    setSortPriority(false)
  }

  const sortingPriority = () => {
    setSortAZ(false)
    setSortPriority(true)
  }

  const changeMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if(darkMode){
      document.body.classList.add("darkmode")
    }
    else {
      document.body.classList.remove("darkmode")
    }
  }, [darkMode])

  return (
    <>
    <div className={darkMode ? "todo darkmode" : 'todo'}>
      <h1 className="todo__title"><FontAwesomeIcon icon={faFile} /> React Todo App</h1>
      <AddTask dispatch={dispatch} darkMode={darkMode}/>
      <div className={darkMode ? "line darkmode" : 'line'}></div>
      <h3 className="tasklist__title"><FontAwesomeIcon icon={faListCheck} /> List of your tasks:</h3>
      <div className="tasklist__container">
        <TaskList todos={state.activeTasks} dispatch={dispatch} sortAZ={sortAZ} sortPriority={sortPriority} darkMode={darkMode}/>
      </div>

      {state.completedTasks.length >= 1 ? <h3 className="completedtask__title"><FontAwesomeIcon icon={faCheckCircle} style={{color: 'green'}}/> Completed tasks:</h3> : null}
      <div className="completedtask__container">
        <ol>
          <CompletedTasks todos={state.completedTasks}/>
        </ol>
      </div>
    </div>
   
    <SortingOptions sortingAZ={sortingAZ} sortingNewest={sortingNewest} sortingPriority={sortingPriority} state={state} dispatch={dispatch} changeMode={changeMode} darkMode={darkMode}/>
    <footer>Created by <a href="https://github.com/Piotr-Kuras97">Piotr Kuraś</a></footer>
    </>
  );
}

export default Todo;
