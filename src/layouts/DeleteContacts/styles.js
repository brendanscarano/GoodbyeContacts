import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    notClickableButtonWrapper: {
        backgroundColor: colors.red,
        borderWidth: 1,
        borderColor: colors.red,
        height: 40,
        borderRadius: 5,
        marginVertical: 20,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: .6,
    },
    buttonWrapper: {
        backgroundColor: colors.red,
        borderWidth: 1,
        borderColor: colors.red,
        height: 40,
        borderRadius: 5,
        marginVertical: 20,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
