import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {changeActiveFilter,clearFiltered,selectTodos} from '../redux/todos/todoSlice'

function ContentFooter() {
    const items = useSelector(selectTodos);
   
    
    const itemLeft=items.filter(item=>!item.completed).length;
    const dispatch=useDispatch()
    const activeFilter = useSelector(state => state.todos.activeFilter);
    
    return (
        
<footer className="footer">


<span className="todo-count">
    <strong>{itemLeft +" "}</strong>
    item{itemLeft >1 && 's'} left
</span>

<ul className="filters">
    <li>
        <a href="#/" className={activeFilter ==='all' ? "selected":""} onClick={()=>dispatch(changeActiveFilter('all'))}>All</a>
    </li>
    <li>
        <a href="#/" className={activeFilter ==='active' ? "selected":""} onClick={()=>dispatch(changeActiveFilter('active'))}>Active</a>
    </li>
    <li>
        <a href="#/" className={activeFilter ==='completed' ? "selected":""} onClick={()=>dispatch(changeActiveFilter('completed'))}>Completed</a>
    </li>
</ul>


<button className="clear-completed" onClick={()=>dispatch(clearFiltered())}>
    Clear completed
</button>
</footer>
      
    )
}

export default ContentFooter
