// ----------------------
// Constants
// ----------------------
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
const SET_CONTACTS = 'SET_CONTACTS';
const ADD_CONTACT_TO_DELETE = 'ADD_CONTACT_TO_DELETE';
const REMOVE_CONTACT_TO_BE_DELETED = 'REMOVE_CONTACT_TO_BE_DELETED';
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
                ...state,
                contactsToDelete: [...state.contactsToDelete, action.payload.contactID]
            }
        case REMOVE_CONTACT_TO_BE_DELETED:
            return {
                ...state,
                contactsToDelete: action.payload.newContactsToDelete
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
    return {
        type: SET_CONTACTS,
        payload: {
            contacts
        }
    }
}
export function addContactToDelete(contactID) {
    console.log("contactID", contactID);
    return {
        type: ADD_CONTACT_TO_DELETE,
        payload: {
            contactID
        }
    }
}
export function removeContactToBeDeleted(contactsToDelete, contactID) {
    console.log('NOT FULLY WORKING YET...!!!!')
    console.log("contactsToDelete", contactsToDelete);
    console.log("contactID", contactID);
    const newContactsToDelete = contactsToDelete.filter(contact =>
        contact.recordID !== contactID
    )

    return {
        type: REMOVE_CONTACT_TO_BE_DELETED,
        payload: {
            newContactsToDelete
        }
    }
}
