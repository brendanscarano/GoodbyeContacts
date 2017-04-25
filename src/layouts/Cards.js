import React from 'react';
import {
    StyleSheet,
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
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';

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
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc'
                }}
                rightButton={{
                    title: `Delete ${props.contactsToDeleteLength}`,
                    handler: () =>
                        props.navigator.push({
                            name: DELETE_CONTACTS_SCREEN
                        })
                }}
                leftButton={{
                    title: 'Start Over',
                    handler: props.startOverFunc
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
                currentPosition={props.currentContactPosition > props.fullContactsLength ? '' : `${props.currentContactPosition}/${props.fullContactsLength}`}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        backgroundColor: '#fff',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'blue',
    },
    startOver: {
        borderWidth: 2,
        borderColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
    }
})

