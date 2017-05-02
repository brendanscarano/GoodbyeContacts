import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    AsyncStorage,
    InteractionManager,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import List from '../components/List';
import ScrollViewList from '../components/ScrollViewList';
import Contacts from 'react-native-contacts';
import styles from './DeleteContactsStyle';
const DELETE_CONFIRMATION = 'DELETE_CONFIRMATION';

export default class DeleteContacts extends Component {
    state = {
        renderPlaceholderOnly: true,
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() =>
            this.setState({ renderPlaceholderOnly: false })
        );
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <NavigationBar
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#ccc'
                    }}
                    leftButton={{
                        title: 'Back',
                        handler: () => this.props.navigator.pop()
                    }}
                />
                <Button
                    numberOfContacts={this.props.contactsToDelete.length}
                    onPress={() => {
                        deleteContacts(this.props.contactsToDelete)

                        this.props.navigator.push({
                            name: DELETE_CONFIRMATION,
                            passProps: {
                                numContactsDeleted: this.props.contactsToDelete.length
                            }
                        })
                    }}
                />
                {this.state.renderPlaceholderOnly
                    ? <View><Text>Loading</Text></View>
                    : <ScrollViewList
                            data={this.props.contactsToDelete}
                            removeContactToBeDelete={this.props.removeContactToBeDelete}
                        />
                }
            </View>
        )
    }
}

function deleteContacts(contacts) {
    console.log("contacts", contacts);
    AsyncStorage.multiSet([
        ['contactsToDeleteArray', JSON.stringify([])]
    ]).then(res => {
        contacts.forEach(contact => {
            console.log("contact", contact);

            Contacts.deleteContact(
                { recordID: contact.recordID },
                err => console.log(err)
            )

        })
    });
}

function Button(props) {
    const text = props.numberOfContacts === 1 ? 'Contact' : 'Contacts';
    return (
        <TouchableHighlight
            style={styles.buttonWrapper}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText}>{`Permenantly Delete ${props.numberOfContacts} ${text}`}</Text>
        </TouchableHighlight>
    )
}
