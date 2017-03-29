import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
const DELETE_CONTACTS_SCREEN = 'DELETE_CONTACTS_SCREEN';

export default class NavBar extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('this.props', this.props)
        console.log("nextProps", nextProps);
        console.log("nextState", nextState);
        if(this.props.contactsToDelete.length !== nextProps.contactsToDelete.length) {
            return true;
        }

        return false;
    }
    render() {
        return (
            <NavigationBar
                title={{title: 'Contacts'}}
                rightButton={{
                    title: `Delete ${this.props.contactsToDelete.length}`,
                    handler: () =>
                        this.props.navigator.push({
                            name: DELETE_CONTACTS_SCREEN,
                            passProps: {
                                contactsToDelete: this.props.contactsToDelete
                            }
                        })
                }}
            />
        )
    }
}
