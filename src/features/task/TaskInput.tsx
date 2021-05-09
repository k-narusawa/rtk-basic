import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {newTask} from "./taskSlice"

export const TaskInput = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>("")

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e:any) => {
        e.preventDefault()
        dispatch(newTask(title))
        setTitle("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleTitleChange} placeholder="Please type in"></input>
                <button>NEW</button>
            </form>
        </>
    )
}
