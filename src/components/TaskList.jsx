import { ACTIONS } from "../reducer/actions"
import EditForm from "./EditForm"
import React, {useState} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faTrash, faCheck, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

function TaskList({todos, dispatch}){
    const [edit, setEdit] = useState(false)
    const [editTaskId, setEditTaskId] = useState(null);

    const handleStartEdit = (taskId) => {
      setEdit(true)
      setEditTaskId(taskId);
    }
  
    const handleFinishEdit = () => {
      setEdit(false)
    }

    const handleDelete = (todoId) => {
        dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todoId}})
    }

    const handleComplete = (todoId) => {
        dispatch({type: ACTIONS.COMPLETE_TODO, payload: {id: todoId}})
    }


    return(
        <>
            {todos.length >= 1 ? todos
                .sort((a, b) => new Date(b.id) - new Date(a.id))
                .map(todo => {
                    return (<div key={todo.id} className="tasklist__task">
                        <FontAwesomeIcon icon={faCircle} className="tasklist__circle"/> 
                        <strong> {todo.value} </strong> 
                        - Your task has priority: <strong>{todo.priority} </strong> 
                        - Complete your task by: <strong>{todo.calendar}</strong>  
                        <div className="tasklist__icons">
                            <FontAwesomeIcon icon={faCheck} 
                                className="tasklist__complete"
                                onClick={() => handleComplete(todo.id)}
                            />
                            <FontAwesomeIcon 
                                icon={faPenToSquare} className="tasklist__edit"
                                onClick={() => handleStartEdit(todo.id)}
                            />
                            <FontAwesomeIcon 
                                icon={faTrash} className="tasklist__delete"
                                onClick={() => handleDelete(todo.id)}
                            />
                        </div>
                        {editTaskId === todo.id && edit ? <EditForm dispatch={dispatch} todoId={todo.id} handleFinishEdit={handleFinishEdit}/> : null}
                    </div>
                    )
            }) : <p>You currently have no active tasks, click <strong>'ADD TASK'</strong> to add a task</p>}

        </>
    )
}

export default TaskList