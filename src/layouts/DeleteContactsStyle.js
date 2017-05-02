import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        backgroundColor: colors.background,
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
