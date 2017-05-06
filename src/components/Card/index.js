import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import colors from '../../utils/colors';
import ContactImage from '../ContactImage'

export default function Card(props) {
    const fullName = `${props.givenName} ${props.familyName || ''}`;

    return (
        <View style={styles.card}>
            <ContactImage
                hasThumbnail={props.hasThumbnail}
                thumbnailPath={props.thumbnailPath}
            />
            <Text style={styles.name}>{fullName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 280,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.white,
        backgroundColor: colors.white,
        shadowColor: '#999',
        shadowOffset: {width: 3, height: 2},
        shadowOpacity: 1.0,
        shadowRadius: 2,
    },
    name: {
        fontSize: 42,
        textAlign: 'center',
        color: colors.blue,
    },
})
