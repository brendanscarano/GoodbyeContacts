import { AsyncStorage } from 'react-native';
import Contacts from 'react-native-contacts';
import {
    FETCH_CONTACTS, setContacts,
    REMOVE_CONTACT_TO_BE_DELETED, removeContactToBeDeleted
} from './module';

function fetchContacts(cb) {
    Contacts.getAll((err, contacts) => {
        if(err && err.type === 'permissionDenied'){
            // x.x
        } else {
            AsyncStorage.multiGet([
                'lastContactId', 'contactsToDeleteArray'
            ]).then(res => {
                const [lastContactRes, contactsToDeleteRes] = res;

                const lastContactSeenIndex = contacts.findIndex(contact => contact.recordID === lastContactRes[1]);

                const currentContactPosition = lastContactSeenIndex === -1 ? 1 : lastContactSeenIndex + 2;

                cb({
                    fullContactsLength: contacts.length,
                    currentContactPosition,
                    contacts: contacts.slice(lastContactSeenIndex + 1),
                    allContacts: contacts,
                    contactsToDelete: !!contactsToDeleteRes[1] ? JSON.parse(contactsToDeleteRes[1]) : [],
                });
            });
        }
    })
}

export default apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type === FETCH_CONTACTS) {
        fetchContacts(data => {
            return dispatch(setContacts(data))
        })
    }

    if (action.type === REMOVE_CONTACT_TO_BE_DELETED) {
        AsyncStorage.setItem(
            'contactsToDeleteArray', JSON.stringify(action.payload.newContactIDsToDelete))
        .then(res => {
            return;
        })
    }

    next(action);
}
