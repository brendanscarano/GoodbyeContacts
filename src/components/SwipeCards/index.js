import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SwipeCards from '../../react-native-swipe-cards/SwipeCards';
import Card from '../Card';
import Message from '../Message';

export default class SwipeCardsWrapper extends Component {
    state={
        randomYes: {},
        randomNo: {}
    }

    componentWillMount() {
        console.log('component did mount', this.props)
        const { randomYes, randomNo } = this.props;

        this.setState({
            randomYes,
            randomNo,
        })
    }

    componentWillReceiveProps(nextProps) {
        // console.log('this.state', this.state)
        // console.log("component will recieve props nextProps", nextProps);
        const { randomYes, randomNo } = nextProps;

        this.setState({
            randomYes,
            randomNo,
        })

        // return false;

    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log('this.state', this.state)
        // console.log("nextProps", nextProps);
        return true;
    }

    render() {
        return (
            <SwipeCards
                cards={this.props.data}
                renderCard={cardData => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                handleNope={this.props.handleNope}
                yupView={<Message wasApproved messageObject={this.state.randomYes} />}
                noView={<Message messageObject={this.state.randomNo} />}
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
