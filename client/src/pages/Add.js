import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/contact";

import { Button } from "react-bootstrap";
function Add() {
    const dispatch = useDispatch();
    const [newContact, setNewContact] = useState({ name: "", email: "", phone: "" });
    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };
    const handleAdd = () => {
        dispatch(addContact(newContact));
    };
    return (
        <div>
            <h1>ADD</h1>
            <label>Name</label>
            <input type="text" placeholder="enter name here " name="name" onChange={handleChange} />
            <label>email</label>
            <input
                type="text"
                placeholder="enter email here "
                name="email"
                onChange={handleChange}
            />
            <label>phone</label>
            <input
                type="text"
                placeholder="enter phone here "
                name="phone"
                onChange={handleChange}
            />
            <Button onClick={handleAdd}>add</Button>
        </div>
    );
}

export default Add;
