import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emojiWrapper: {
        flexDirection: 'row'
    },
    emojiText: {
        fontSize: 48,
    },
    text: {
        paddingHorizontal: 36,
        marginTop: 6,
        textAlign: 'center',
        fontSize: 16,
    },
    buttonWrapper: {
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
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
})

