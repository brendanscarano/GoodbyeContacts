import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default function DeleteContacts(props) {
    console.log("props", props);
    return (
        <View style={styles.container}>
            <NavigationBar
                title={{title: 'Delete Contacts'}}
                leftButton={{
                    title: 'Back',
                    handler: () =>props.navigator.pop()
                }}
            />
            <Button
                numberOfContacts={props.contactsToDelete.length}
            />
            {props.contactsToDelete.map(contact => {
                const fullName = `${contact.givenName} ${contact.familyName || ''}`;
                return (
                    <View style={styles.contact} key={contact.recordID}>
                        <Text>{fullName}</Text>
                    </View>
                )
            })}
        </View>
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
    contact: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})

function Button(props) {
    const text = props.numberOfContacts === 1 ? 'Contact' : 'Contacts';
    return (
        <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>{`Delete ${props.numberOfContacts} ${text}`}</Text>
        </View>
    )
}
