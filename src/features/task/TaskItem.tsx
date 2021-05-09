import React from 'react'
import {useDispatch} from "react-redux"
import {completeTask,deleteTask, Task} from "./taskSlice"


interface ownProps {
    task: Task
}
type PROPS = ownProps
export const TaskItem:React.FC<PROPS> = (props: PROPS) => {
    const dispatch = useDispatch()

    return (
        <>
            <input type="checkbox" onClick={()=>dispatch(completeTask(props.task))} defaultChecked={props.task.completed} />
            <span>{props.task.title}</span>
            <button onClick={() => dispatch(deleteTask(props.task))}>DELETE</button>
        </>
    )
}
