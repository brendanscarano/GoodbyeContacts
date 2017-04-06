import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Navigator
} from 'react-native';
import Contacts from 'react-native-contacts';
import Cards from './layouts/Cards';
import DeleteContacts from './layouts/DeleteContacts';

const CARDS_SCREEN = 'CARDS_SCREEN';
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';

export default class App extends Component {
    state = {
        contacts: [],
        contactsToDelete: [],
    }

    componentDidMount() {
        Contacts.getAll((err, contacts) => {
            if(err && err.type === 'permissionDenied'){
                // x.x
            } else {
                this.setState({ contacts })
            }
        })
    }

    handleNope = (card) => {
        console.log('handling nope...')
        return this.setState({
            contactsToDelete: [...this.state.contactsToDelete, card]
        })
    }

    handleYup = () => {
        console.log('handling yup...')
        this.forceUpdate();
    }

    removeContactToBeDelete = (contactToRemove) => {
        const contactsToDelete = this.state.contactsToDelete.filter(contact =>
            contact.recordID !== contactToRemove.recordID
        )

        this.setState({ contactsToDelete });
    }

    renderScene = (route, navigator) => {
        if (route.name === CARDS_SCREEN) {
            return <Cards
                        navigator={navigator}
                        route={route}
                        data={this.state.contacts}
                        contactsToDelete={this.state.contactsToDelete}
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
