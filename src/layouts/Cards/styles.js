import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingFont: {
        fontSize: 24,
    },
    noMoreContactsText: {
        color: colors.gray[5],
        fontSize: 18,
    },
    startOverButton: {
        marginBottom: 24,
        backgroundColor: colors.green,
        borderColor: colors.green,
        borderWidth: 1,
        borderRadius: 64,
        height: 50,
        width: 200,
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
    noMoreCardsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

