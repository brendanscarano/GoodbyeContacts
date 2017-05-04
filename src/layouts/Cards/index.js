import React from 'react';
import {
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';
import SwipeCards from '../../react-native-swipe-cards/SwipeCards';
import { possibleYesBlocks, possibleDeniedBlocks } from '../../data/messages';

import NavigationBar from 'react-native-navbar';
import Card from '../../components/Card';
import Message from '../../components/Message';
import BottomNav from '../../components/BottomNav';
import styles from './styles.js';
import colors from '../../utils/colors';

export default function Cards(props) {
    const randomYes = randomNumber(possibleYesBlocks);
    const randomNo = randomNumber(possibleDeniedBlocks);

    return (
        props.loaded && !props.data.length ? <NoMoreCards onPress={props.startOverFunc} /> :
        props.data.length ?
        <View style={styles.container}>
            <NavigationBar
                title={{
                    title: "Goodbye Contacts",
                    style: {
                        fontWeight: 'bold',
                        fontSize: 18,
                    }
                }}
                style={{
                    backgroundColor: colors.background,
                }}
                containerStyle={{
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
            />
            <BottomNav
                contactsToDeleteLength={props.contactsToDeleteLength}
                currentPosition={props.currentContactPosition > props.fullContactsLength ? 'End' : `${props.currentContactPosition}/${props.fullContactsLength}`}
                navigator={props.navigator}
            />
        </View>
        : <View style={styles.loadingContainer} />
    )
}

function randomNumber(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function NoMoreCards(props) {
    console.log("props", props);
    return (
        <View style={styles.noMoreCardsWrapper}>
            <Text style={styles.noMoreContactsText}>There are no more contacts left!</Text>
            <TouchableHighlight
                onPress={props.onPress}
                style={styles.startOverButton}
                underlayColor={colors.darkGreen}
            >
                <Text style={styles.startOverText}>Back to beginning</Text>
            </TouchableHighlight>
        </View>
    )
}
