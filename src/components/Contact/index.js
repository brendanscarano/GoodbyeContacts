import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

/**

    props.removeContactToBeDeleted also has to remove
    the contact from asyncStorage as well!!!




    CONTACT INFORMATION IS NOT UPDATING PROPERLY WHEN NEW PROPS ARE PASSED DOWN!!!
*/


export default function Contact(props) {
    console.log("contact props", props);
    const { givenName, familyName, recordID } = props.item;
    const fullName = `${givenName} ${familyName || ''}`;

    return (
        <View style={styles.contact} key={recordID}>
            <Text style={styles.name}>{fullName}</Text>
            <TouchableHighlight
                style={styles.cancel}
                onPress={() => props.removeContactToBeDelete(props.contactsToDelete, props.item.recordID)}
            >
                <Text style={styles.icon}>X</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    contact: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 16,
    },
    icon: {
        width: 32,
        height: 32,
        fontWeight: 'bold',
    }
})


