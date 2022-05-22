import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getContact } from "../redux/actions/contact";


function Edit() {
    const params = useParams();
    const dispatch = useDispatch();
    const [newedit, setNewEdit] = useState({});
    const contact = useSelector((state) => state.contactReducer.FoundContact);

    const handlechange = (e) => {
        setNewEdit({ ...newedit, [e.target.name]: e.target.value });
    };
    
    useEffect(() => {
        dispatch(getContact(params.id));
    }, [dispatch]);

    return (
        <div>
            <form>
                <div
                    className="form-group"
                    style={{
                        flexDirection: "row",
                        paddingTop: "2%",
                        paddingBottom: "2%",
                    }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder={`${contact.name}`}
                        onChange={handlechange}
                    />
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        placeholder={`${contact.email}`}
                        onChange={handlechange}
                    />
                    <label>Age:</label>
                    <input
                        type="text"
                        name="age"
                        placeholder={`${contact.age}`}
                        onChange={handlechange}
                    />
                </div>
            </form>

            <button>save</button>
        </div>
    );
}

export default Edit;
