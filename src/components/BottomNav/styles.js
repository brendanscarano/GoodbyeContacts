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
    },
    startOverButton: {
        marginTop: 15,
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
        marginTop: 15,
        backgroundColor: colors.lightBlue,
        borderColor: colors.lightBlue,
        borderWidth: 10,
        borderRadius: 64,
        height: 30,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonTextWrapper: {
        flexDirection: 'row',
    },
    deleteButtonText: {
        color: colors.red,
        fontWeight: 'bold',
        fontSize: 16,
    },
    halfCircle: {
        backgroundColor: colors.blue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 80,
        borderBottomLeftRadius:34,
        borderBottomRightRadius:34,
    },
    halfCircleText: {
        color: colors.white,
        fontWeight: 'bold',
        margin: 2,
        fontSize: 16,
    },
    icon: {
        marginLeft: 6,
    }
})
