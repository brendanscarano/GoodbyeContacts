import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import RNRestart from 'react-native-restart';
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';

export default function BottomBar(props) {
    const restartList = () => RNRestart.Restart()
    const navigateToDeleteScreen = () => {
        props.navigator.push({
            name: DELETE_CONTACTS_SCREEN
        })
    }
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.button, styles.startOverButton}
                onPress={restartList}
            >
                <Text style={styles.startOverText}>Start Over</Text>
            </TouchableHighlight>

            <Text>{props.currentPosition}</Text>

            <TouchableHighlight
                style={styles.deleteButton}
                onPress={navigateToDeleteScreen}
            >
                <Text style={styles.deleteButtonText}>{`Delete ${props.contactsToDeleteLength}`}</Text>
            </TouchableHighlight>
        </View>
    )
}


// rightButton={{
//                     title: `Delete ${props.contactsToDeleteLength}`,
//                     handler: () =>
//                         props.navigator.push({
//                             name: DELETE_CONTACTS_SCREEN
//                         })
//                 }}
//                 leftButton={{
//                     title: 'Start Over',
//                     handler: props.startOverFunc
//                 }}
