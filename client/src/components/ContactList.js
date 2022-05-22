import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "./../redux/actions/contact";
import ContactCard from "./ContactCard";

function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contactReducer.contactList);
    const load = useSelector((state) => state.contactReducer.load);
    useEffect(() => {
        dispatch(getContacts());
    }, []);

    return (
        <>
            <h1>contact List</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                {load ? (
                    <p>looaaading</p>
                ) : (
                    contacts?.map((el) => <ContactCard lista={el} key={el._id} />)
                )}
            </div>
        </>
    );
}

export default ContactList;
