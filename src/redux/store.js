import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import apiMiddleware from './apiMiddleware';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(apiMiddleware)
    );
}
