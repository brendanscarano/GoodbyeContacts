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
        contacts: []
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

    renderScene = (route, navigator) => {
        if (route.name === CARDS_SCREEN) {
            return <Cards
                        navigator={navigator}
                        route={route}
                        data={this.state.contacts}
                    />
        }
        if (route.name === DELETE_CONTACTS_SCREEN) {
            return <DeleteContacts
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
