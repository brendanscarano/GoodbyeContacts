import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import NavigationBar from 'react-native-navbar';
import List from '../components/List';
import Contacts from 'react-native-contacts';
import Contact from '../components/Contact';

export default function DeleteContacts(props) {
    console.log("props", props);
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
            />
        </View>
    )
}

function deleteContacts(contacts) {
    contacts.forEach(contact => {
        Contacts.deleteContact({
            recordID: contact.recordID
        }, err => {console.log(err)});
    })

    Contacts.getAll((err, contacts) => {
      if(err && err.type === 'permissionDenied'){
        // x.x
      } else {
        console.log('contacts', contacts)
      }
    })
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
    },
    buttonWrapper: {
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red',
        height: 25,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: 'stretch',
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

