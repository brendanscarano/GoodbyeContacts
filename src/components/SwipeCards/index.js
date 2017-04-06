import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SwipeCards from '../../react-native-swipe-cards/SwipeCards';
import Card from '../Card';
import Message from '../Message';

export default class SwipeCardsWrapper extends Component {
    render() {
        console.log('randomYes', this.props.randomYes)
        console.log('randomNo', this.props.randomNo)
        return (
            <SwipeCards
                cards={this.props.data}
                renderCard={cardData => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                handleYup={this.props.handleYup}
                handleNope={this.props.handleNope}
                randomNo={this.props.randomNo}
                randomYes={this.props.randomYes}
                yupView={<Message wasApproved messageObject={this.props.randomYes} />}
                noView={<Message messageObject={this.props.randomNo} />}
                yupStyle={{
                    position: 'absolute',
                    top: 0,
                }}
            />
        )
    }
}

function NoMoreCards() {
    return (
        <View>
            <Text>There are no more contacts left, Goodbye!</Text>
        </View>
    )
}
