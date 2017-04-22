import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import List from '../components/List';
import Contacts from 'react-native-contacts';
import Contact from '../components/Contact';
import RNRestart from 'react-native-restart';

export default function DeleteContacts(props) {
    return (
        <View style={styles.container}>
            <NavigationBar
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc'
                }}
                leftButton={{
                    title: 'Back',
                    handler: () => props.navigator.pop()
                }}
            />
            <Button
                numberOfContacts={props.contactsToDelete.length}
                onPress={() => deleteContacts(props.contactsToDelete)}
            />
            <List
                data={props.contactsToDelete}
                listItemToRender={Contact}
                parentData={props}
                removeContactToBeDelete={props.removeContactToBeDelete}
            />
        </View>
    )
}

function deleteContacts(contacts) {
    console.log("contacts", contacts);
    contacts.forEach(contact => {
        console.log("contact", contact);

        Contacts.deleteContact(
            { recordID: contact.recordID },
            err => console.log(err)
        )

    })


    // AsyncStorage.multiSet([
    //     ['lastContactId', ''],
    //     ['contactsToDeleteArray', []]
    // ]).then(res => {
    // });
        // RNRestart.Restart();

}

function Button(props) {
    const text = props.numberOfContacts === 1 ? 'Contact' : 'Contacts';
    return (
        <TouchableHighlight
            style={styles.buttonWrapper}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText}>{`Delete ${props.numberOfContacts} ${text}`}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        backgroundColor: '#fff',
    },
    buttonWrapper: {
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red',
        height: 40,
        borderRadius: 5,
        marginVertical: 20,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
})

