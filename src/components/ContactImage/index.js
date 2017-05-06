import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ContactImage(props) {
    const borderRadius = (props.imageSize || 100) / 2;

    return (
        <View style={[styles.iconWrapper, props.iconWrapperStyles]}>
            {
                props.hasThumbnail
                    ? <Image
                          style={{
                              width: props.imageSize || 100,
                              height: props.imageSize || 100,
                              borderRadius,
                          }}
                          source={{ uri: props.thumbnailPath }}
                      />
                    : <Icon
                          name="user"
                          color={colors.gray[0]}
                          size={props.iconSize || 60}
                          style={[styles.icon, props.iconStyles]}
                      />

            }
        </View>
    )
}

const styles = StyleSheet.create({
    iconWrapper: {
        width: 80,
        height: 80,
        borderRadius: 100/2,
        backgroundColor: colors.gray[1],
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        backgroundColor: colors.gray[1],
        marginTop: 10,
        alignSelf: 'center',
    },
})
