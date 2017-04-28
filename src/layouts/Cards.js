import React from 'react';
import {
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';
import SwipeCards from '../react-native-swipe-cards/SwipeCards';
import { possibleYesBlocks, possibleDeniedBlocks } from '../data/messages';

import NavigationBar from 'react-native-navbar';
import Card from '../components/Card';
import Message from '../components/Message';
import BottomNav from '../components/BottomNav';
import styles from './CardsStyle.js';
import colors from '../utils/colors';

export default function Cards(props) {
    const randomYes = randomNumber(possibleYesBlocks);
    const randomNo = randomNumber(possibleDeniedBlocks);

    return (
        props.loaded && !props.data.length ? <NoMoreCards onPress={props.startOverFunc} /> :
        props.data.length ?
        <View style={styles.container}>
            <NavigationBar
                title={{title: "GoodbyeContacts"}}
                style={{
                    backgroundColor: colors.background,
                }}
            />
            <SwipeCards
                cards={props.data}
                renderCard={cardData => <Card {...cardData} />}
                handleYup={cardData => props.handleYup(cardData)}
                handleNope={cardData => props.handleNope(cardData)}
                renderNoMoreCards={() => <NoMoreCards onPress={props.startOverFunc} />}
                randomYes={randomYes}
                randomNo={randomNo}
                yupView={<Message wasApproved messageObject={randomYes} />}
                noView={<Message messageObject={randomNo} />}
                yupStyle={{
                    position: 'absolute',
                    top: 0,
                }}
                smoothTranisition
            />
            <BottomNav
                contactsToDeleteLength={props.contactsToDeleteLength}
                currentPosition={props.currentContactPosition > props.fullContactsLength ? '' : `${props.currentContactPosition}/${props.fullContactsLength}`}
                navigator={props.navigator}
            />
        </View>
        : <Loading />
    )
}

function randomNumber(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function Loading() {
    return (
        <View style={styles.innerContainer}>
            <Text>Loading contacts...so they can be destroyed!</Text>
            <ActivityIndicator />
        </View>
    )
}

function NoMoreCards(props) {
    console.log("props", props);
    return (
        <View style={styles.innerContainer}>
            <Text>There are no more contacts left, Goodbye!</Text>
            <TouchableHighlight
                onPress={props.onPress}
                style={styles.startOver}
            >
                <Text>Start Over</Text>
            </TouchableHighlight>
        </View>
    )
}
