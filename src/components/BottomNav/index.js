import React from 'react';
import { View, Text, TouchableHighlight, AsyncStorage } from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';
import RNRestart from 'react-native-restart';
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomBar(props) {
    const restartList = () => {
        AsyncStorage.setItem('lastContactId', '0')
            .then(res => {
                RNRestart.Restart();
            });
    }

    const navigateToDeleteScreen = () => {
        props.navigator.push({
            name: DELETE_CONTACTS_SCREEN
        })
    }
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.startOverButton}
                onPress={restartList}
                underlayColor={colors.darkGreen}
            >
                <Text style={styles.startOverText}>Start Over</Text>
            </TouchableHighlight>

            <View style={styles.halfCircle}>
                <Text style={styles.halfCircleText}>{props.currentPosition}</Text>
            </View>

            <TouchableHighlight
                style={props.contactsToDeleteLength ? styles.deleteButton : styles.deleteButtonNotClickable}
                onPress={props.contactsToDeleteLength ? navigateToDeleteScreen : () => null}
                underlayColor={colors.lightBlue}
            >
                <View style={styles.deleteButtonTextWrapper}>
                    <Text style={styles.deleteButtonText}>
                        {`Delete ${props.contactsToDeleteLength}`}
                    </Text>
                    <Icon name="angle-right" style={styles.icon} size={20} color={colors.red} />
                </View>
            </TouchableHighlight>
        </View>
    )
}
