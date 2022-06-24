import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
           <h4>{todo.name}</h4>
           <h4>{todo.email}</h4>
           <h4>{todo.role}</h4>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
