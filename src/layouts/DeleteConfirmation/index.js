import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import Emoji from 'react-native-emoji';
import RNRestart from 'react-native-restart';
import styles from './styles';

export default function DeleteContacts(props) {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <View style={styles.emojiWrapper}>
                    <Text style={styles.emojiText}>
                        <Emoji name="wave"/>
                    </Text>
                    <Text style={styles.emojiText}>
                        <Emoji name="bust_in_silhouette" />
                    </Text>
                </View>

                <Text style={styles.text}>
                    {`You deleted ${props.numContactsDeleted} contacts from your phone!`}
                </Text>
            </View>

            <TouchableHighlight
                style={styles.buttonWrapper}
                onPress={() => RNRestart.Restart()}
            >
                <Text style={styles.buttonText}>Back to swiping</Text>
            </TouchableHighlight>
        </View>
    )
}
