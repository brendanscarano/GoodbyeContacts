// ----------------------
// Constants
// ----------------------
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
const SET_CONTACTS = 'SET_CONTACTS';
const ADD_CONTACT_TO_DELETE = 'ADD_CONTACT_TO_DELETE';
const REMOVE_CONTACT_TO_BE_DELETED = 'REMOVE_CONTACT_TO_BE_DELETED';
const UPDATE_CURRENT_INDEX = 'UPDATE_CURRENT_INDEX';
const START_OVER = 'START_OVER';

const initialState = {
    contacts: [],
    fullContactsLength: 0,
    currentContactPosition: 0,
    contactsToDelete: [],
    currentContactRecordID: '',
}

// ----------------------
// Reducer
// ----------------------
export default function contactsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CONTACTS:
            const { fullContactsLength, contacts, currentContactPosition } = action.payload;

            return {
                ...state,
                fullContactsLength,
                contacts,
                currentContactPosition
            }
        case ADD_CONTACT_TO_DELETE:
            return {
                ...state,
                contactsToDelete: [...state.contactsToDelete, action.payload.contactID],
                currentContactPosition: ++action.payload.currentContactPosition
            }
        case UPDATE_CURRENT_INDEX:
            return {
                ...state,
                currentContactPosition: ++action.payload.currentContactPosition
            }
        case REMOVE_CONTACT_TO_BE_DELETED:
            return {
                ...state,
                contactsToDelete: action.payload.newContactIDsToDelete
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
export function setContacts(data) {
    const { contacts, fullContactsLength, currentContactPosition } = data;

    return {
        type: SET_CONTACTS,
        payload: {
            contacts,
            currentContactPosition,
            fullContactsLength
        }
    }
}
export function addContactToDelete(contactID, currentContactPosition) {
    return {
        type: ADD_CONTACT_TO_DELETE,
        payload: {
            contactID,
            currentContactPosition
        }
    }
}
export function updateCurrentIndex(currentContactPosition) {
    return {
        type: UPDATE_CURRENT_INDEX,
        payload: {
            currentContactPosition
        }
    }
}
export function removeContactToBeDeleted(contactsToDelete, contactID) {
    const newContactIDsToDelete = contactsToDelete
        .map(contact => contact.recordID)
        .filter(recordID => recordID !== contactID)

    return {
        type: REMOVE_CONTACT_TO_BE_DELETED,
        payload: {
            newContactIDsToDelete
        }
    }
}
