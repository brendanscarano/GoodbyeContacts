// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     TouchableHighlight,
//     ListView
// } from 'react-native';
// // import styles from './styles';

// export default class List extends Component {
//     constructor(props) {
//         super(props);
//         const ds = new ListView.DataSource({
//             rowHasChanged: (r1, r2) => r1 !== r2,
//         })
//         console.log(props)
//         this.state = {
//             data: props.data,
//             dataSource: ds.cloneWithRows(props.data)
//         }
//     }

//     renderRow = (item) => {
//         console.log("item", item);
//         const { givenName, familyName, recordID } = item;
//         const fullName = `${givenName} ${familyName || ''}`;

//         return (
//             <View style={styles.contact}>
//                 <Text style={styles.name}>{fullName}</Text>
//                 <TouchableHighlight
//                     style={styles.cancel}
//                     onPress={() => {
//                         this.props.removeContactToBeDelete(this.props.data, item.recordID)

//                         const indexToRemove = this.state.data.findIndex((element) => element.recordID === item.recordID);
//                         const newArray = this.state.data.slice();
//                         newArray.splice(indexToRemove, 1);

//                         this.setState({
//                             data: newArray,
//                             dataSource: this.state.dataSource.cloneWithRows(newArray),
//                         });

//                     }}
//                 >
//                     <Text style={styles.icon}>X</Text>
//                 </TouchableHighlight>
//             </View>

//         )
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <ListView
//                     dataSource={this.state.dataSource}
//                     renderRow={(rowData) => this.renderRow(rowData)}
//                     enableEmptySections={true}
//                 />
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     contact: {
//         padding: 20,
//         borderTopWidth: 1,
//         borderTopColor: '#ddd',
//         position: 'relative',
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     name: {
//         fontSize: 16,
//     },
//     icon: {
//         width: 48,
//         height: 48,
//         borderWidth: 2,
//         borderColor: 'green',
//         fontWeight: 'bold',
//     }
// })












// // import React, { Component } from 'react';
// // import { View, ListView } from 'react-native';
// // import styles from './styles';

// // export default class List extends Component {
// //     constructor(props) {
// //         super(props);
// //         const ds = new ListView.DataSource({
// //             rowHasChanged: (r1, r2) => r1 !== r2,
// //         })

// //         console.log('setting state in List constructor', props.data)
// //         this.state = {
// //             data: props.data,
// //             dataSource: ds.cloneWithRows(props.data)
// //         }
// //     }

// //     // componentWillUpdate(nextProps) {
// //     //     console.log("this.state.data", this.state.data);
// //     //     console.log("nextProps", nextProps);
// //     //     if (this.state.data.length !== nextProps.data.length) {
// //     //     //     console.log('setting new state in list...')
// //     //         this.setState({
// //     //             data: nextProps.data,
// //     //             dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
// //     //         })
// //     //     }
// //     // }

// //     shouldComponentUpdate(nextProps, nextState) {
// //         console.log("this.state.data", this.state.data);
// //         console.log("nextProps", nextProps);
// //         console.log("nextState", nextState);

// //         if (nextProps.data.length === 0) {
// //             console.log('set state to 0')
// //             this.setState({
// //                 data: [],
// //                 dataSource: this.state.dataSource.cloneWithRows([])
// //             })

// //             return true;
// //         }

// //         if (this.state.data.length !== nextProps.data.length) {
// //         //     console.log('setting new state in list...')
// //             this.setState({
// //                 data: nextProps.data,
// //                 dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
// //             })

// //             return true;
// //         }


// //         return false;
// //     }

// //     renderRow = (item) => {
// //         const Component = this.props.listItemToRender;

// //         console.log("item", item);
// //         console.log("this.props.parentData", this.props.parentData);
// //         return (
// //             <Component
// //                 {...this.props.parentData}
// //                 item={item}
// //                 navigator={this.props.navigator}
// //                 route={this.props.route}
// //             />
// //         )
// //     }

// //     render() {
// //         return (
// //             <View style={styles.container}>
// //                 <ListView
// //                     dataSource={this.state.dataSource}
// //                     renderRow={this.renderRow}
// //                     enableEmptySections={true}
// //                 />
// //             </View>
// //         )
// //     }
// // }
