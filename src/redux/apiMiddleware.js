import Contacts from 'react-native-contacts';
import { FETCH_CONTACTS, setContacts } from './module';

function fetchContacts(cb) {
    console.log('calling fetch CONTACTS....');
    Contacts.getAll((err, contacts) => {
        if(err && err.type === 'permissionDenied'){
            // x.x
        } else {
            console.log('success in middleware');
            cb(contacts);
            // return contacts
        }
    })
}

export default apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type === FETCH_CONTACTS) {
        console.log('its fetch contacts action!!!');
        fetchContacts(data => dispatch(setContacts(data)));
    }

    next(action);
}
