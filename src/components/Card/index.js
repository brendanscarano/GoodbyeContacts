import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Card(props) {
    // console.log("props", props);
    const fullName = `${props.givenName} ${props.familyName || ''}`;

    return (
        <View style={[styles.card, {backgroundColor: props.backgroundColor}]}>
            <Text>{fullName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 100,
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
    },
})
