import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Navigator,
    AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import {
    fetchContacts,
    addContactToDelete,
    removeContactToBeDeleted,
    updateCurrentIndex
} from './redux/module';
import RNRestart from 'react-native-restart';
console.log("RNRestart", RNRestart);

import Contacts from 'react-native-contacts';
import Cards from './layouts/Cards';
import DeleteContacts from './layouts/DeleteContacts';

const CARDS_SCREEN = 'CARDS_SCREEN';
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';

@connect(
    state => {
        console.log('state in connect', state)
        return ({
            contacts: state.contactsReducer.contacts,
            fullContactsLength: state.contactsReducer.fullContactsLength,
            currentContactPosition: state.contactsReducer.currentContactPosition,
            contactsToDelete: contactsToDeleteArray(state.contactsReducer),
        })}, {
            fetchContacts,
            addContactToDelete,
            removeContactToBeDeleted,
            updateCurrentIndex,
        }
)
export default class App extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }

    handleNope = ({ recordID }) => {
        AsyncStorage.setItem('lastContactId', recordID).then(res => {
            this.props.addContactToDelete(recordID, this.props.currentContactPosition);
        });
    }

    handleYup = ({ recordID }) => {
        AsyncStorage.setItem('lastContactId', recordID).then(res => {
            this.props.updateCurrentIndex(this.props.currentContactPosition);
        });
    }

    startOver = () => {
        AsyncStorage.setItem('lastContactId', '0').then(res => {
            // this.props.fetchContacts();
            // this.forceUpdate();
            RNRestart.Restart();
        });
    }

    renderScene = (route, navigator) => {
        if (route.name === CARDS_SCREEN) {
            return <Cards
                        navigator={navigator}
                        route={route}
                        currentContactPosition={this.props.currentContactPosition}
                        fullContactsLength={this.props.fullContactsLength}
                        data={this.props.contacts}
                        contactsToDeleteLength={this.props.contactsToDelete.length}
                        startOverFunc={this.startOver}

                        handleYup={this.handleYup}
                        handleNope={this.handleNope}
                    />
        }
        if (route.name === DELETE_CONTACTS_SCREEN) {
            return <DeleteContacts
                        navigator={navigator}
                        route={route}
                        removeContactToBeDelete={this.props.removeContactToBeDeleted}
                        contactsToDelete={this.props.contactsToDelete}
                        {...route.passProps}
                    />
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: CARDS_SCREEN}}
                renderScene={this.renderScene}
                configureScene={() => {return Navigator.SceneConfigs.PushFromRight}}
            />
        )
    }
}

// ----------------------
// Selectors
// ----------------------
function contactsToDeleteArray({ contacts, contactsToDelete }) {
    return contacts.filter(contact => contactsToDelete.includes(contact.recordID));
}
