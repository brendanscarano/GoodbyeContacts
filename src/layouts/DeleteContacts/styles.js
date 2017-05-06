import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 40,
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
    bottomBar: {
        flex: 1,
        backgroundColor: colors.lightBlue,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 70,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
    },
    backButtonWrapper: {
        alignItems: 'stretch',
        alignSelf: 'stretch',
        padding: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 15,

    },
    backButtonWrapperText: {
        marginLeft: 4,
        fontSize: 18,
        color: colors.gray[5],
    }
})
