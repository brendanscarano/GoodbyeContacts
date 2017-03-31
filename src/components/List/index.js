import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import styles from './styles';

export default class List extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        })

        this.state = {
            data: [],
            dataSource: ds.cloneWithRows(props.data)
        }
    }

    componentWillUpdate(nextProps) {
        if (this.state.data.length !== nextProps.data.length) {
            this.setState({
                data: nextProps.data,
                dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
            })
        }
    }

    renderRow = (item) => {
        const Component = this.props.listItemToRender;
        return (
            <Component
                {...this.props.parentData}
                item={item}
                navigator={this.props.navigator}
                route={this.props.route}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                />
            </View>
        )
    }
}
