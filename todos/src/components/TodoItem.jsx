
const Todo = (props) => {
    return ( 
        <>
        <div className="container m-2">
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={() => props.onDelete(props.todo)} >Delete</button>
        </div>
        <hr/>
        </>
     );
}
 
export default Todo;