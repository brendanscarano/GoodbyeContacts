import { AsyncStorage } from 'react-native';
import Contacts from 'react-native-contacts';
import { FETCH_CONTACTS, setContacts } from './module';

function fetchContacts(cb) {
    Contacts.getAll((err, contacts) => {
        if(err && err.type === 'permissionDenied'){
            // x.x
        } else {
            AsyncStorage.getItem('lastContactId').then(res => {

                const lastContactSeenIndex = contacts.findIndex(contact => contact.recordID === res);
                console.log("contacts", contacts);
                console.log("lastContactSeenIndex", lastContactSeenIndex);

                const currentContactPosition = lastContactSeenIndex === -1 ? 1 : lastContactSeenIndex + 2;
                cb({
                    fullContactsLength: contacts.length,
                    currentContactPosition,
                    contacts: contacts.slice(lastContactSeenIndex + 1)
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

    next(action);
}
