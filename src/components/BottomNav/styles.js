import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBlue,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 70,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        paddingTop: 10,
    },
    startOverButton: {
        backgroundColor: colors.green,
        borderColor: colors.green,
        borderWidth: 1,
        borderRadius: 64,
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#999',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 1.0,
        shadowRadius: 1,
    },
    startOverText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: colors.lightBlue,
        borderColor: colors.lightBlue,
        borderWidth: 10,
        borderRadius: 64,
        height: 30,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonText: {
        color: colors.red,
        fontWeight: 'bold',
        fontSize: 16,
    },
    halfCircle: {
        backgroundColor: colors.blue,
        // borderRightWidth: 6,
        // borderLeftWidth: 6,
        // borderBottomWidth: 6,
        // borderRightColor: 'yellow',
        // borderLeftColor: 'yellow',
        // borderBottomColor: 'yellow',
    },
    halfCircleText: {
        color: colors.white,
        fontWeight: 'bold',
        margin: 4,
        fontSize: 18,
    },
    icon: {
        marginLeft: 12,
        paddingLeft: 12,
    }
})
