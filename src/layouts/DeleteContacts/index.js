import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    AsyncStorage,
    InteractionManager,
    ActivityIndicator,
} from 'react-native';
import ScrollViewList from '../../components/ScrollViewList';
import Contacts from 'react-native-contacts';
import styles from './styles';
import colors from '../../utils/colors';
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

    goBack = () => {
        this.props.navigator.pop()
    }

    render() {
        return (
            <View style={styles.container}>
                <DeleteButton
                    numberOfContacts={this.props.contactsToDelete.length}
                    onPress={this.props.contactsToDelete.length
                        ? () => {
                            deleteContacts(this.props.contactsToDelete)

                            this.props.navigator.push({
                                name: DELETE_CONFIRMATION,
                                passProps: {
                                    numContactsDeleted: this.props.contactsToDelete.length
                            }
                            })
                        }
                    : () => null
                    }
                />
                {this.state.renderPlaceholderOnly
                    ? <View style={styles.container}>
                            <ActivityIndicator />
                        </View>
                    : <ScrollViewList
                            data={this.props.contactsToDelete}
                            removeContactToBeDeleted={this.props.removeContactToBeDeleted}
                        />
                }
                <View style={styles.bottomBar}>
                    <TouchableHighlight
                        onPress={this.goBack}
                        style={styles.backButtonWrapper}
                        underlayColor={colors.gray[5]}
                    >
                        <Text style={styles.backButtonWrapperText}>Back to Contacts</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

function deleteContacts(contacts) {
    AsyncStorage.multiSet([
        ['contactsToDeleteArray', JSON.stringify([])]
    ]).then(res => {
        contacts.forEach(contact => {
            Contacts.deleteContact(
                { recordID: contact.recordID },
                err => console.log(err)
            )

        })
    });
}

function DeleteButton(props) {
    const text = props.numberOfContacts === 1 ? 'Contact' : 'Contacts';
    return (
        <TouchableHighlight
            style={props.numberOfContacts > 0 ? styles.buttonWrapper : styles.notClickableButtonWrapper}
            onPress={props.onPress}
            underlayColor={colors.darkThunderRed}
        >
            <Text style={styles.buttonText}>{`Permenantly Delete ${props.numberOfContacts} ${text}`}</Text>
        </TouchableHighlight>
    )
}
