import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { ACTIONS } from "../reducer/actions"

function AddTask({dispatch}){
    const [createTask, setCreateTask] = useState(false)
    const [value, setValue] = useState("")
    const [priority, setPriority] = useState('')
    const [calendar, setCalendar] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {value: value, priority: priority, calendar: calendar}})
        setValue("")
        setCreateTask(false)
        setCalendar("")
    }

    return(
        <>
            <button className="addtask__btn" onClick={() => setCreateTask(true)}>Add Task</button>
            {createTask ? 
                <div className="addtask">
                    <div className="addtask__form">
                        <h3 className="addtask__title">Fill in the details</h3>
                        <FontAwesomeIcon className="addtask__xmark" icon={faXmark} onClick={() => setCreateTask(false)}/>
                        <form onSubmit={handleSubmit}>
                            <div className="addtask__input">
                                <label htmlFor="task">Type your task: </label>
                                <input type="text" name="task" value={value} onChange={e => setValue(e.target.value)} required/>
                            </div>
                          

                            <div className="addtask__select">
                                <label htmlFor="priority">Choose priority: </label>
                                <select name="priority" id="priority" onClick={e => setPriority(e.target.value)} required>
                                    <option value=""></option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>

                            <div className="addtask__calendar">
                                <label htmlFor="calendar">Until when: </label>
                                <input type="datetime-local" value={calendar} onChange={e => setCalendar(e.target.value)} required/>
                            </div>
                            <button type="submit" className="addtask__submit">Create Task</button>
                        </form>
                    </div>
                </div> 
            : null}

        </>
    )
}

export default AddTask