// ----------------------
// Constants
// ----------------------
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
const SET_CONTACTS = 'SET_CONTACTS';
const ADD_CONTACT_TO_DELETE = 'ADD_CONTACT_TO_DELETE';
const START_OVER = 'START_OVER';

const initialState = {
    contacts: [],
    contactsToDelete: [],
    currentContactRecordID: '',
}

// ----------------------
// Reducer
// ----------------------
export default function contactsReducer(state = initialState, action) {
    console.log("action", action);
    switch(action.type) {
        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload.contacts
            }
        case ADD_CONTACT_TO_DELETE:
            return {
                ...state
            }
        case START_OVER:
            return {
                ...state
            }
        default:
            return state;
    }
}


// ----------------------
// Actions
// ----------------------
export function fetchContacts() {
    return {
        type: FETCH_CONTACTS
    }
}
export function setContacts(contacts) {
    console.log('contacts in set contacts', contacts)
    return {
        type: SET_CONTACTS,
        payload: {
            contacts
        }
    }
}
