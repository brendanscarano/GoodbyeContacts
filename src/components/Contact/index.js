import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function Contact(props) {
    console.log("props", props);
    const { givenName, familyName, recordID } = props.item;
    const fullName = `${givenName} ${familyName || ''}`;

    return (
        <View style={styles.contact} key={recordID}>
            <Text style={styles.name}>{fullName}</Text>
            <TouchableHighlight
                style={styles.cancel}
                onPress={() => console.log('testing')}
            >
                <Text>X</Text>
            </TouchableHighlight>
        </View>
    )
}

function removeContact() {
    console.log('removing contact from delete...')
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
})


