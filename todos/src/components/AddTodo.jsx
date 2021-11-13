import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title , setTitle ] = useState("");
    const [desc , setDesc ] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if( !title || !desc){
            alert("Title or Description can not be blank.");
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <h3>Add Todo </h3>
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            className="form-control"
            value= {title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            className="form-control"
            value= {desc}
            onChange={(e) => setDesc(e.target.value)}
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success" onSubmit={submit}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
