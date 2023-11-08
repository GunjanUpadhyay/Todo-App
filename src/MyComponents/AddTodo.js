import React, { useState } from "react";

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");

    
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description cannot be blank")
        }else{
        props.addTodo(title,desc);
        setTitle("");
        setdesc("");
        }
    }

  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
           Todo Description
          </label>
          <input
          value={desc}
          onChange={(e)=>{setdesc(e.target.value)}}
            type="text"
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
        Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
