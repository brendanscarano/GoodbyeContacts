import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Navigator,
    AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchContacts } from './redux/module';

import Contacts from 'react-native-contacts';
import Cards from './layouts/Cards';
import DeleteContacts from './layouts/DeleteContacts';

const CARDS_SCREEN = 'CARDS_SCREEN';
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';

@connect(
    state => ({
        contacts: state.contactsReducer.contacts
    }), {
        fetchContacts,
        // fetchSuggestions,
        // fetchCartDetails,
        // updateActiveCategory
    }
)
export default class App extends Component {
    state = {
        contactsToDelete: [],
    }

    componentWillMount() {
        this.props.fetchContacts();
        // Contacts.getAll((err, contacts) => {
        //     if(err && err.type === 'permissionDenied'){
        //         // x.x
        //     } else {
        //         console.log("contacts", contacts);

        //         AsyncStorage.getItem('lastContactId').then(res => {

        //             const lastContactSeenIndex = contacts.findIndex(contact => contact.recordID === res);

        //             this.setState({ contacts, lastContactSeenIndex })
        //         });
        //     }
        // })
    }

    handleNope = (contact) => {
        console.log("contact", contact.recordID);
        console.log("contact", typeof contact.recordID);
        // AsyncStorage.setItem('lastContactId', contact.recordID).then(res => {
        //     this.setState({
        //         contactsToDelete: [...this.state.contactsToDelete, contact]
        //     })
        // });
    }

    handleYup = (contact) => {
        // AsyncStorage.setItem('lastContactId', contact.recordID).then(res => {
        //     this.forceUpdate();
        // });
    }

    removeContactToBeDelete = (contactToRemove) => {
        const contactsToDelete = this.state.contactsToDelete.filter(contact =>
            contact.recordID !== contactToRemove.recordID
        )

        this.setState({ contactsToDelete });
    }

    startOver = () => {
        console.log('resetting state...')
        // AsyncStorage.setItem('lastContactId', '-1').then(res => {
        //     this.setState({ lastContactSeenID: '-1'})
        // });
    }

    renderScene = (route, navigator) => {
        if (route.name === CARDS_SCREEN) {
            return <Cards
                        navigator={navigator}
                        route={route}
                        fullContactsLength={this.props.contacts.length}
                        data={this.props.contacts}
                        contactsToDeleteLength={this.state.contactsToDelete.length}
                        startOverFunc={this.startOver}

                        handleYup={this.handleYup}
                        handleNope={this.handleNope}
                    />
        }
        if (route.name === DELETE_CONTACTS_SCREEN) {
            return <DeleteContacts
                        navigator={navigator}
                        route={route}
                        removeContactToBeDelete={this.removeContactToBeDelete}
                        contactsToDelete={this.state.contactsToDelete}
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
