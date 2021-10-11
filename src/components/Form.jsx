import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {AddTodo} from '../redux/todos/todoSlice'
import {nanoid} from '@reduxjs/toolkit'

function Form() {
    const dispatch=useDispatch();
    const [title, settitle] = useState('')
    const HandleSubmit=(e)=>{
        e.preventDefault();
        dispatch(AddTodo({id:nanoid(),title,completed:false}))
        settitle('')

    }
    return (
        <form onSubmit={HandleSubmit}>
        <input className="new-todo" placeholder="Yeni görev " autoFocus value={title} onChange={(e)=>settitle(e.target.value)}/>
    </form>
    )
}

export default Form
