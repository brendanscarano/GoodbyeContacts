import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ListView,
    ScrollView,
} from 'react-native';
// import styles from './styles';

export default function ScrollViewList(props) {
    console.log("props", props);
    return (
        <View style={styles.container}>
            <ScrollView>
                {props.data.map(contact => {
                    const { givenName, familyName, recordID } = contact;
                    const fullName = `${givenName} ${familyName || ''}`;

                    return (
                        <View style={styles.contact} key={contact.recordID}>
                            <Text style={styles.name}>{fullName}</Text>
                            <TouchableHighlight
                                style={styles.cancel}
                                onPress={() => {
                                    props.removeContactToBeDelete(props.data, contact.recordID)
                                }}
                            >
                                <Text style={styles.icon}>X</Text>
                            </TouchableHighlight>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        width: 48,
        height: 48,
        borderWidth: 2,
        borderColor: 'green',
        fontWeight: 'bold',
    }
})
