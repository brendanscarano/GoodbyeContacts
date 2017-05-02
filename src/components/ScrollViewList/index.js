import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ListView,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContactImage from '../ContactImage';
import colors from '../../utils/colors';

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
                            <View style={styles.contactWrapper}>
                                <ContactImage
                                    iconWrapperStyles={styles.iconWrapper}
                                    iconSize={30}
                                    iconStyles={styles.icon}
                                />
                                <Text style={styles.name}>{fullName}</Text>
                            </View>
                            <TouchableHighlight
                                onPress={() => {
                                    props.removeContactToBeDelete(props.data, contact.recordID)
                                }}
                                style={styles.closeIcon}
                                underlayColor={colors.background}
                            >
                                <Icon name="close" size={28} color={colors.gray[5]} />
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
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contactWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        marginLeft: 10,
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 50/2,
    },
    closeIcon: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginTop: 4,
    },
})
