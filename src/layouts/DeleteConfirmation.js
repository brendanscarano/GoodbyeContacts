import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import Emoji from 'react-native-emoji';
import RNRestart from 'react-native-restart';

export default function DeleteContacts(props) {
    return (
        <View style={styles.container}>
            <View style={styles.emojiWrapper}>
                <Emoji name="wave" />
                <Emoji name="bust_in_silhouette" />
            </View>
            <Text>{`You deleted ${props.numContactsDeleted} contacts from your phone!`}</Text>
            <TouchableHighlight
                style={styles.buttonWrapper}
                onPress={() => RNRestart.Restart()}
            >
                <Text>Back to swiping!</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emojiWrapper: {
        flexDirection: 'row'
    },
    buttonWrapper: {
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderColor: '#f3f3f3',
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

