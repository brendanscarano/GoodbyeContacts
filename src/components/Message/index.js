import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Emoji from 'react-native-emoji';
import { possibleYesBlocks, possibleDeniedBlocks } from '../../data/messages';
import colors from '../../utils/colors';

export default function Message(props) {
    // console.log("props", props);
    return (
        <View style={styles.messageWrapper}>
            <Text style={{fontSize: 50}}>
                <Emoji name={props.messageObject.emoji}/>
            </Text>
            <Text style={styles.text}>{props.messageObject.text}</Text>
        </View>
    )
}

Message.propTypes = {
    /** Whether the message is rendering for a denied contact */
    wasApproved: PropTypes.bool,
}

Message.defaultProps = {
    wasApproved: false,
}

function randomNumber(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const styles = StyleSheet.create({
    messageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        marginLeft: 6,
        color: colors.gray[5],
    }
})
