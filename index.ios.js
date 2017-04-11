import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import configureStore from './src/redux/store';
const store = configureStore();
import { Provider } from 'react-redux';

export default class GoodbyeContacts extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('GoodbyeContacts', () => GoodbyeContacts);
