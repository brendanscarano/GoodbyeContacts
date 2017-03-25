import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import Emoji from 'react-native-emoji';
import { possibleYesBlocks, possibleDeniedBlocks } from '../../data/messages';
console.log("possibleYesBlocks", possibleYesBlocks);
console.log("possibleDeniedBlocks", possibleDeniedBlocks);

export default function Message(props) {
    const messageToRender = props.wasApproved
        ? randomNumber(possibleYesBlocks)
        : randomNumber(possibleDeniedBlocks);

    return (
        <View >
            <Text>{messageToRender.text}</Text>
            <Text style={{fontSize: 50}}><Emoji name={messageToRender.emoji}/></Text>
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
