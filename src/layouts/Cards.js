import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';
import SwipeCards from '../components/SwipeCards';
import { possibleYesBlocks, possibleDeniedBlocks } from '../data/messages';

import NavigationBar from 'react-native-navbar';
import Card from '../components/Card';
import Message from '../components/Message';
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';

export default function Cards(props) {
    return (
        data.length ?
        <View style={styles.container}>
            <NavigationBar
                title={{title: "GoodbyeContacts"}}
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc'
                }}
                rightButton={{
                    title: `Delete ${contactsToDelete.length}`,
                    handler: () =>
                        navigator.push({
                            name: DELETE_CONTACTS_SCREEN
                        })
                }}
            />
            <SwipeCards
                data={data}
                renderCard={cardData => <Card {...cardData} />}
                handleNope={cardData => handleNope(cardData)}
                randomYes={randomNumber(possibleYesBlocks)}
                randomNo={randomNumber(possibleDeniedBlocks)}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
