import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import Emoji from 'react-native-emoji';
import { possibleYesBlocks, possibleDeniedBlocks } from '../../data/messages';

export default function Message(props) {
    // console.log("props", props);
    return (
        <View>
            <Text>{props.messageObject.text}</Text>
            <Text style={{fontSize: 50}}>
                <Emoji name={props.messageObject.emoji}/>
            </Text>
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
