import React, { useState } from 'react';
import './AddTodo.css'

export const AddTodo = ({ addTodo }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!name || !email || !role) {
            alert("Name or email or role cannot be blank");
        }
        else {
            addTodo(name, email,role);
            setName("");
            setEmail("");
            setRole("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Member</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"> Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Member Role</label>
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="form-control" id="role" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Member</button>
            </form>
        </div>
    )
}
