import React, { useReducer, useState } from "react";
import '../styles/main.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { reducer } from "../reducer/reducer";

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";

function Todo() {

  const [state, dispatch] = useReducer(reducer, {
    activeTasks: [],
    completedTasks: [],
  })

  console.log(state)

  return (
    <div className="todo">
      <h1 className="todo__title">Simple React Todo App</h1>
      <AddTask dispatch={dispatch}/>
      <div className="line"></div>
      <h3 className="tasklist__title"><FontAwesomeIcon icon={faListCheck} /> TaskList:</h3>
      <div className="tasklist__container">
        <TaskList todos={state.activeTasks} dispatch={dispatch} />
      </div>

      {state.completedTasks.length >= 1 ? <h3 className="completedtask__title"><FontAwesomeIcon icon={faCheckCircle} style={{color: 'green'}}/> Completed Tasks:</h3> : null}
      <div className="completedtask__container">
        <ol>
          <CompletedTasks todos={state.completedTasks}/>
        </ol>
      </div>
    </div>
  );
}

export default Todo;
