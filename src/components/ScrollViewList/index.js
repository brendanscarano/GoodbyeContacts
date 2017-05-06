import React from 'react';
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
import styles from './styles';

export default function ScrollViewList(props) {
    return (
        <View style={styles.container}>
            <ScrollView>
                {props.data.map(contact => {
                    const { givenName, familyName, recordID } = contact;
                    const fullName = `${givenName} ${familyName || ''}`;

                    return (
                        <ContactToDelete
                            key={contact.recordID}
                            {...contact}
                            fullName={fullName}
                            removeContactToBeDeleted={props.removeContactToBeDeleted}
                            data={props.data}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

function ContactToDelete(props) {
    return (
        <View style={styles.contact} key={props.recordID}>
            <View style={styles.contactWrapper}>
                <ContactImage
                    iconWrapperStyles={styles.iconWrapper}
                    imageSize={50}
                    iconStyles={styles.icon}
                    hasThumbnail={props.hasThumbnail}
                    thumbnailPath={props.thumbnailPath}
                />
                <Text style={styles.name}>{props.fullName}</Text>
            </View>
            <TouchableHighlight
                onPress={() => {
                    props.removeContactToBeDeleted(props.data, props.recordID)
                }}
                style={styles.closeIcon}
                underlayColor={colors.background}
            >
                <Icon name="close" size={28} color={colors.gray[5]} />
            </TouchableHighlight>
        </View>
    )
}
