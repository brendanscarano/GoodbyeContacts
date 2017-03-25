import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';
import SwipeCards from '../react-native-swipe-cards/SwipeCards';
import NavigationBar from 'react-native-navbar';
import Card from '../components/Card';
import Message from '../components/Message';
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';

export default class Cards extends Component {
    state = {
        contactsToDelete: []
    }

    // componentDidMount() {
    //     console.log('this.props', this.props);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("nextState", nextState);
    //     if(this.state.contactsToDelete.length !== nextState.contactsToDelete.length) {
    //         return false;
    //     }

    //     return true;
    // }

    handleNope = (card) => this.setState({ contactsToDelete: [...this.state.contactsToDelete, card] })

    render() {
        // console.log('this.props in render', this.props)
        return (
            this.props.data.length ?
            <View style={styles.container}>
                <NavigationBar
                    title={{title: 'Contacts'}}
                    rightButton={{
                        title: `Delete ${this.state.contactsToDelete.length}`,
                        handler: () =>
                            this.props.navigator.push({
                                name: DELETE_CONTACTS_SCREEN,
                                passProps: {
                                    contactsToDelete: this.state.contactsToDelete
                                }
                            })
                    }}
                />
                <SwipeCards
                    cards={this.props.data}
                    renderCard={cardData => <Card {...cardData} />}
                    renderNoMoreCards={() => <NoMoreCards />}
                    handleYup={this.handleYup}
                    handleNope={cardData => this.handleNope(cardData)}
                    yupView={<Message wasApproved />}
                    noView={<Message />}
                />
            </View>
            : <Loading />
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
        borderWidth: 2,
        borderColor: 'red',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
