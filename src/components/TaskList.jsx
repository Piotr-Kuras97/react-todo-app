import { ACTIONS } from "../reducer/actions"
import EditForm from "./EditForm"
import React, {useState} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faTrash, faCheck, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

function TaskList({todos, dispatch, sortAZ, sortPriority}){
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
                .sort((a, b) => {
                    if(sortAZ === false && sortPriority === false ){
                        return new Date(b.id) - new Date(a.id)
                    }
                    if(sortAZ){
                        const valueA = a.value.toUpperCase()
                        const valueB = b.value.toUpperCase()
                        if (valueA < valueB) {
                            return -1; 
                        } 
                        if (valueA > valueB) {
                            return 1; // b powinno być przed a
                          }
                        return 0; // wartości są równe
                    }
                    if(sortPriority){
                        const priorityOrder = ['high', 'medium', 'low']; // Definiuj kolejność priorytetów

                        const priorityA = priorityOrder.indexOf(a.priority);
                        const priorityB = priorityOrder.indexOf(b.priority);
                      
                        // Porównuj priorytety i zwracaj odpowiednie wartości dla sortowania
                        if (priorityA < priorityB) {
                          return -1; // Przesuń 'a' w górę
                        } else if (priorityA > priorityB) {
                          return 1; // Przesuń 'b' w górę
                        } else {
                          return 0; // Nie zmieniaj kolejności
                        }
                    }
                })
                .map(todo => {
                    return (<div key={todo.id} className="tasklist__task">
                        <FontAwesomeIcon icon={faCircle} className="tasklist__circle"/> 
                        <strong> {todo.value.toUpperCase()} </strong> 
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
                        {editTaskId === todo.id && edit ? <EditForm dispatch={dispatch} todoId={todo.id} oldValue={todo.value} handleFinishEdit={handleFinishEdit}/> : null}
                    </div>
                    )
            }) : <p>You currently have no active tasks, click <strong>'ADD TASK'</strong> to add a task</p>}

        </>
    )
}

export default TaskList