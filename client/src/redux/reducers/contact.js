import { GET_CONTACTS, LOAD_CONTACTS, FAIL_CONTACTS ,GET_CONTACT} from "./../actionsTypes/contact";

// initialeState
const initiale = {
    contactList: [],
    error: null,
    load: false,
    FoundContact:{},
};

// pure function
const contactReducer = (state = initiale, { type, payload }) => {
    switch (type) {
        case LOAD_CONTACTS:
            return { ...state, load: true };
        case GET_CONTACTS:
            return { ...state, load: false, contactList: payload.contactList };
        case GET_CONTACT:
            return { ...state, load: false, FoundContact: payload.FoundContact };

        case FAIL_CONTACTS:
            return { ...state, load: false, error: payload };

        default:
            return state;
    }
};
export default contactReducer;
