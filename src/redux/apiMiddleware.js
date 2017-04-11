import Contacts from 'react-native-contacts';
import { FETCH_CONTACTS, setContacts } from './module';

function fetchContacts(cb) {
    Contacts.getAll((err, contacts) => {
        if(err && err.type === 'permissionDenied'){
            // x.x
        } else {
            cb(contacts);
        }
    })
}

export default apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type === FETCH_CONTACTS) {
        fetchContacts(data => dispatch(setContacts(data)));
    }

    next(action);
}
