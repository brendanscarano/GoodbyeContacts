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

import Contacts from 'react-native-contacts';
import Cards from './layouts/Cards';
import DeleteContacts from './layouts/DeleteContacts';
import DeleteConfirmation from './layouts/DeleteConfirmation';

const CARDS_SCREEN = 'CARDS_SCREEN';
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';
const DELETE_CONFIRMATION = 'DELETE_CONFIRMATION';

@connect(
    state => {
        // console.log('state in connect', state)
        return ({
            loaded: state.contactsReducer.loaded,
            loading: state.contactsReducer.loading,
            contacts: state.contactsReducer.contacts,
            fullContactsLength: state.contactsReducer.fullContactsLength,
            currentContactPosition: state.contactsReducer.currentContactPosition,
            contactsToDelete: contactsToDeleteArray(state.contactsReducer),
            contactsToDeleteIDs: state.contactsReducer.contactsToDelete,
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
        if (this.props.contactsToDeleteIDs.includes(recordID)) {
            AsyncStorage.setItem('lastContactId', recordID)
        } else {
            AsyncStorage.multiSet([
                ['lastContactId', recordID],
                ['contactsToDeleteArray', JSON.stringify([...this.props.contactsToDeleteIDs, recordID])]
            ]).then(res => {
                this.props.addContactToDelete(recordID, this.props.currentContactPosition);
            });
        }
    }

    handleYup = ({ recordID }) => {
        if (this.props.contactsToDeleteIDs.includes(recordID)) {
            this.props.removeContactToBeDeleted(this.props.contactsToDelete, recordID)
        } else {
            AsyncStorage.setItem('lastContactId', recordID).then(res => {
                this.props.updateCurrentIndex(this.props.currentContactPosition);
            });
        }
    }

    startOver = () => {
        AsyncStorage.setItem('lastContactId', '0')
            .then(res => {
                RNRestart.Restart();
            });
    }

    renderScene = (route, navigator) => {
        if (route.name === CARDS_SCREEN) {
            return <Cards
                        navigator={navigator}
                        route={route}
                        loaded={this.props.loaded}
                        loading={this.props.loading}
                        currentContactPosition={this.props.currentContactPosition}
                        fullContactsLength={this.props.fullContactsLength}
                        data={this.props.contacts}
                        contactsToDeleteLength={this.props.contactsToDelete.length}
                        startOverFunc={this.startOver}

                        handleYup={this.handleYup}
                        handleNope={this.handleNope}
                        contactsToDeleteIDs={this.props.contactsToDeleteIDs}
                    />
        }
        if (route.name === DELETE_CONTACTS_SCREEN) {
            return <DeleteContacts
                        navigator={navigator}
                        route={route}
                        removeContactToBeDeleted={this.props.removeContactToBeDeleted}
                        contactsToDelete={this.props.contactsToDelete}
                        {...route.passProps}
                    />
        }
        if (route.name === DELETE_CONFIRMATION) {
            return <DeleteConfirmation
                        navigator={navigator}
                        route={route}
                        {...route.passProps}
                    />
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: CARDS_SCREEN}}
                renderScene={this.renderScene}
                configureScene={() => {return Navigator.SceneConfigs.FloatFromRight}}
            />
        )
    }
}

// ----------------------
// Selectors
// ----------------------
function contactsToDeleteArray({ allContacts, contactsToDelete }) {
    return allContacts.filter(contact => contactsToDelete.includes(contact.recordID));
}
