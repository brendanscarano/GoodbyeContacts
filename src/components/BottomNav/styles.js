import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: 'red',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        paddingTop: 10,
    },
    startOverButton: {
        backgroundColor: colors.green,
        borderColor: colors.green,
        borderWidth: 10,
        borderRadius: 64,
        height: 30,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startOverText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: colors.background,
        borderColor: colors.background,
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
    }
})
