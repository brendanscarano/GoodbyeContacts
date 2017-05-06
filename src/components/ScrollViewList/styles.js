import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 49,
    },
    contact: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contactWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        marginLeft: 10,
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 50/2,
    },
    closeIcon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginTop: 4,
        marginBottom: 0,
        fontSize: 30,
    },
})
