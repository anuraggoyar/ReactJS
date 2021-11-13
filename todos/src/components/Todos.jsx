import React from 'react';
import TodoItem from './TodoItem';
const Todos = ({ todos, onDelete }) => {
    let style = {
        minHeight : "70vh",
        margin : '50px auto'
    }

    return ( 
        <div style={style} className="container">
            <h3 className="my-3">ToDo List</h3>
            {todos.length > 0  ? todos.map(todo => <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />) : <h5>No Todos To Display.</h5> }  
        </div>
     );
}
 
export default Todos;