import { GET_CONTACTS, LOAD_CONTACTS, FAIL_CONTACTS, GET_CONTACT } from "./../actionsTypes/contact";

import axios from "axios";

// get contacts
export const getContacts = () => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
        let result = await axios.get("/api/contacts");
        dispatch({ type: GET_CONTACTS, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
export const getContact = (id) => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
        let result = await axios.get(`/api/contacts/${id}`);
        dispatch({ type: GET_CONTACT, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};

// add contact
export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post("/api/contacts/", newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
// delete Contact
export const deletContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contacts/dele/${id}`);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
