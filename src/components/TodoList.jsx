import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {toggle} from '../redux/todos/todoSlice'


function TodoList() {
	const dispatch=useDispatch();
	const items= useSelector(state => state.todos.items);
	console.log(items)

    return (
        <div>
            <ul className="todo-list">
			{/*<li className="completed">
				<div className="view">
					<input className="toggle" type="checkbox"/>
					<label>Learn JavaScript</label>
					<button className="destroy"></button>
				</div>
	</li>*/}
	             
			{items.map(item=>(
				 <li key={item.id} className={item.completed ? 'completed':''}>
				 <div className="view">
					 <input checked={item.completed} className="toggle" type="checkbox" onChange={()=>dispatch(toggle({id:item.id}))}/>
					 <label>{item.title}</label>
					 <button className="destroy"></button>
				 </div>
			 </li>

			))}
		</ul>
            
        </div>
    )
}

export default TodoList
