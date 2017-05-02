import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Card(props) {
    console.log("props", props);
    const fullName = `${props.givenName} ${props.familyName || ''}`;

    return (
        <View style={styles.card}>
            <View style={styles.iconWrapper}>
                <Icon
                    name="user"
                    color={colors.gray[0]}
                    size={60}
                    style={styles.icon}
                />
            </View>
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
        borderColor: colors.purple,
        backgroundColor: colors.purple,
        shadowColor: '#999',
        shadowOffset: {width: 3, height: 2},
        shadowOpacity: 1.0,
        shadowRadius: 2,
    },
    name: {
        fontSize: 42,
        textAlign: 'center',
        color: colors.white,
    },
    iconWrapper: {
        width: 80,
        height: 80,
        borderRadius: 100/2,
        backgroundColor: colors.gray[1],
    },
    icon: {
        backgroundColor: colors.gray[1],
        marginTop: 10,
        alignSelf: 'center',
    }
})
